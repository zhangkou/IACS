
angular.module('myApp.config', [])
    .constant('version', '0.1')

    // end this with a trailing slash
    .constant('FIREBASE_URL', 'https://ang-www.firebaseio.com/')

    //
    .constant('loginRedirectPath', '/login')

    // max number of feeds to display
    .constant('FB_DEMO_LIMIT', 5)
    .constant('FB_LIVE_LIMIT', 25)

    // how often we check for new feeds; most sites will not allow you to do this more than every 60 mins
    .constant('CHECK_INTERVAL', 30*60*1000 /* 30 mins */ ) //todo investigate pubsubhubbub

    // number of RSS articles we fetch from each URL when an update takes place
    // larger numbers will make performance slow, since we can only see the latest 25
    // there's no reason to get far beyond that here
    .constant('NUMBER_TO_FETCH', 25)

    // firebase Path
    .constant('FB_PATH', {
        users_: 'users/', //_ means end this with a trailing slash
        userProfile_: 'profile/',
        REPLACE_DOT: '||' // replace '.' in email
    })


    .constant('authProviders', [
//        { id: 'twitter',  name: 'Twitter',  icon: 'icon-twitter'  },
//        { id: 'facebook', name: 'Facebook', icon: 'icon-facebook' },
//        { id: 'github',   name: 'GitHub',   icon: 'icon-github'   },
        { id: 'password',    name: 'Email',    icon: 'icon-envelope' }
    ])

    .config(function($logProvider) {
        // uncomment to enable dev logging in the app
        //$logProvider.debugEnabled && $logProvider.debugEnabled(true);
    });