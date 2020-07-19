import zenvia from '@zenvia/sdk';
import Request from '../models/Request';

class SmsController {
    async send(req, res) {
        const { id } = req.params;

        const client = new zenvia.Client(process.env.ZENVIA_KEY);

        const client_request = await Request.findOne({
            where: {
                id,
            },
        });

        const message = client_request.delivery ? 
            `Olá ${client_request.client_name}, seu pedido ficou pronto e está a caminho de ${client_request.address}! Em alguns minutos ele será entregue.` :
            `Olá ${client_request.client_name}, seu pedido está te esperando! Você já pode retirá-lo quando quiser.`;

        const to = client_request.telephone_number;
        
        const sms = client.getChannel('sms');

        const content = new zenvia.TextContent(message);

        await sms.sendMessage('upbeat-ink', `${to}`, content)
        .then(res => {
            console.log('Response:', res);
        })
        .catch(error => {
            console.log('Error: ', error);
        });

        const subscriptionMessage = new zenvia.MessageSubscription({
            url: process.env.ZENVIA_URL
        },
        {
            channel: 'sms'
        });
        const messageResponse = await client.createSubscription(subscriptionMessage);

        const subscriptionStatus = new zenvia.MessageStatusSubscription({
            url: process.env.ZENVIA_URL
        },
        {
            channel: 'sms'
        });
        const messageStatusResponse = await client.createSubscription(subscriptionStatus);

        const webhook = new zenvia.WebhookController({
            messageEventHandler: (messageEvent) => {
                console.log('Message event:', messageEvent);
            },
            messageStatusEventHandler: (messageStatusEvent) => {
                console.log('Message status event:', messageStatusEvent);
            },
            client,
            url: process.env.ZENVIA_URL,
            channel: 'sms',
        });
        webhook.init();

        console.log(messageResponse, messageStatusResponse);

        return response.json({ 'Status': 'Ok' });
    }

}

export default new SmsController();