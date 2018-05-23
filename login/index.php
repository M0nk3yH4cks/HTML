<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" rel="stylesheet">
        <style>
            body{
                font-family: 'Roboto', sans-serif;
            }
        </style>
        <title>Login</title>
    </head>
    <body>
        <div class="container-fluid">
            <h1>Login</h1>
            <form method="POST" action="index.php"  class="form-inline">
                <div class="form-group mx-sm-3 mb-2">
                  <label for="inputPassword2" class="sr-only">Username</label>
                  <input type="text" class="form-control" name="username" placeholder="Inserisci username">
                </div>
                <div class="form-group mx-sm-3 mb-2">
                  <label for="inputPassword2" class="sr-only">Pass</label>
                  <input type="password" class="form-control" name="pass" placeholder="Inserisci password">
                </div>
                <button type="submit" class="btn btn-primary mb-2 ">Login</button>
                <input type="button" class="btn btn-warning mb-2" value="Registrati" style="margin-left: 20px" onclick="location.href='registration.php';">
                <?php
                    if(session_id() == '') {
                        session_start();
                    }
                    try {
                        if (!empty($_SESSION["login_session"])){
                            echo '<input type="button" class="btn btn-danger mb-2" value="Logout" style="margin-left: 20px" onclick="location.href=\'logout.php\';">';
                        }
                    } catch (Exception $exc) {
                        echo $exc->getTraceAsString();
                        //echo '<input type="button" class="btn btn-danger mb-2" value="Logout" style="margin-left: 20px" onclick="location.href=\'registration.php\';">';
                    }
                ?>
            </form>
<?php
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
    if(!empty($_SESSION['login_session'])){
        echo '<p style="color:green">Loggato come: ' . $_SESSION["login_session"] . "</p>";
        echo '<table class="table table-bordered">
                        <tr>
                            <td><b>Username</td>
                            <td><b>Password</td>
                            <td><b>Remove</td>
                        </tr>';
                    $sql = "SELECT * FROM users;";
            
                    $result = mysqli_query($conn, $sql);
                    if (!$result) {
                        printf("Error: %s\n", mysqli_error($conn));
                        exit();
                    }
                    if ($result->num_rows > 0)
                        while ($row = mysqli_fetch_array($result)) {
                        echo '
                            <tr>
                            <td>' . $row['username'] . '</td>
                            <td>' . $row['password'] . '</td>
                            <td align="center"><input type="button" class="btn btn-danger" value="X" onclick""></td>
                        </tr>';
                        }
                    echo'</table>';
    }
    if(isset($_POST['pass'])){
            
            $sql = "SELECT * FROM users WHERE username = '". $_POST['username'] ."' AND password = '". $_POST['pass'] ."';";
            
            $result = mysqli_query($conn, $sql);
            if (!$result) {
                printf("Error: %s\n", mysqli_error($conn));
                exit();
            }
            if ($result->num_rows > 0)
                while ($row = mysqli_fetch_array($result)) {
                    //echo $row['username'] . " " . $row['password'];
                    echo '<p style="color:green">Accesso Effettuato</p>';
                    if(session_id() == '') {
                        session_start();
                    }
                    $_SESSION["login_session"]=$_POST['username'];
                    header('Location: index.php');
                    echo '<table class="table table-bordered">
                        <tr>
                            <td><b>Username</td>
                            <td><b>Password</td>
                            <td><b>Remove</td>
                        </tr>';
                    $sql = "SELECT * FROM users;";
            
                    $result = mysqli_query($conn, $sql);
                    if (!$result) {
                        printf("Error: %s\n", mysqli_error($conn));
                        exit();
                    }
                    if ($result->num_rows > 0)
                        while ($row = mysqli_fetch_array($result)) {
                        echo '
                            <tr>
                            <td>' . $row['username'] . '</td>
                            <td>' . $row['password'] . '</td>
                            <td align="center"><input type="button" class="btn btn-danger" value="X" onclick""></td>
                        </tr>';
                        }
                    echo'</table>';
                }
            else{
                $sql = "SELECT * FROM users WHERE username = '". $_POST['username'] ."';";
            
            $result = mysqli_query($conn, $sql);
            if (!$result) {
                printf("Error: %s\n", mysqli_error($conn));
                exit();
            }
            if ($result->num_rows > 0)
                while ($row = mysqli_fetch_array($result)) {
                    echo "<p style=\"color:red\">Password errata</p>";
                }
            else echo "<p style=\"color:red\">Utente non trovato</p>";
            }
            $conn->close();
    }
?>
        </div>
    </body>
</html>