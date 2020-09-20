const express = require('express');
var bodyParser = require('body-parser')
const companies = require('../../mock/companies.js')
const firebase = require("firebase/app");
require('firebase/auth');
require('firebase/database');

const router = express.Router()
const sendClaimController = require('../../controllers/sendClaimController');
const { v4: uuidv4, stringify } = require('uuid');

const jsonParser = bodyParser.json()

const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/companies', (req, res, next) => {
    console.log('Request Type: ', req.method);
    res.json(companies);
})

router.get('/companies/:id', (req, res) => {
    const company_id = req.params.id;
    const company = companies.map((company) => company).find((c) => c.empresa.id === company_id);
    res.json(company);
})

router.get('/empresas', (req, res, next) => {
    const firebaseConfig = {
        apiKey: "AIzaSyCplKWuqp-n9blxmh4f1iH0HJTs90LOZgc",
        authDomain: "hackathon-zenvia.firebaseapp.com",
        databaseURL: "https://hackathon-zenvia.firebaseio.com",
        projectId: "hackathon-zenvia",
        storageBucket: "hackathon-zenvia.appspot.com",
        messagingSenderId: "994976729405",
        appId: "1:994976729405:web:9d3beed8668e1cb4eb1d54"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    firebase.database().ref('/empresa/').once('value').then(function (snapshot) {
        const values = snapshot.val()
        res.json(values);
    });;

})

router.post('/send-claim', jsonParser, async (req, res) => {

    const sendClaim = await sendClaimController.sendClaim(req, res);
    if (sendClaim !== 200) {
        const body = {
            'message': 'Ocorreu um erro no envio da Reclamação',
        }
        res.status(500).send(body);
    } else {
        const body = {
            'message': 'Reclamação enviada',
        }
        res.status(201).send(body);
    }

})
module.exports = router;