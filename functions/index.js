const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = notification => {
  return admin
    .firestore()
    .collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
};

exports.postCreated = functions.firestore.document('/posts/{postId}').onCreate(doc => {
  const post = doc.data();
  const notification = {
    content: 'Добавлен новый пост',
    user: `${post.authorFirstName} ${post.authorLastName}`,
    time: admin.firestore.FieldValue.serverTimestamp()
  };

  return createNotification(notification);
});
