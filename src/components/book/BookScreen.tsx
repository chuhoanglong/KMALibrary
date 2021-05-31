import React, { useCallback, useRef, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import HeaderScreen from "../common/Header";
import Search from "../utils/Search";
import OptionTab from "../utils/OptionTab";
import ListBookShelf from "./ListBookShelf";
import ModalFilter from "./ModalFilter";
import ModalBookshelf from './ModalBookshelf';
import { dataBookShelf } from './__mockdata';
import ModalEdit from './ModalEdit';
import ModalEditNameBookshelf from './ModalEditNameBookshelf';

const BookScreen = () => {
  const refModalFilter: any = useRef();
  const refModalBookshelf: any = useRef();
  const navigation = useNavigation();
  const refModalEdit: any = useRef();
  const refModalEditNameBookshelf: any = useRef();
  const [itemEdit, setItemEdit] = useState({ nameShelf: "", shelfId: "" });
  const [data, setData] = useState(dataBookShelf);

  const onPressAdd = () => {
    navigation.navigate('AppStack', { screen: 'AddBook' });
  };

  const onLongPress = (item: any) => () => {
    setItemEdit(item);
    refModalEdit.current.onOpen();
  };

  const openEditName = () => {
    refModalEdit.current.onClose();
    refModalEditNameBookshelf.current.showModal();
  };

  const openDelete = () => {
    Alert.alert('Thông báo', `Bạn có muốn xoá kệ ${itemEdit.nameShelf}`, [
      {
        text: 'Xoá',
      },
      {
        text: 'Huỷ',
      },
    ]);
  };

  const handleEditNameShelf = useCallback(
    (nameNew: string) => {
      const { shelfId } = itemEdit;
      const dataEdit = data.map((item) => {
        if (item.shelfId == shelfId) {
          return {
            ...item,
            nameShelf: nameNew,
          };
        }
        return item;
      });
      setData(dataEdit);
    },
    [data, itemEdit]
  );

  return (
    <View style={styles.contain}>
      <HeaderScreen />
      <Search placeholder={'Tìm kiếm kệ sách'} />
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
        data={data}
        navigation={navigation}
        onLongPress={onLongPress}
      />
      <ModalFilter ref={refModalFilter} />
      <ModalBookshelf ref={refModalBookshelf} />
      <ModalEdit
        ref={refModalEdit}
        openEditName={openEditName}
        openDelete={openDelete}
      />
      <ModalEditNameBookshelf
        ref={refModalEditNameBookshelf}
        value={itemEdit.nameShelf}
        handleEditNameShelf={handleEditNameShelf}
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
