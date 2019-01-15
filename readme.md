<!DOCTYPE html>
<html>
<body>
<h1>realtime_chat</h1>
<p>A laravel chat application build using vue.js and realtime technology.You can modify the application as per you needs.
</p>
<h3> Instructions</h3>
<p>git clone this repository and cd inside the project root, then enter the following commands:</p>

<p>composer install</p>
<p>cp .env.example .env</p>
<p>php artisan key:generate</p>
<!-- <li>Now open `.env` file and make necessary changes to the **DB_** section</li> -->

<h4>Requirement</h4>
<p>This application uses <span><a href="https://pusher.com">Pusher</a></span> for realtime functionality.So you should set up pusher first</p>
<h4>Setup Pusher</h4>
<p>Create account on <span><a href="https://dashboard.pusher.com/accounts/sign_up">Pusher</a></span></p>
<p>Set the broadcast driver in .env file to 'pusher'</p>
<p>Finally fill the credentials of puhser in .env file (credentials can be found at the pusher dashboard) </p>
<p>php artisan migrate</p>
<p>php artisan serve</p>


  
</body>
</html>
