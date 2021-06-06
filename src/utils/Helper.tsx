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

const delay = (timeOut: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeOut);
  })
}

export {
  saveToken,
  getToken,
  delay
}