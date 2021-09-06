# Postgres queries

```
// Create a new user and assign password to it
CREATE USER ashirbad WITH PASSWORD 'password';

// Create a new database
CREATE DATABASE users;

// Gives permissions to devnest for devsDB
GRANT ALL PRIVILEGES ON DATABASE users to ashirbad;

DROP DATABASE IF EXISTS users; /* Deletes the database */

CREATE DATABASE users;
```

- To list all databases - `\l`
- To connect to a database - `\c dbname`

```
// Creating a Table
CREATE TABLE COMPANY(
	ID INT PRIMARY KEY NOT NULL,
	NAME TEXT NOT NULL,
	AGE INT NOT NULL,
	ADDRESS CHAR(50),
	SALARY REAL
);
```

```
// create schema
create schema myschema

create table myschema.company(
	ID INT NOT NULL,
	NAME VARCHAR (20) NOT NULL,
	AGE INT NOT NULL,
	ADDRESS CHAR (25),
	SALARY DECIMAL (18, 2),
	PRIMARY KEY (ID)
);
/* Creates tables in schema (can have same name as parent table/ variable scope) */

select * from myschema.company;
DROP SCHEMA myschema; /* Deletes the schema created */
DROP SCHEMA myschema CASCADE; /* Deletes the schema as well as everything inside */
```

```
// insert into a table
INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES (1, 'Paul', 32, 'California', 20000.00,'2001-07-13');

INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,JOIN_DATE) VALUES (2, 'Allen', 25, 'Texas', '2007-12-13');

INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES (3, 'Teddy', 23, 'Norway', 20000.00, DEFAULT );
```
