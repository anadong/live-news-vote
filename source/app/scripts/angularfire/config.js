angular.module('firebase.config', [])
  .constant('FBURL', 'https://vote-news-live.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['facebook'])

  .constant('loginRedirectPath', '/login');
