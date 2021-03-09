import React from 'react';
import { View } from 'react-native';
import Ripple from 'react-native-material-ripple';

export default class RippleButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            rippleColor: 'transparent'
        }
        this.onPressIn = this.onPressIn.bind(this);
        this.onPressOut = this.onPressOut.bind(this);
        this.onPress = this.onPress.bind(this);
    }

    onPressIn = () => {
        const { pressInColor } = this.props;
        this.setState({
            rippleColor: pressInColor || 'rgba(213,213,213,0.5)'
        });
    }

    onPress = (event) => {
        const { onPress } = this.props;
        if ('function' === typeof onPress) {
            onPress(event);
        }
    }

    onPressOut = () => {
        this.setState({
            rippleColor: 'transparent'
        });
    }

    render() {
        const { rippleColor, style, rippleSize, rippleDuration, disabled, viewStyle } = this.props;
        return (
            <Ripple
                disabled={disabled || false}
                rippleColor={rippleColor || 'rgb(0, 0, 0)'}
                style={style}
                rippleCentered={true}
                rippleSize={rippleSize || 0}
                rippleDuration={rippleDuration || 400}
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
                onPress={this.onPress}
            >
                <View style={[{ backgroundColor: this.state.rippleColor }, viewStyle]}>
                    {this.props.children}
                </View>
            </Ripple>
        );
    }
}


