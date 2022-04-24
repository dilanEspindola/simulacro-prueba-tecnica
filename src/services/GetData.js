import axios from "axios";

export const GetData = async (url) => {
  const res = await axios.get(url);
  const data = res.data;
  return data;
};
