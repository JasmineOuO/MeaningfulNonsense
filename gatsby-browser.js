require('typeface-dancing-script');
require('typeface-montserrat');
require('typeface-open-sans-condensed');
require('typeface-ibm-plex-serif');
require('typeface-cutive-mono');
require('typeface-rock-salt');
require('typeface-bentham');
require('typeface-roboto');

/* eslint-disable */
exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    'This application has been updated. ' + 'Reload to display the latest version?'
  );

  if (answer === true) {
    window.location.reload();
  }
};

// exports.onServiceWorkerUpdateFound = () => {
//   const goToBlog = () => {
//     window.location.href = 'https://meaningfulnonsense.ca';
//   };

//   const closeNotification = () => {
//     navigator.serviceWorker.ready.then((registration) => {
//       registration.closeNotification();
//     });
//   };

//   const showNotification = () => {
//     Notification.requestPermission((result) => {
//       if (result === 'granted') {
//         navigator.serviceWorker.ready.then((registration) => {
//           registration.showNotification('Meaningful Nonsense Update', {
//             badge: 'icons/mstile-70x70.png',
//             body: 'New blog post!',
//             icon: 'icons/favicon.ico',
//             vibrate: [200, 100, 200, 100, 400],
//             tag: 'push-notification',
//             actions: [ // you can customize these actions as you like
//               {
//                 action: goToBlog(), // you should define this
//                 title: 'Check it out',
//               },
//               {
//                 action: closeNotification(), // you should define this
//                 title: 'Ok',
//               },
//             ],
//           });
//         });
//       }
//     });
//   };

//   if (Notification.permission !== 'blocked') {
//     showNotification();
//   }
// };
