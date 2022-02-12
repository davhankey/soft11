DROP TABLE IF EXISTS Account;
DROP TABLE IF EXISTS Transactions;



CREATE TABLE `Account` (
  `account_id` varchar(1000) NOT NULL,
  `balance` double NOT NULL,
  `name` varchar(255) NOT NULL,
  `subtype` varchar(255) NOT NULL,
  `mask` int NOT NULL
;


CREATE TABLE `Transactions` (
  `transaction_id` int NOT NULL,
  `amount` double NOT NULL,
  `date` datetime NOT NULL,
  `name` varchar(255) NOT NULL,
  `account_id` varchar(1000) NOT NULL,
);



CREATE TABLE `users` (
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` int NOT NULL,
  `address` varchar(255) NOT NULL
) ;

