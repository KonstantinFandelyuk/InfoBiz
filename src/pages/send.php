<html>
<head>
<title>Форма заявки с сайта</title>
</head>
<body>
<?php
//проверяем, существуют ли переменные в массиве POST
if(!isset($_POST['name']) and !isset($_POST['email'])){
 ?> <form action="http://note4biz.com/" method="post">
<input type="text" name="name" placeholder="Ваше имя" required>
<input type="text" name="email" placeholder="Ноиер телефона" required>
<button type="submit" value="Отправить">
</form> <?php
} else {
 //показываем форму
 $name = $_POST['name'];
 $email = $_POST['email'];
 $name = htmlspecialchars($name);
 $email = htmlspecialchars($email);
 $name = urldecode($name);
 $email = urldecode($email);
 $name = trim($name);
 $email = trim($email);
 if (mail("fandeluk.k@gmail.com", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email ,"From: fandeluk.k@gmail.com \r\n")){
 echo "Сообщение успешно отправлено";
 } else {
 echo "При отправке сообщения возникли ошибки";
 }
}
?>
</body>
</html>