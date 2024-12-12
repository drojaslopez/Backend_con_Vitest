CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS USERS;

CREATE TABLE USERS (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    fullName VARCHAR(100) NOT NULL,
    profile VARCHAR(20)
);

INSERT INTO USERS
(email, password, fullName, profile)
VALUES
('test1@test.com', '1234', 'Test User 1', 'Administrador');



