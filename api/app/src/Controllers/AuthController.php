<?php

namespace App\Controllers;

use Psr\Log\LoggerInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

use \Firebase\JWT\JWT;

final class AuthController
{
  private $view;
  private $logger;
  private $user;

  public function __construct($view, LoggerInterface $logger, $user)
  {
    $this->view = $view;
    $this->logger = $logger;
	  $this->model = $user;
  }
  public function signup(Request $request, Response $response, $args) {

    $this->logger->info("Signup action dispatched");

    $userData = $request->getParsedBody();

    // TODO: 
    // 1 - controllo se esiste email
    // 2 - controllo dati
    // 3 - registrazione a db
    // 4 - invio mail di conferma
    $data = [
      'error' => 0,
      'msg' => 'Registrazione avvenuta. Controlla mail',
      'data' => null
    ];

    return $response
      ->withJson($data);

  }


  public function signin(Request $request, Response $response, $args)
  {
    $this->logger->info("Signin action dispatched");

    $userData = $request->getParsedBody();

    // check credentials
    // TODO: verify against db
    if (($userData['email'] === 'vitto@vitto.com') && ($userData['password'] === 'vitto')) {

      $tokenId    = base64_encode(mcrypt_create_iv(32));
      $issuedAt   = time();
      $notBefore  = $issuedAt; //+ 10;             //Adding 10 seconds: requests can be made after 10 sec from token issue
      $expire     = $notBefore + 6000;            // Adding 60 seconds: token will last 60 sec
      $serverName = 'www.test.api.com'; // $config->get('serverName'); // Retrieve the server name from config file

      /*
       * Create the token as an array
       */
      $data = [
        'iat'  => $issuedAt,                // Issued at: time when the token was generated
        'jti'  => $tokenId,                 // Json Token Id: an unique identifier for the token
        'iss'  => $serverName,              // Issuer
        'nbf'  => $notBefore,               // Not before
        'exp'  => $expire,                  // Expire
        'data' => [                         // Data related to the signer user
          'userId'   => 1, // $rs['id'],   // userid from the users table
          'email' => $userData['email'], // User name
        ]
      ];

      /*
      * Extract the key, which is coming from the config file. 
      * 
      * Best suggestion is the key to be a binary string and 
      * store it in encoded in a config file. 
      *
      * Can be generated with base64_encode(openssl_random_pseudo_bytes(64));
      *
      * keep it secure! You'll need the exact key to verify the 
      * token later.
      */
      $secretKey = base64_decode('my-super-secret-key'); // base64_decode($config->get('jwtKey'));

      /*
      * Encode the array to a JWT string.
      * Second parameter is the key to encode the token.
      * 
      * The output string can be validated at http://jwt.io/
      */
      $jwt = JWT::encode(
        $data,      //Data to be encoded in the JWT
        $secretKey, // The signing key
        'HS512'     // Algorithm used to sign the token, see https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40#section-3
      );
        
      $unencodedArray = ['jwt' => $jwt];

      return $response
        ->withJson($unencodedArray);

    }

    $data = [
      'error' => 1,
      'msg' => 'Invalid credentials',
      'jwt' => null
    ];

    return $response
      ->withJson($data);
	
  }
}
