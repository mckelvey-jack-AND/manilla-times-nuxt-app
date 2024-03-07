import axios from "axios";
export default defineEventHandler(async (event) => {
  const { token } = await readBody(event);
  const { data } = await axios.get(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  );
  if (data.success) {
    return {
      success: true,
    };
  } else {
    console.log("ReCaptcha fail", data);
    return {
      success: false,
    };
  }
});
