# BUGS
- BUG #1: authUser() doesn't allow me in even if I'm using an admin user. Payload is undefined. How is this the most elusive bug when I can't even insomnia into GET /users.
    - Should use jwt.verify() instead
- BUG #2: requireLogin(). req.curr_username is undefined regardless of logged n or not. use req.query._token instead.
- BUG #3(?): not sure why getAll() method has username and password params
- BUG #4: there are two module.exports = app
- BUG #5: in auth/login route, User.authenticate wasn't preceded by an await.
- BUG #6: Doesn't allow user itself to do things to own user info. I just made a separate authentication middleware for both admin and user. Pretty sure theres a better way. Maybe order in which middleware is called? Unsure, please advise.

- This app doesn't use jsonschema, does that count as a bug? no? sad.
- The fact this app uses a query instead of a bearer token also threw me off.
