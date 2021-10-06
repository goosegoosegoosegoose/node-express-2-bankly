const jwt = require("jsonwebtoken");
const  createToken = require("../helpers/createToken");
const { SECRET_KEY } = require("../config");

describe("createToken", function () {
  test("works: not admin", function () {
    const token = createToken( "test", false);
    const payload = jwt.verify(token, SECRET_KEY);
    console.log(payload);
    expect(payload).toEqual({
      iat: expect.any(Number),
      username: 'test',
      admin: false
    });
  });

  test("works: admin", function () {
    const token = createToken("test", true);
    const payload = jwt.verify(token, SECRET_KEY);
    expect(payload).toEqual({
      iat: expect.any(Number),
      username: 'test',
      admin: true
    });
  });

  test("works: default no admin", function () {
    // given the security risk if this didn't work, checking this specifically
    const token = createToken("test");
    const payload = jwt.verify(token, SECRET_KEY);
    expect(payload).toEqual({
      iat: expect.any(Number),
      username: 'test',
      admin: false
    });
  });
});
