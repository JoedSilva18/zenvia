import Sequelize, { Model } from 'sequelize';

class Request extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                amount: Sequelize.INTEGER,
                beverage: Sequelize.STRING,
                address: Sequelize.STRING,
                zip_code: Sequelize.STRING,
                city: Sequelize.STRING,
                delivery: Sequelize.BOOLEAN,
                request_id: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default Request;