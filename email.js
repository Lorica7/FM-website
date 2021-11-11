// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require ('@sendgrid/mail');
sgMail.setApiKey (process.env.SENDGRID_API_KEY);
const msg = {
  email: 'hello@daniellelamorte.com', // Change to your recipient
};
sgMail
  .send (msg)
  .then (() => {
    console.log ('Email sent');
  })
  .catch (error => {
    console.error (error);
  });
