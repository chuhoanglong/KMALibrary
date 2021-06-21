import AsyncStorage from '@react-native-async-storage/async-storage';

const saveToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('@token_kma', token);
  } catch (e) {
    // saving error
  }
}

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@token_kma')
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
  }
}

const saveRefreshToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('@refresh_token_kma', token);
  } catch (e) {

  }
}

const getRefreshToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@refresh_token_kma')
    if (value !== null) {
      // value previously stored
      return value;
    }
    return '';
  } catch (e) {
    // error reading value
    return '';
  }
}

const delay = (timeOut: number) => {
  return new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      resolve();
    }, timeOut);
  })
}

export {
  saveToken,
  getToken,
  delay,
  saveRefreshToken,
  getRefreshToken,
}