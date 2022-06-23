const {addUser} = require('../model');

const postUser = (req, res) => {

  addUser(req.body, (err, response) => {
    if (err) {
      console.log('error at controller');
    } else {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(response);
    }
  })
}

module.exports = postUser;