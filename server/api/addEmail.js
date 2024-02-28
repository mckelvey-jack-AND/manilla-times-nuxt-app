import MailerLite from "@mailerlite/mailerlite-nodejs";
const mailerlite = new MailerLite({
  api_key: process.env.MAILER_KEY,
});

export default defineEventHandler(async (event) => {
  const { email } = await readBody(event);
  try {
    const data = await mailerlite.subscribers.createOrUpdate({
      email: email,
    });
    console.log(data);
    return { msg: "Thanks for Subscribing :)" };
  } catch (e) {
    console.error(e);
    return { error: true, msg: "Something has gone wrong" };
  }
});
