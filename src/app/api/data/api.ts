import axios from "axios";
import { baseUrl } from "@/constant/variable";

export const getTotalKK = async () => {
  try {
    const response = await axios.get(`${baseUrl}/form/totalKK`);
    return response.data.totalKK;
  } catch (error) {
    console.error("Gagal mengambil data totalKK:", error);
    return null;
  }
};


export const getTotalBantuan = async () => {
  try {
    const response = await axios.get(`${baseUrl}/form/totalBantuan`);
    return response.data.totalBantuan;
  } catch (error) {
    console.error("Gagal mengambil data totalBantuan:", error);
    return null;
  }
};
