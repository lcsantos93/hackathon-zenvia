
const express = require('express');
const comapanies = require('../../mock/companies.js');
const companies = require('../../mock/companies.js')
const router = express.Router()


router.get('/companies', (req, res, next) => {
    console.log('Request Type: ', req.method);
    res.json(companies);
})

router.get('/companies/:id', (req, res) => {
    const company_id = req.params.id;
    const company = comapanies.map((company) => company).find((c) => c.id === company_id);
    res.json(company);
})

module.exports = router;