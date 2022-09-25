import cryptojs from "crypto-js";

export const hashPassword = (password) => {
  return cryptojs.HmacSHA256(password, import.meta.env.VITE_HASH_SECRET_KEY).toString();
};
