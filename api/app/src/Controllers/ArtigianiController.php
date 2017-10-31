<?php

namespace App\Controllers;

use Psr\Log\LoggerInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

final class ArtigianiController
{
  private $logger;

  public function __construct(LoggerInterface $logger)
  {
    $this->logger = $logger;
  }

  public function getAll(Request $request, Response $response, $args)
  {
    $this->logger->info("ArtigianiController action -getAll- dispatched");

    $d = [];
    $lat = 45.500252;
    $lon = 9.167744;

    /*for ($i = 0; $i < 20; $i++) {
      $dd = [
        'id' => $i+ 1,
        'nome' => 'Villorio Baiunnari',
        'lat' => $lat + $i*0.001,
        'lon' => $lon + $i*0.001,
        'img' => 'https://catracalivre.com.br/wp-content/uploads/2015/08/centro_de_cultura_ceramica.jpg',
        'attivita' => [
          'Ceramica', 'Vetro', 'Legno'
        ],
        'website' => 'https://www.buystyle.it/appendiabiti-shabby-chic-14',
        'social' => [
          [ 'nome' =>'twitter', 'url' => 'url' ],
          [ 'nome' =>'facebook', 'url' => 'url' ],
        ]
      ];
      array_push($d, $dd);
    }*/

    $data = [
      'error' => 0,
      'msg' => 'Data given',
      'data' => array(
        [
          'id' => 1,
          'nome' => 'Villorio Baiunnari',
          'slug' => 'villorio-baiunnari',
          'lat' => 45.500252,
          'lon' => 9.167744,
          'img' => 'https://catracalivre.com.br/wp-content/uploads/2015/08/centro_de_cultura_ceramica.jpg',
          'attivita' => [
            'Ceramica', 'Vetro', 'Legno'
          ],
          'website' => 'https://www.buystyle.it/appendiabiti-shabby-chic-14',
          'social' => [
            [ 'nome' =>'twitter', 'url' => 'url' ],
            [ 'nome' =>'facebook', 'url' => 'url' ],
          ]
        ],
        [
          'id' => 2,
          'nome' => 'Gertrude Stein',
          'slug' => 'gertrude-stein',
          'lat' => 45.501252,
          'lon' => 9.168744,
          'img' => 'http://static.guide.supereva.it/guide/fisco_contabilita/artigiano.jpg',
          'attivita' => [
            'Fotografia', 'Disegno'
          ],
          'website' => 'https://www.buystyle.it/appendiabiti-shabby-chic-14',
          'social' => [
            [ 'nome' =>'twitter', 'url' => 'url' ],
            [ 'nome' =>'facebook', 'url' => 'url' ],
            [ 'nome' =>'instagram', 'url' => 'url' ],
          ]
        ],
      )
    ];

    return $response
      ->withJson($data);

  }
}
