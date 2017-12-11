CREATE DATABASE mygame CHARSET=UTF8;
USE mygame;
CREATE table game_userinfo(
    rid INT PRIMARY KEY AUTO_INCREMENT,
    phone VARCHAR(20) NOT NULL DEFAULT "",
    uname VARCHAR(20) NOT NULL DEFAULT "",
    upwd VARCHAR(20) NOT NULL DEFAULT "",
    rname VARCHAR(20) NOT NULL DEFAULT "",
    idc VARCHAR(20) NOT NULL DEFAULT "",
    rtime DATETIME NOT NULL DEFAULT ""
);
CREATE table game_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(20) NOT NULL DEFAULT "",
    upwd VARCHAR(20) NOT NULL DEFAULT "",
    rid INT
);