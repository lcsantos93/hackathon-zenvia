const { v4: uuidv4 } = require('uuid');

const comapanies = [
    {
        empresa: {
            id: uuidv4(),
            nome: 'Lojas Renner',
            recomendacao: '',
            bio: 'Loja de Roupas e acessórios',
            tempoResolucaoProblema: 40,
            porcentagemResolucao: 96,
            problemas: [
                {
                    label: 'Reclamações',
                    value: 3600
                },
                {
                    label: 'Visualizações',
                    value: 13500
                },
                {
                    label: 'Chamadas',
                    value: 8506
                },
                {
                    label: 'Não reslvidas',
                    value: 1523
                }
            ],
            reclamacoes: [
                {
                    foto: '',
                    nome: '',
                    reclamacao: '',
                    status: 'Não faria negócio novamente'
                }
            ],
            principaisReclamacoes: [
                {
                    label: 'Prazo',
                    value: 34
                },
                {
                    label: 'Atendimento',
                    value: 50
                },
                {
                    label: 'label1',
                    value: 34
                }
            ],
            historicoReclamacoes: [
                {
                    label: 'Atendidas',
                    value: '10'
                },
                {
                    label: 'Não atendidas',
                    value: '5'
                }
            ]
        },
    },
    {
        empresa: {
            id: uuidv4(),
            nome: 'Lojas Riachuelo',
            recomendacao: '',
            bio: 'Loja de Roupas e acessórios',
            tempoResolucaoProblema: 40,
            porcentagemResolucao: 96,
            problemas: [
                {
                    label: 'Reclamações',
                    value: 3600
                },
                {
                    label: 'Visualizações',
                    value: 13500
                },
                {
                    label: 'Chamadas',
                    value: 8506
                },
                {
                    label: 'Não reslvidas',
                    value: 1523
                }
            ],
            reclamacoes: [
                {
                    foto: '',
                    nome: '',
                    reclamacao: '',
                    status: 'Não faria negócio novamente'
                }
            ],
            principaisReclamacoes: [
                {
                    label: 'Prazo',
                    value: 34
                },
                {
                    label: 'Atendimento',
                    value: 50
                },
                {
                    label: 'label1',
                    value: 34
                }
            ],
            historicoReclamacoes: [
                {
                    label: 'Atendidas',
                    value: '10'
                },
                {
                    label: 'Não atendidas',
                    value: '5'
                }
            ]
        },
    },
    {
        empresa: {
            id: uuidv4(),
            nome: 'Lojas C&A',
            recomendacao: '',
            bio: 'Loja de Roupas e acessórios',
            tempoResolucaoProblema: 40,
            porcentagemResolucao: 96,
            problemas: [
                {
                    label: 'Reclamações',
                    value: 3600
                },
                {
                    label: 'Visualizações',
                    value: 13500
                },
                {
                    label: 'Chamadas',
                    value: 8506
                },
                {
                    label: 'Não reslvidas',
                    value: 1523
                }
            ],
            reclamacoes: [
                {
                    foto: '',
                    nome: '',
                    reclamacao: '',
                    status: 'Não faria negócio novamente'
                }
            ],
            principaisReclamacoes: [
                {
                    label: 'Prazo',
                    value: 34
                },
                {
                    label: 'Atendimento',
                    value: 50
                },
                {
                    label: 'label1',
                    value: 34
                }
            ],
            historicoReclamacoes: [
                {
                    label: 'Atendidas',
                    value: '10'
                },
                {
                    label: 'Não atendidas',
                    value: '5'
                }
            ]
        },
    }
];

module.exports = comapanies;