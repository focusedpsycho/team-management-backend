
DROP DATABASE IF EXISTS team;
CREATE DATABASE team;
USE team;
SET GLOBAL log_bin_trust_function_creators = 1;

CREATE TABLE team_member_status(
team_member_status int primary key auto_increment,
description varchar(255) unique
)

INSERT INTO team_member_status (description)
VALUES ('Active'), ('Deleted');


CREATE TABLE team_members
(member_id int8 primary key auto_increment,
 custom_member_id varchar(50) unique not null,
 member_first_name varchar(255) not null,
 member_last_name varchar(255) not null,
 member_phone_number varchar(20) not null,
 member_email varchar(50) not null,
 member_role ENUM('admin', 'regular') default 'regular',
 member_photo_url text,
 created_at timestamp default now(),
 last_updated_at timestamp default now(),
 team_member_status int not null default 1,
 foreign key(team_member_status) references
 team_member_status(team_member_status)
 );

 ALTER TABLE team_members ADD INDEX (custom_member_id);