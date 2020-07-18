module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zip_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      delivery: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      client_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telephone_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      payment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      total_value: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      request_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('requests');
  },
};
