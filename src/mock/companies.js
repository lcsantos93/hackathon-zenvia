const { v4: uuidv4 } = require('uuid');

const comapanies = [
    {
        "id": uuidv4(),
        "company-name": "Lojas Renner",
        "description": "Loja de Roupas e acessórios",
        "category": "Roupas",
        "claims": "20",
        "claims-resolved": "10"
    },
    {
        "id": uuidv4(),
        "company-name": "Lojas Riachuelo",
        "description": "Loja de Roupas e acessórios",
        "category": "Roupas",
        "claims": "10",
        "claims-resolved": "10"
    },
    {
        "id": uuidv4(),
        "company-name": "Lojas c&a",
        "description": "Loja de Roupas e acessórios",
        "category": "Roupas",
        "claims": "30",
        "claims-resolved": "10"
    }
]

module.exports = comapanies;