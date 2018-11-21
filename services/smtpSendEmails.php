<?php
//require 'PHPMailer/PHPMailerAutoload.php';

class sendEmail{


		function loadInfo($mail){
			//$mail = new PHPMailer;

					//$mail->SMTPDebug = 3;                               // Enable verbose debug output

					$mail->isSMTP();                                      // Set mailer to use SMTP
					$mail->Host = 'smtp.gmail.com;smtp2.example.com';  // Specify main and backup SMTP servers
					$mail->SMTPAuth = true;                               // Enable SMTP authentication
					$mail->Username = 'mytherapygame@gmail.com';                 // SMTP username
					$mail->Password = 'therapyjuego';                           // SMTP password
					$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
					$mail->Port = 587;                                    // TCP port to connect to

		}			

		function sendToAdmin($nameDestUser, $emailDestUser, $subject, $comment, $mail){
			$this->loadInfo($mail);						

				$mail->setFrom('mytherapygame@gmail.com', 'Buzón de sugerencias');
				$mail->addAddress('mytherapygame@gmail.com', 'Dayana Gelvez');     // Add a recipient

				//$mail->addAddress('ellen@example.com');               // Name is optional
				//$mail->addReplyTo('oscarandresgs@ufps.edu.co', 'Para mas información contactese a');
				//$mail->addCC('oscarandresgs@ufps.edu.co');
				//$mail->addBCC('oscarandresgs@ufps.edu.co');

				//$mail->addAttachment('banner2Comp.png');     // Add attachments
				//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
				//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
				$mail->isHTML(true);                                 // Set email format to HTML

				$mail->Subject = 'Sugerencias y opiniones...';
				$mail->Body    = 'Se ha recibido una sugerencia u opinión de: <br> 
				La persona: '.$nameDestUser.'<br> '.
				'Correo: '.$emailDestUser.'<br>'.
				'Asunto: '.$subject.'<br>'.
				'Comentario: <br>'.
				$comment;			

				// Se envia mensaje al Administrador
				if(!$mail->send()) {
				   echo 0;// mensaje no fue enviado
				   
				    //echo 'Mailer Error: ' . $mail->ErrorInfo;
				} else {
				    echo 1; // mensaje enviado correctamente	
				    
				}

		}

		function sendToUser($nameDestUser, $emailDestUser, $mail){
				$this->loadInfo($mail);	

				$mail->setFrom('mytherapygame@gmail.com', 'OCCUPATIONAL THERAPY GAMERS WORLD');
				$mail->addAddress($emailDestUser, $nameDestUser);     // Add a recipient

			    // Se notifica al cliente de que el mensaje fue recibido
				$mail->Subject = 'OCCUPATIONAL THERAPY GAMERS WORLD';
				$mail->Body    = 'Hola, de parte de nuestro equipo te informamos que hemos recibido tu mensaje.'.
				'<br> Gracias por tus sugerencias y opiniciones. <br> ¡Hasta pronto!';					

				// Se envia mensaje al Administrador
				if(!$mail->send()) {				
				    echo 0;// mensaje no fue enviado
				    
				    //echo 'Mailer Error: ' . $mail->ErrorInfo;
				} else {
				    echo 1; // mensaje enviado correctamente
				    				    
				}
		}

}
?>