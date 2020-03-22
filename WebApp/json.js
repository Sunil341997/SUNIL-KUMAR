const database = require('./test/database');

CREATE TABLE orders (
    ID serial NOT NULL PRIMARY KEY,
    info json NOT NULL
 );