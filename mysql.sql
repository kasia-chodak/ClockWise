/*CREATE TABLE Users (
    usr_id INTEGER NOT NULL  PRIMARY KEY,
    usr_name VARCHAR NOT NULL,
    usr_password VARCHAR NOT NULL
);

INSERT INTO Users(usr_id,usr_name,usr_password)
VALUES(1,Kacper,123)

CREATE TABLE Tasks(
    tsk_id INTEGER NOT NULL PRIMARY KEY,
    tsk_name VARCHAR NOT NULL,
    tsk_execution_date DATETIME NOT NULL)
    */
--DELETE FROM Tasks
--ALTER TABLE Tasks
--ADD COLUMN tsk_usrid INTEGER NOT NULL

ADD CONSTRAINT fk_user FOREIGN KEY (tsk_usrid) REFERENCES Users (usr_id)