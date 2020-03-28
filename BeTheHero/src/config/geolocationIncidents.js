import AsyncStorage from "@react-native-community/async-storage";

export default {
  async setGeolocationIncidents(config) {
    await AsyncStorage.setItem('@geoConfig', config);
  },
  async isGeolocationIncidents() {
    const geoConfig = await AsyncStorage.getItem('@geoConfig');
    return geoConfig;
  },
};
