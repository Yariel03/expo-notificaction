const { handlePushTokens } = require("./../funciones/funciones");

const home = (req, resp) => {
  resp.json({ servidor: "Push Notification Server Running" });
};

const token = (req, resp) => {
  saveToken(req.body.token.value);
  let token = req.body.token.value;
  console.log(`Received push token, ${req.body.token.value}`);
  return resp.json({ Received_push_token, token });
};

const message = (req, resp) => {
  const { title, sms, token } = req.body;
  handlePushTokens(title, sms, token);
  console.log(`Received message, with title:`, sms);
  console.log(`Received token: ${req.body.token}`);
  console.log(`=======================================:`);
  // resp.send(`Received message, with title: ${req.body.title}`);
  return resp.json({ TOKEN: token });
};
module.exports = {
  home,
  token,
  message,
};
