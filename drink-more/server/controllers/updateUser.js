const {editUser} = require('../model');

const updateUser = (req, res) => {
  editUser(req.body, (response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  })
}

module.exports = updateUser;
