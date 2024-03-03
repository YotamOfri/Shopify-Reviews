import axios from "axios";
export default async function LoginAuth(Account) {
  try {
    const response = await axios.post("http://localhost:3500/auth", Account, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("An error occurred during login:");
    throw error;
  }
}
