<?php
$database = new SQLite3('Orders.sqlite');
$database->exec(
"CREATE TABLE IF NOT EXISTS orders (
    order_id INTEGER PRIMARY KEY,
    creation_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  )"
);

$insert = "INSERT INTO orders DEFAULT VALUES";
$database->exec($insert);

?>
