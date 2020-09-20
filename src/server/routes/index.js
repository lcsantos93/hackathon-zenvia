
const express = require('express');
const companies = require('../../mock/companies.js')
const router = express.Router()


router.get('/companies', (req, res, next) => {
    console.log('Request Type: ', req.method);
    res.json(companies);
})

router.get('/companies/:id', (req, res) => {
    const company_id = req.params.id;
    const company = companies.map((company) => company).find((c) => c.empresa.id === company_id);
    res.json(company);
})

module.exports = router;