<?php 
    if(isset($_POST['ContactButton'])) {
        $url = "https://www.google.com/recaptcha/api/siteverify";
        $privateKey = "6LfD3EYdAAAAAIz9H5esinlGJpiool9rZP-3zyW5";
        $response = file_get_contents($url."?secret=".$privateKey."&response=".$_POST['g-recaptcha-response']."&remoteip=".$_SERVER['REMOTE_ADDR']);
        $data = json_decode($response);
        if (isset($data->success) AND $data->success==true) {
            $error = "Error!";
            $successMsg = "Recaptcha succes";
            if ($_POST) {
                if ($_POST['email'] && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) === false) {
                    $error .= "The email is invalid!<br>";
                }
                if (!$_POST['email']) {
                    $error .= "An email address is required!<br>";
                }
                if (!$_POST['subject']) {
                    $error .= "A subject is required!<br>";
                }
                if (!$_POST['body']) {
                    $error .= "Content in the body is required!<br>";
                }
                if ($error != "") {
                    $error = '<div class="alert alert-danger" role="alert"><strong>There is an error with your form!</strong><br>' . $error . '</div>';
                } else {
                    <script>var btnSubmit = document.querySelector('#form-submit');
      btnSubmit.removeAttribute('disabled');</script>
                }
            }
        } else {
            $captchaFail = '<div class="alert alert-danger" role="alert"><strong>There is an error with your form!</strong><br>reCaptcha Verification Failed, Please Try Again.</div>';
        }
    }
?>
