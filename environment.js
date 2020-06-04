import Constants from 'expo-constants'

const ENV = {
    dev: {
        iosClientId:'354831581968-142nebe994s49egb13mi2dpu7udtuplk.apps.googleusercontent.com',
        androidClientId:'354831581968-n2mhls84vressgm88o38801d8bou9gru.apps.googleusercontent.com',
        apiKeyIOS: 'AIzaSyAyFw76D4A9Xmaxf2vH_xifDpHJR4A74sA',
        iosStandaloneAppClientId:'354831581968-142nebe994s49egb13mi2dpu7udtuplk.apps.googleusercontent.com',
        androidStandaloneAppClientId:'354831581968-n2mhls84vressgm88o38801d8bou9gru.apps.googleusercontent.com',
        apiKeyAndroid: 'AIzaSyBwff_Y_QdDiRCxAs9bBVm57ySCULLPF5o'
    },
    production: {
        iosClientId:'354831581968-142nebe994s49egb13mi2dpu7udtuplk.apps.googleusercontent.com',
        androidClientId:'354831581968-n2mhls84vressgm88o38801d8bou9gru.apps.googleusercontent.com',
        apiKeyIOS: 'AIzaSyAyFw76D4A9Xmaxf2vH_xifDpHJR4A74sA',
        iosStandaloneAppClientId:'354831581968-142nebe994s49egb13mi2dpu7udtuplk.apps.googleusercontent.com',
        androidStandaloneAppClientId:'354831581968-n2mhls84vressgm88o38801d8bou9gru.apps.googleusercontent.com',
        apiKeyAndroid: 'AIzaSyBwff_Y_QdDiRCxAs9bBVm57ySCULLPF5o'
    }
};

export default (env = Constants.manifest.releaseChannel) => {
    if (__DEV__) {
        return ENV.dev;
    } else{
        return ENV.production;
    }
};
