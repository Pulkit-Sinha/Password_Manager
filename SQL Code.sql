create database passwordmanager;
use passwordmanager;
show tables;

create table passwords(
id int not null auto_increment,
username varchar(45) not null,
password varchar(255) not null,
website varchar(45) not null,
iv varchar(255) not null,
notes varchar(255) DEFAULT NULL,
memo varchar(255) DEFAULT NULL,
primary key (id)
);

ALTER TABLE passwords AUTO_INCREMENT = 1;

create view v1 as
select id, website from passwords;

create view v2 as
select id, website, username from passwords;

create view v3 as 
select id, website, notes, memo from passwords;

create view v4 as
select id, website, password, iv from passwords;

create view v5 as 
select id, website, username, notes, memo from passwords;

#Insertions into the table have written in the server side code with nodejs.
#For the sake of completeness here, we are putting a similar command here.
/*
Insert into passwords (username, password, website, iv, notes, memo) values( username, hashedPassword.password, website, hashedPassword.iv, notes, memo);
*/

select password, iv from passwords;

truncate passwords;
# used to delete the existing stored passwords

# drop table passwords;
# drop database password_manager;

 
