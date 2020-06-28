import API_KEY from "../currency-api-key";
import axios from "axios";

const BASE_URL = "http://apilayer.net/api/";
export const CONVERT_CURRENCY = "CONVERT_CURRENCY";

export default function convertCurrncies({ from, to, value }) {
  //acessar a url do currency layer.com
  // passa o De e o Para e o valor
  // recebe o valor convertido

  //b960c61d747c258f42f11c0443347a14

  const url = `${BASE_URL}/convert?access_key=${API_KEY}`;
  const params = { from: from, to: to, amount: value };
  const request = axios.get(url, params);
  return {
    type: CONVERT_CURRENCY,
    payload: request
  };
}
