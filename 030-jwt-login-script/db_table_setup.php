<?php
CREATE TABLE `users`(
    `id` int(4) NOT NULL,
    `email` varchar(25) NOT NULL,
    `password` varchar(15) NOT NULL
);

ALTER TABLE `users` ADD PRIMARY KEY (`id`);
ALTER TABLE `users` MODIFY `id` int(4) NOT NULL AUTO INCREMENT;
INSERT INTO `users` (`id`,`email`,`password`) VALUES(NULL,'demo@gmail.com','demo');



?>