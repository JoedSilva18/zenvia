import Request from '../models/Request';

class RequestController {
    async store(req, res) {
        const request = await Request.create(req.body);

        return res.status(200).json(request);
    };

    async show(req, res) {

    };
}

export default new RequestController();