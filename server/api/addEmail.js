import MailerLite from "@mailerlite/mailerlite-nodejs";
const mailerlite = new MailerLite({
  api_key: process.env.MAILER_KEY,
});

export default defineEventHandler(async (event) => {
  const { email } = await readBody(event);
  try {
    // const data = await mailerlite.subscribers.createOrUpdate({
    //   email: email,
    // });
    // console.log(data);
    return "Email Added";
  } catch (e) {
    console.errror(e);
    return "Something Has gone wrong";
  }
});
