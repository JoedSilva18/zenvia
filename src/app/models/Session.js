import Sequelize, { Model } from 'sequelize';

class Session extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        telephone_number: Sequelize.STRING,
        session_id: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Session;
