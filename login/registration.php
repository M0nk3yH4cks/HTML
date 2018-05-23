<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" rel="stylesheet">        
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
        <style>
            body{
                font-family: 'Roboto', sans-serif;
            }
        </style>
        <title>Sign-in</title>
    </head>
    <body>
        <div class="container-fluid">
            <h1>Sign-in</h1>
            <form method="POST" action="registration.php"  class="form-inline">
                <div class="form-group mx-sm-3 mb-2">
                  <label for="inputPassword2" class="sr-only">Username</label>
                  <input type="text" class="form-control" name="username" placeholder="Inserisci username">
                </div>
                <div class="form-group mx-sm-3 mb-2">
                  <label for="inputPassword2" class="sr-only">Pass</label>
                  <input type="password" class="form-control" name="pass" placeholder="Inserisci password" onblur="passVerification(this)">
                </div>
                <button type="submit" class="btn btn-primary mb-2 ">Iscriviti</button>
                <input type="button" class="btn btn-warning mb-2" value="Login" style="margin-left: 20px" onclick="location.href='index.php';">
            </form>
            <div class="d-inline-block">
                <i id="checkedPass"></i>
            </div>
            <div class="d-inline-block">
                <p id="passRequirements" hidden class="small"></p> 
            </div>
<?php
    session_start();
    if(!empty($_SESSION["login_session"]))
        echo '<font style="color:green">Loggato come: ' . $_SESSION["login_session"] . "</font>";
    if(isset($_POST['username']) && $_POST['username'] != "" && $_POST['pass'] != ""){
            $servername = "127.0.0.1";
            $username = "root";
            $password = "";
            $dbname = "loginSession";

            // Create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            } 
            $sql = "INSERT INTO users (username, password) VALUES ('". $_POST['username'] ."', '". $_POST['pass'] ."');";
            
            if (mysqli_query($conn, $sql)) {
                echo "Account Creato";
            } else {
                //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                if(strstr(mysqli_error($conn), "duplicato")){
                    echo "Username già esistente";
                }
            }

            mysqli_close($conn);
    }else{
        if(!isset($_POST['username']))
            echo "";
        else echo "<font id=\"err\">Error</font>";
    }
?>
        </div>
        <script src="main.js"></script>
    </body>
</html>