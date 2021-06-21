export type dataOptionSelect = {
    label: string;
    value: string;
};

type KeyboardType = 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';
type KeyboardTypeIOS =
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search';
type KeyboardTypeAndroid = 'visible-password';
type KeyboardTypeOptions = KeyboardType | KeyboardTypeAndroid | KeyboardTypeIOS;

export interface PropsFormInput {
    placeholder?: string;
    value?: string;
    isLabel?: boolean;
    label?: string;
    icon?: string;
    onChangText?: (text: string) => void;
    keyboardType?: KeyboardTypeOptions,
    autoFocus?: boolean;
    disable?: boolean;
    data?: any[];
    handleSelect?: (value: any) => void;
}

export interface PropsFormDate {
    onChangDate: (text: string) => void;
    placeholder?: string;
    value?: string;
    isLabel?: boolean;
    label?: string;
    icon?: string;
    disable?: boolean;
}