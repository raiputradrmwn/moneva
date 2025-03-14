import { baseUrl } from "@/constant/variable";
import axios from "axios";


export const getInput = async () => {
    try {
      const response = await axios.get(`${baseUrl}/form/input   `);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  export const getDetailById = async (id: number) => {
    try {
      const response = await axios.get(`${baseUrl}/form/input/${id}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching detail:", error);
      throw error;
    }
  };