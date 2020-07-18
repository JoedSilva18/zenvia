import Sequelize, { Model } from 'sequelize';

class Request extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        zip_code: Sequelize.STRING,
        address: Sequelize.STRING,
        delivery: Sequelize.BOOLEAN,
        client_name: Sequelize.STRING,
        telephone_number: Sequelize.STRING,
        payment: Sequelize.STRING,
        total_value: Sequelize.DOUBLE,
        request_status: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Request;
