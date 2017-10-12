<?php
/*
	Routes
	controller needs to be registered in dependency.php
*/
$app->options('/[{path:.*}]', function ($request, $response, $args) {
    return $response;
});

$app->post('/signin', 'App\Controllers\AuthController:signin');

$app->get('/user/1', 'App\Controllers\UserController:getUserData');

/*
$app->get('/', 'App\Controllers\HomeController:dispatch')->setName('homepage');

$app->get('/users', 'App\Controllers\UserController:dispatch')->setName('userpage');
*/
