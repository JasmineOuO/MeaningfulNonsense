/* eslint-disable */
exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    'This application has been updated. '
    + 'Reload to display the latest version?',
  );

  if (answer === true) {
    window.location.reload();
  }
};

exports.onServiceWorkerUpdateFound = () => {
  const showNotification = () => {
    Notification.requestPermission((result) => {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then((registration) => {
          registration.showNotification('Update', {
            body: 'New blog post!',
            // icon: 'link-to-your-icon',
            vibrate: [200, 100, 200, 100, 200, 100, 400],
            tag: 'push-notification',
            // actions: [ // you can customize these actions as you like
            //   {
            //     action: doSomething(), // you should define this
            //     title: 'update',
            //   },
            //   {
            //     action: doSomethingElse(), // you should define this
            //     title: 'ignore',
            //   },
            // ],
          });
        });
      }
    });
  };

  showNotification();
};
