const firebase = require("firebase/app");
require('firebase/auth');
require('firebase/database');

const firebaseConfig = {
    apiKey: "AIzaSyCplKWuqp-n9blxmh4f1iH0HJTs90LOZgc",
    authDomain: "hackathon-zenvia.firebaseapp.com",
    databaseURL: "https://hackathon-zenvia.firebaseio.com",
    projectId: "hackathon-zenvia",
    storageBucket: "hackathon-zenvia.appspot.com",
    messagingSenderId: "994976729405",
    appId: "1:994976729405:web:9d3beed8668e1cb4eb1d54"
};

class FireBaseController {
    static async getCompanies(req, res) {
        
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        
        const response = await firebase.database().ref().once('value').then(function (snapshot) {
            const values = snapshot.val();
            return values;
        }).catch( e =>{
            console.log(e);
        });

        return response;
    }
}

module.exports = FireBaseController;