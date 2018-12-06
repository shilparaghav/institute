'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Admissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      fatherName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      
      admissionDate: {
        type: Sequelize.DATE
      },
      enqId: {
        type: Sequelize.INTEGER
        // references: {
        //   // This is a reference to another model
        //   model: Enquiry,
        //   // This is the column name of the referenced model
        //   key: 'id',
        // }
      },
      courseId: {
        type: Sequelize.INTEGER

        // references: {
        //   // This is a reference to another model
        //   model: Course,

        //   // This is the column name of the referenced model
        //   key: 'id',
        // }
      },
      status: {
        type: Sequelize.ENUM('OPEN', 'CLOSE', 'DELETED')
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Admissions');
  }
};