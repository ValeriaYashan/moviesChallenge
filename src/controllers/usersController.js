const bcrypt = require("bcryptjs");
const db = require("./../database/models");
const allUsers = db.User;
const sequelize = db.sequelize;


const usersController = {

 
    
  register:  (req,res)=> {
        
    res.render('users/register')
    
  },
    
  login: (req,res) => {
    res.render('users/login');
}, 
  
 
};

module.exports = usersController;