import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Picker } from 'native-base';
import { Platform } from '../../themes/platform';
import { dataOptionSelect } from './types';
import { fontRegular } from '../../themes/fontFamily';
import { COLORS } from '../../constants';

interface Props {
    icon?: string;
    placeholder?: string;
    data: dataOptionSelect[],
    value?: string,
    styleText?: object;
    onValueChange: (itemValue: any, itemPosition: number) => void
};

const OptionSelecter = (props: Props) => {
    const { value, data, icon, placeholder, styleText, onValueChange } = props;
    return (
        <View style={styles.rowForm}>
            {icon ?
                <IconAntDesign name={icon || ''} size={20} />
                :
                null
            }
            <View style={styles.viewInput}>
                {data ?
                    <Picker
                        note
                        mode="dropdown"
                        textStyle={[styles.textStyle, styleText]}
                        itemTextStyle={[styles.textStyle, styleText]}
                        style={styles.picker}
                        placeholder={placeholder}
                        selectedValue={value}
                        onValueChange={(value, index) => {
                            onValueChange(value, index);
                        }}
                    >
                        {
                            data.map((val, key) => {
                                return (
                                    <Picker.Item
                                        key={key}
                                        label={val.label}
                                        value={val.value}
                                    />
                                );
                            })
                        }
                    </Picker>
                    : null
                }
            </View>
            {Platform.OS == 'ios' && <IconAntDesign name={'caretdown'} />}
        </View >
    );
};

export default OptionSelecter;

const styles = StyleSheet.create({
    rowForm: {
        marginVertical: 10,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    viewInput: {
        height: 40,
        paddingTop: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    picker: {
        minWidth: 50,
    },
    textStyle: {
        color: COLORS.BLACK,
        fontFamily: fontRegular,
    },
});