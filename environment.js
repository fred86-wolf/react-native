import Constants from 'expo-constants'

const ENV = {
    dev: {
        androidClientId:'354831581968-md47qj3l0rf91lla8nqs48r82lak349n.apps.googleusercontent.com',
        androidStandaloneAppClientId:'354831581968-md47qj3l0rf91lla8nqs48r82lak349n.apps.googleusercontent.com',
        iosClientId:'354831581968-142nebe994s49egb13mi2dpu7udtuplk.apps.googleusercontent.com',
        iosStandaloneAppClientId:'354831581968-142nebe994s49egb13mi2dpu7udtuplk.apps.googleusercontent.com'
    },
    production: {
        androidClientId:'354831581968-n2mhls84vressgm88o38801d8bou9gru.apps.googleusercontent.com',
        androidStandaloneAppClientId:'354831581968-n2mhls84vressgm88o38801d8bou9gru.apps.googleusercontent.com',
        iosClientId:'354831581968-142nebe994s49egb13mi2dpu7udtuplk.apps.googleusercontent.com',
        iosStandaloneAppClientId:'354831581968-142nebe994s49egb13mi2dpu7udtuplk.apps.googleusercontent.com'
    }
};

export default (env = Constants.manifest.releaseChannel) => {
    if (__DEV__) {
        return ENV.dev;
    } else{
        return ENV.production;
    }
};
