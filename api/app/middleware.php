<?php
// Application middleware

// e.g: $app->add(new \Slim\Csrf\Guard);

$app->add(function ($request, $response, $next) {
    $this->view->offsetSet('flash', $this->flash);
    return $next($request, $response);
});

$app->add(new \Tuupola\Middleware\Cors([
    "origin" => ["*"],
    "methods" => ["GET", "POST", "PUT", "PATCH", "OPTIONS", "DELETE"],
    "headers.allow" => ["Content-Type", "Authorization"],
    "headers.expose" => [],
    "credentials" => false, // true ??
    "cache" => 0, // 86400,
    "error" => function ($request, $response, $arguments) {
        $data["status"] = "error";
        $data["message"] = $arguments["message"];
        return $response
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    }
]));
