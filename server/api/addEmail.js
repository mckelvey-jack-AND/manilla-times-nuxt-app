import MailerLite from "@mailerlite/mailerlite-nodejs";
const mailerlite = new MailerLite({
  api_key: process.env.MAILER_KEY,
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const data = await mailerlite.subscribers.createOrUpdate({
      email: email,
    });
    console.log(data);
    return { msg: "Thanks for Subscribing :)" };
  } catch (e) {
    console.error(e);
    return { msg: "Something has gone wrong" };
  }
});
