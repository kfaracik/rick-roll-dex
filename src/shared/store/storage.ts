import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'my_app_storage',
  encryptionKey: 'super_secret_key'
});
