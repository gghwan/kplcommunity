import axios from "axios";
import { Platform } from "react-native";

export const baseUrls = {
  android: "http://172.30.1.43:3030",
  ios: "http://172.30.1.43:3030",
};

const axiosInstance = axios.create({
  baseURL: Platform.OS === "android" ? baseUrls.android : baseUrls.ios,
});

export default axiosInstance;
