<?php
/*
	Routes
	controller needs to be registered in dependency.php
*/
$app->options('/[{path:.*}]', function ($request, $response, $args) {
    return $response;
});

$app->post('/signin', 'App\Controllers\AuthController:signin');

$app->post('/signup', 'App\Controllers\AuthController:signup');

$app->get('/user/1', 'App\Controllers\UserController:getUserData');

$app->get('/artigiani', 'App\Controllers\ArtigianiController:getAll');

/*
$app->get('/', 'App\Controllers\HomeController:dispatch')->setName('homepage');

$app->get('/users', 'App\Controllers\UserController:dispatch')->setName('userpage');
*/
