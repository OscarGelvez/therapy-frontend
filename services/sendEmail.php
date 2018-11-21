<?php

require 'smtpSendEmails.php';
require 'PHPMailer/PHPMailerAutoload.php';

// Recibo los datos enviados desde el controlador
$data = json_decode(file_get_contents("php://input")); 

$emailUser=$data->email;
$nameUser=$data->name;
$subjectUser=$data->subject;
$commentUser=$data->comment;

$Objmail = new PHPMailer;
$Objmail2 = new PHPMailer;
$objSendEmail = new sendEmail;


// Se envía correo al administrador
$objSendEmail->SendToAdmin(
						$nameUser,
						$emailUser,
						$subjectUser,
						$commentUser,
						$Objmail
					);



// Se envía correo al usuario
$objSendEmail->SendToUser(
						$nameUser,
						$emailUser,					
						$Objmail2
					);

?>


