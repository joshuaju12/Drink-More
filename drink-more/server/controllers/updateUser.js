const {editUser} = require('../model');

const updateUser = (req, res) => {
  console.log(req.body);
  editUser(req.body, (response) => {
    console.log(response);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  })
}

module.exports = updateUser;
