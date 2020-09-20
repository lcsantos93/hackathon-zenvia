const express = require('express');
var bodyParser = require('body-parser')
const companies = require('../../mock/companies.js')

const router = express.Router()
const sendComplaintController = require('../../controllers/sendComplaintController');
const fireBaseController = require('../../controllers/fireBaseController');

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

router.get('/empresas', async (req, res, next) => {

    const companies = await fireBaseController.getCompanies(req, res);
    if (companies.length > 0) {
        res.status(200).json(companies);
    } else {
        const body = {
            'message': 'Não constam empresas cadastradas',
        }
        res.status(500).send(body);
    }


})

router.post('/send-complaint', jsonParser, async (req, res) => {

    const sendComplaint = await sendComplaintController.sendComplaint(req, res);
    if (sendComplaint !== 200) {
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