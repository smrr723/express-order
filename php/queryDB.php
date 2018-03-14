<?php
$database = new SQLite3('Orders.sqlite');

$last_order = int sqlite_last_insert_rowid ( resource $dbhandle );

$statement = $database->prepare('SELECT * FROM orders WHERE order_id = $last_order;');
$result = $statement->execute();
$response = $result->fetchArray();

echo json_encode($response['creation_time']);

?>
