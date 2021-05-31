import decode from "jwt-decode";
import cookie from "js-cookie";

// fungsi untuk cek token auth pada sisi client
const checkToken = () => {
  const jwtToken = cookie.get("token");

  if (!jwtToken) return false;

  try {
    const { exp } = decode(jwtToken);

    if (exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (err) {
    return false;
  }

  return true;
};

export default checkToken;
