import sgMail from "@sendgrid/mail";

sgMail.setApiKey(
  "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",
);

export async function sendEmail(to, subject, text, html) {
  console.log(process.env.CONTACT_EMAIL);

  console.log(process.env.SENDER_EMAIL);

  const msg = {
    to: [process.env.CONTACT_EMAIL, "zach@coolmarketing.com"],
    from: process.env.SENDER_EMAIL,
    subject,
    text,
    html,
  };
  console.log("THIS IS MSG BEING SENT", msg);
  await sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error("Error sending email: ", error.response.body);

      console.error(error);
    });
}
