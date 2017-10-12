<?php

namespace App\Controllers;

use Psr\Log\LoggerInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

use \Firebase\JWT\JWT;

final class UserController
{
  private $view;
  private $logger;
  private $user;

  public function __construct($view, LoggerInterface $logger)
  {
    $this->view = $view;
    $this->logger = $logger;
  }

  public function getUserData(Request $request, Response $response, $args)
  {
    $this->logger->info("UserController action -getUserData- dispatched");

    $authHeader = $request->getHeader('authorization');

    /*
     * Look for the 'authorization' header
     */
    if ($authHeader) {

      /*
       * Extract the jwt from the Bearer
       */
      list($jwt) = sscanf( $authHeader[0], 'Bearer %s');

      if ($jwt) {
        try {

          /*
           * decode the jwt using the key from config
           */
          $secretKey = base64_decode('my-super-secret-key');
          
          $token = JWT::decode($jwt, $secretKey, array('HS512'));

          $data = [
            'error' => 0,
            'msg' => 'Data given',
            'data' => [
              'name' => 'Vitto',
              'surname' => 'Maiullo',
              'activity' => 'Paalone da viagio',
            ]
          ];


          /*
           * return protected asset
           */
          return $response
            ->withJson($data);

        } catch (Exception $e) {
          /*
           * the token was not able to be decoded.
           * this is likely because the signature was not able to be verified (tampered token)
           */
          $data = [
            'error' => 1,
            'msg' => 'HTTP/1.0 401 Unauthorized'
          ];
          return $response
            //->withHeader('HTTP/1.0 401 Unauthorized')
            ->withJson($data);
        }
      } else {
        /*
         * No token was able to be extracted from the authorization header
         */
        $data = [
          'error' => 1,
          'msg' => 'HTTP/1.0 400 Bad Request'
        ];
        return $response
          //->withHeader('HTTP/1.0 400 Bad Request')
          ->withJson($data);
      }
    } else {
      /*
       * The request lacks the authorization token
       */
      $data = [
        'error' => 1,
        'msg' => 'Token not found in request'
      ];
      return $response
        //->withHeader('HTTP/1.0 400 Bad Request')
        ->withJson($data);
    }

  }
}
