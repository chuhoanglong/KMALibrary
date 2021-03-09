import React, { Component } from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    Dimensions,
    Animated,
    TouchableWithoutFeedback
} from 'react-native';
const { width, height } = Dimensions.get('window');
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
                        <Animated.View
                            style={[styles.styWrapModal, {
                                transform: [{ translateX: transformX }]
                            }]}
                        >

                        </Animated.View>
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
    }
})