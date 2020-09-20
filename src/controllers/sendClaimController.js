const request = require('request');
const bent = require('bent')

const getJSON = bent('json')
const getBuffer = bent('buffer')

class SendClaimController {

    static async sendClaim(req, res) {
        const name = req.body.nome;
        const phone = req.body.telefone;
        let id = 'CH:' + new Date();

        const message = `Olá *${name}*, o seu chamado foi registrado no nosso atendimento através do *ticket ${id}*. Em breve teremos novas informações sobre o chamado. Não se preocupe, sua solicitação será atendida o mais breve possível.`

        var headers = {
            'Content-Type': 'application/json',
            'X-API-TOKEN': '9crTmsHrJUKHszHxrH6jmFSiAzdQYKkCZFpP'
        };
        let dataObject = {
            from: 'little-chair',
            to: phone,

            contents: [
                {
                    type: "text",
                    text: message
                }
            ]
        }
        const post = bent('https://api.zenvia.com/v1/channels/', 'POST', headers, 200);
        const response = await post('whatsapp/messages', JSON.stringify(dataObject));

        return response.statusCode;
    }
}

module.exports = SendClaimController;   