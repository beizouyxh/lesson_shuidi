'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.createTable('shops',{
     
     name:{
       type:Sequelize.STRING,
       allowNull:false,
id:{
       type: Sequelize.INTEGER,
       autoIncrement:true,
       primaryKey:true
     },     },
     thumb_url:Sequelize.STRING,
     created_at:Sequelize.DATE,
     updated_at:Sequelize.DATE,
   })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('shops');
  }
};
