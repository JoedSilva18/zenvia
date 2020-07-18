import Request from '../models/Request';
import checkExistence from '../../utils/checkExistence';

class RequestController {
    async store(req, res) {
        const request = await Request.create(req.body);

        return res.status(200).json(request);
    };

    async show(req, res) {
        const { request_id } = req.params;

        const request = await Request.findOne({
            where: {
                request_id,
            },
        });

        if(!checkExistence(request)) {
            return res.status(400).json({ message: 'Pedido não encontrado' });
        } 

        return res.status(200).json(request);
    };

    async index(req, res) {
        const requests = await Request.findAll();

        if(!checkExistence(requests)) {
            return res.status(400).json({ message: 'Não existem pedidos' });
        }

        return res.status(200).json(requests);
    };

    async update(req, res) {
        const { request_id } = req.params;

        const request = await Request.findOne({
            where: {
                request_id,
            },
        });

        if(!checkExistence(request)) {
            return res.status(400).json({ message: 'Pedido não encontrado' });
        }

        const {
            name,
            amount,
            beverage,
            address,
            zip_code,
            city,
            delivery,
            client,
            payment,
            request_id
        } = req.body;

        const success = await request.update({
            name,
            amount,
            beverage,
            address,
            zip_code,
            city,
            delivery,
            client,
            payment,
            request_id
        });

        if(!success) {
            return res.status(400).json({ message: 'Não foi possível atualizar o pedido' });
        }

        return res.status(200).json(request);
    };

    async delete(req, res) {
        const { request_id } = req.params;

        const success = await Request.destroy({
            where: {
                request_id
            },
        });

        if(!success) {
            return res.status(400).json({ message: 'Não foi possível excluir o pedido' });
        }

        return res.status(200).json({ message: 'Pedido removido' });
    };
}

export default new RequestController();