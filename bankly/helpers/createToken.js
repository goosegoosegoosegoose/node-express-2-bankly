const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");


/** return signed JWT for payload {username, admin}. */

// BUG #5
function createToken(username, admin=false) {
  console.log(admin);
  let payload = {username, admin};
  return jwt.sign(payload, SECRET_KEY);
}


module.exports = createToken;