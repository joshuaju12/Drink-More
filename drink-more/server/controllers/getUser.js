const {findUser} = require('../model');

const getUser = (req, res) => {
  findUser({username: req.query.username}, (response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  })
}

module.exports = getUser;