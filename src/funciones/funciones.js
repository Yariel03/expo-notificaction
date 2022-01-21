const { Expo } = require("expo-server-sdk");
let expo = new Expo();

const handlePushTokens = (title, body, pushToken) => {
  let notifications = [];

  console.table([{ title: title }, { body: body }, { pushToken: pushToken }]);

  notifications.push({
    to: pushToken,
    sound: "default",
    title: title,
    body: body,
    data: { body },
  });
  // }

  let chunks = expo.chunkPushNotifications(notifications);

  (async () => {
    for (let chunk of chunks) {
      try {
        let receipts = await expo.sendPushNotificationsAsync(chunk);
        console.log(receipts);
      } catch (error) {
        console.error(error);
      }
    }
  })();
};

module.exports = {
  handlePushTokens,
};
