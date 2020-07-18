import Session from '../models/Session';
import checkExistence from '../../utils/checkExistence';

class SessionController {
  async store(req, res) {
    const session = await Session.create(req.body);

    return res.status(200).json(session);
  }

  async show(req, res) {
    const { telephone_number } = req.params;

    const session = await Session.findOne({
      where: {
        telephone_number,
      },
    });

    if (!checkExistence(session)) {
      return res.status(404).json({ message: 'Session does not exists' });
    }

    const { session_id } = session;

    return res.status(200).json({ session_id });
  }

  async update(req, res) {
    const { telephone_number, session_id } = req.params;

    const session = await Session.findOne({
      where: {
        telephone_number,
      },
    });

    if (!checkExistence(session)) {
      return res.status(404).json({ message: 'Session does not exists' });
    }

    await session.update({
      session_id,
    });

    return res.status(200).json(session);
  }
}

export default new SessionController();
