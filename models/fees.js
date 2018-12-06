'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fees = sequelize.define('Fees', {
    paymentDate: DataTypes.DATE,
    amountPaid: DataTypes.INTEGER,
    amountPending: DataTypes.INTEGER,
    status: DataTypes.ENUM('OPEN','CLOSE','DELETED'),
    admissionId: {
      type: DataTypes.INTEGER
      //admission id is taken from admission table
      
    },

  }, {});
  Fees.associate = function(models) {
    // associations can be defined here
  };
  return Fees;
};