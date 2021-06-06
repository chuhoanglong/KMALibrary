import React, { Component } from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    Dimensions,
    Animated,
    TouchableWithoutFeedback,
    SafeAreaView
} from 'react-native';
const { width, height } = Dimensions.get('window');
import RippleButton from '../../common/RippleButton';
import IconFeather from 'react-native-vector-icons/Feather';
import Row from '../../utils/Row';
import OptionSelecter from '../../utils/OptionSelecter';
import { dataAuthor, dataCategory, dataLanguage, dataPublishing, dataReadingStatus, dataYearPublishing } from '../__mockdata';
export default class ModalFilter extends Component {

    state = {
        transformX: new Animated.Value(width),
        visible: false,
    }


    showModal = async () => {
        const { transformX } = this.state;
        await this.setState({ visible: true });
        Animated.timing(transformX, {
            duration: 500,
            toValue: 0,
        }).start();
    }

    closeModal = () => {
        const { transformX } = this.state;
        Animated.timing(transformX, {
            duration: 500,
            toValue: width,
            useNativeDriver: false,
        }).start(() => {
            this.setState({ visible: false });
        });
    }

    render() {
        const { visible, transformX } = this.state;
        return (
            <Modal visible={visible} transparent={true}>
                <TouchableWithoutFeedback onPress={this.closeModal}>
                    <View style={styles.contain}>
                        <TouchableWithoutFeedback>
                            <Animated.View
                                style={[styles.styWrapModal, {
                                    transform: [{ translateX: transformX }]
                                }]}
                            >
                                <SafeAreaView>
                                    <Row>
                                        <Text style={styles.styHeader}>Lọc sách</Text>
                                        <RippleButton rippleSize={30}>
                                            <IconFeather name={'refresh-ccw'} size={25} />
                                        </RippleButton>
                                    </Row>

                                    <OptionSelecter
                                        data={dataAuthor}
                                        placeholder={dataAuthor[0].label}
                                        value={dataAuthor[0].value}
                                        icon={'edit'}
                                        onValueChange={() => { }}
                                    />

                                    <OptionSelecter
                                        data={dataPublishing}
                                        placeholder={dataPublishing[0].label}
                                        value={dataPublishing[0].value}
                                        icon={'printer'}
                                        onValueChange={() => { }}
                                    />

                                    <OptionSelecter
                                        data={dataYearPublishing}
                                        placeholder={dataYearPublishing[0].label}
                                        value={dataYearPublishing[0].value}
                                        icon={'calendar'}
                                        onValueChange={() => { }}
                                    />

                                    <OptionSelecter
                                        data={dataCategory}
                                        placeholder={dataCategory[0].label}
                                        value={dataCategory[0].value}
                                        icon={'book'}
                                        onValueChange={() => { }}
                                    />

                                    <OptionSelecter
                                        data={dataLanguage}
                                        placeholder={dataLanguage[0].label}
                                        value={dataLanguage[0].value}
                                        icon={'cloudo'}
                                        onValueChange={() => { }}
                                    />

                                    <OptionSelecter
                                        data={dataReadingStatus}
                                        placeholder={dataReadingStatus[0].label}
                                        value={dataReadingStatus[0].value}
                                        icon={'solution1'}
                                        onValueChange={() => { }}
                                    />

                                </SafeAreaView>
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    styWrapModal: {
        backgroundColor: '#FFF',
        width: width * 0.75,
        height,
        alignSelf: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    styHeader: {
        fontFamily: 'Nunito-Bold',
        fontSize: 16,
        textTransform: 'uppercase',
        letterSpacing: 3,
        flex: 1,
    }
});