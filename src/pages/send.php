<?php
 $name = $_POST['name'];
 $tel = $_POST['phone'];
 $name = htmlspecialchars($name);
 $tel = htmlspecialchars($tel);
 $name = urldecode($name);
 $tel = urldecode($tel);
 $name = trim($name);
 $tel = trim($tel);
 if (mail("fandeluk.k@gmail.com", "Заявка с сайта", "ФИО:".$name.". Телефон: ".$tel ,"From: fandeluk.k@gmail.com \r\n")){
 echo "Сообщение успешно отправлено";
 } else {
 echo "При отправке сообщения возникли ошибки";
 }
?>
