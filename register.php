<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//echo "Connected successfully"; // Establishing connection with server..
$db = mysqli_select_db($conn,"college");
$name=$_POST['name1']; // Fetching Values from URL.
$email=$_POST['email2'];
$password= ($_POST['rpassword1']); // Password Encryption, If you like you can also leave sha1.
$address=isset($_POST['address1']);
// Check if e-mail address syntax is valid or not
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing email(Remove unexpected symbol like <,>,?,#,!, etc.)
if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
echo "Invalid Email.......";
}else{
$result = mysqli_query($conn,"SELECT * FROM registration WHERE email='$email'");
$data = mysqli_num_rows($result);
if(($data)==0){
$query = mysqli_query($conn,"insert into registration(email, name, password,address) values ('$email', '$name', '$password', '$address')"); // Insert query
if($query){
echo "You have Successfully Registered.....";
}else
{
echo "Error....!!";
}
}else{
echo "This email is already registered, Please try another email...";
}
}
mysqli_close ($conn);
?>
