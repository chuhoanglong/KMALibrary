import React, { useCallback, useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import HeaderScreen from "../common/Header";
import Search from "../utils/Search";
import OptionTab from "../utils/OptionTab";
import ListBookShelf from "./components/ListBookShelf";
import ModalFilter from "./components/ModalFilter";
import ModalBookshelf from './components/ModalBookshelf';
import ModalEdit from './components/ModalEdit';
import ModalEditNameBookshelf from './components/ModalEditNameBookshelf';
import * as Helper from '../../utils/Helper';
import Loading from '../../components/Loading';
import { stateInitItemEdit } from './types';
interface TypeSearchProps {
  tenKe: string,
  token: string | undefined
}
interface BookScreenProps {
  loading: boolean,
  booksShelf: any,
  getBooksShelf: (payload: any) => void,
  addBookShelf: (bookShefl: any) => void,
  updateBookShelf: (bookShefl: any) => void,
  deleteBookShelf: (payload: any) => void,
  searchBookShelf: (payload: TypeSearchProps) => void,
}

const BookScreen = (props: BookScreenProps) => {
  const { booksShelf, loading } = props;
  const refModalFilter: any = useRef();
  const refModalBookshelf: any = useRef();
  const navigation = useNavigation();
  const refModalEdit: any = useRef();
  const refModalEditNameBookshelf: any = useRef();
  const [itemEdit, setItemEdit] = useState(stateInitItemEdit);
  const [nameBookShelf, setNameBookShelf] = useState('');

  useEffect(() => {
    getBooksShelf();
  }, []);


  const getBooksShelf = async () => {
    const token = await Helper.getToken();
    props.getBooksShelf({ token });
  }

  const onPressAdd = () => {
    navigation.navigate('AppStack', { screen: 'AddBook' });
  };

  const onLongPress = (item: any) => () => {
    console.log(item);
    setItemEdit(item);
    refModalEdit.current.onOpen();
  };

  const openEditName = () => {
    refModalEdit.current.onClose();
    refModalEditNameBookshelf.current.showModal(itemEdit);
  };

  const openDelete = () => {
    Alert.alert(
      "Thông báo",
      `Bạn có muốn xoá kệ ${itemEdit.ten_ke}`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: async () => {
            refModalEdit.current.onClose();
            const token = await Helper.getToken();
            props.deleteBookShelf({ id: itemEdit._id, token });
          }
        }
      ],
      { cancelable: false }
    );
  };

  const onChangeText = async (text: string) => {
    setNameBookShelf(text);
    const token = await Helper.getToken();
    props.searchBookShelf({ tenKe: text, token });
  }

  return (
    <View style={styles.contain}>
      <HeaderScreen />
      <Search
        value={nameBookShelf}
        placeholder={'Tìm kiếm kệ sách'}
        onChangeText={onChangeText}
      />
      <OptionTab
        labelAddKS={'Thêm kệ'}
        onPressAddKS={() => {
          refModalBookshelf?.current?.showModal();
        }}
        labelAdd={'Thêm sách'}
        onPressAdd={onPressAdd}
        labelFilter={'Lọc sách'}
        onPressFilter={() => {
          refModalFilter?.current?.showModal();
        }}
        labelSort={'Sắp xếp'}
      />
      <ListBookShelf
        loading={loading}
        data={booksShelf}
        navigation={navigation}
        onLongPress={onLongPress}
      />
      {loading &&
        <Loading />
      }
      <ModalFilter ref={refModalFilter} />
      <ModalBookshelf
        addBookShelf={props.addBookShelf}
        ref={refModalBookshelf} />
      <ModalEdit
        ref={refModalEdit}
        openEditName={openEditName}
        openDelete={openDelete}
      />
      <ModalEditNameBookshelf
        ref={refModalEditNameBookshelf}
        value={itemEdit.nameShelf}
        updateBookShelf={props.updateBookShelf}
      />
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
});
