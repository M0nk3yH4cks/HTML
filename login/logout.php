<?php
session_start();
if(!empty($_COOKIE['user'])){
    ob_start();
    echo "Hello\n";
    setcookie('user', null, time() - (86400 * 365));
    unset($_COOKIE['user']);
    ob_end_flush();
}else{
    session_unset();
    session_destroy();
}

header('Location: index.php');
?>
