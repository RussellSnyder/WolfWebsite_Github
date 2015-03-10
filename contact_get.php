<?php

// get posted data into local variables
$EmailFrom = Trim(stripslashes($_POST['EmailFrom'])); 
$EmailTo = "sherry@leichmansnyderlaw.com";
$Subject = "WebSiteReferral";
$Name = Trim(stripslashes($_POST['Name'])); 
$Telephone = Trim(stripslashes($_POST['Telephone'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Inquiry = Trim(stripslashes($_POST['Inquiry'])); 

// validation
$validationOK=true;
if (Trim($Email)=="") $validationOK=false;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
  exit;
}

// prepare email body text
$Body = "This email is a referral from your website.";
$Body .= "\n";
$Body .= "\n";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Telephone: ";
$Body .= $Telephone;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Inquiry: ";
$Body .= $Inquiry;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$Email>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=ok.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
}
?>