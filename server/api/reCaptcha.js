import axios from "axios";
export default defineEventHandler(async (event) => {
  const { token } = await readBody(event);
  const data = await axios.get(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  );
  console.log(data);
  if (data.success) {
    return {
      success: true,
      message: "token verified",
    };
  } else {
    console.log("ReCaptcha fail", data);
    return {
      success: false,
      message: "invalid token",
    };
  }
});
