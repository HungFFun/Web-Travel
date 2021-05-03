/* eslint-disable no-unused-vars */

export const initFbsdk = () => {
  return new Promise((resolve) => {
    window.fbAsyncInit = function() {
      /*global FB*/
      FB.init({
        appId: '296689358726495',
        cookie: true,
        xfbml: true,
        version: 'v10.0',
      });

      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  });
};
