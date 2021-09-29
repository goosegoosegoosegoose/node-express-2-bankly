### Conceptual Exercise

Answer the following questions below:

- What is a JWT?


- What is the signature portion of the JWT?  What does it do?

- If a JWT is intercepted, can the attacker see what's inside the payload?

- How can you implement authentication with a JWT?  Describe how it works at a high level.

- Compare and contrast unit, integration and end-to-end tests.
Unit is testing individual methods, integration is testing if multiple systems work together, and end-to-end is testing the whole application

- What is a mock? What are some things you would mock?
A fake, simpler version to test. A database. I think testing models alone without routes is also considered mocking.

- What is continuous integration?
the act of integrating code from various developers are deployed(pushed?) several times a day into a mainline. testing is automated

- What is an environment variable and what are they used for?
an environment variable is a variable stored in an .env file, and .env files are not pushed. They are usually used to store sensitive, user/developer specific information.

- What is TDD? What are some benefits and drawbacks?
Test driven development. Ttesting is made easier, no superfluous code, less debugging. Cons are its slower, and tests must be miticulously maintained.

- What is the value of using JSONSchema for validation?
Prevents corrupt or incomplete data that can brick the servers and frontend in the long run.

- What are some ways to decide which code to test?
If its important to the functionality of the unit you're testing.

- What does `RETURNING` do in SQL? When would you use it?
It returns an object with specified column values. Use it for data feedback when changing something in database. Return data to user as confirmation, as opposed to an error.

- What are some differences between Web Sockets and HTTP?
Web sockets maintain a persistent connection and requires constant request updates. It's faster than http, but its less flexible. Use http if you need to fetch old data.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
Both equally bring me pain.