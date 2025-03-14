import { baseUrl } from "@/constant/variable";
import axios from "axios";
import Cookies from "js-cookie";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${baseUrl}/auth/login`,
      { email, password },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { token } = response.data;
    Cookies.set("token", token, {
      expires: 7,
      secure: true,
      sameSite: "strict",
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const whoami = async () => {
  try {
    const response = await axios.get(`${baseUrl}/auth/whoami`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
