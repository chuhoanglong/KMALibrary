import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from "react";
import { View, Text, Modal, StyleSheet, Alert } from "react-native";
import { COLORS } from "../../../constants";
import { fontRegular, fontRegularBold } from "../../../themes/fontFamily";
import { Platform } from "../../../themes/platform";
import RippleButton from "../../common/RippleButton";
import FormInput from "../../utils/FormInput";
import Row from "../../utils/Row";
import * as Helper from '../../../utils/Helper';

interface Props {
  value?: string;
  updateBookShelf: (bookShelf: any) => void;
}

const ModalEditNameBookshelf = forwardRef((props: Props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [nameShelf, setNameShelf] = useState("");
  const [bookShelf, setBookShelf] = useState({
    name: '',
    id: ''
  });



  useImperativeHandle(ref, () => ({
    showModal: (data: any) => {
      setIsVisible(true);
      setBookShelf({ ...bookShelf, name: data.ten_ke, id: data._id });
    },
  }));

  const handleConfirm = async () => {
    const token = await Helper.getToken();
    props.updateBookShelf({ token, bookShelf });
    setIsVisible(false);
  }

  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.contain}>
        <View style={styles.styWrapContent}>
          <Text style={styles.styTxtTitle}>Sửa tên</Text>
          <FormInput
            label={"Tên mới"}
            autoFocus
            value={bookShelf.name}
            onChangText={(text) => setBookShelf({ ...bookShelf, name: text })}
          />
          <Row style={styles.styWrapBtn}>
            <RippleButton onPress={() => setIsVisible(false)}>
              <View style={styles.styBtn}>
                <Text style={styles.styTxtBtn}>Huỷ</Text>
              </View>
            </RippleButton>
            <RippleButton onPress={handleConfirm}>
              <View style={styles.styBtn}>
                <Text style={styles.styTxtBtn}>Đồng ý</Text>
              </View>
            </RippleButton>
          </Row>
        </View>
      </View>
    </Modal>
  );
});

export default React.memo(ModalEditNameBookshelf);

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  styWrapContent: {
    width: "90%",
    minHeight: 100,
    backgroundColor: COLORS.WHITE,
    padding: 20,
    borderRadius: 10,
  },
  styTxtTitle: {
    fontFamily: fontRegularBold,
    fontSize: Platform.SizeScale(18),
  },
  styBtn: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    minWidth: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  styWrapBtn: {
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  styTxtBtn: {
    fontFamily: fontRegular,
  },
});
