<?php

namespace Mvc\Model;

use GuzzleHttp\Client;

class Weather
{
    public function getTemperature()
    {
        $client = new Client();
        $response = $client->request(
            'GET',
            'https://danepubliczne.imgw.pl/api/data/synop/station/szczecin'
        );

        $body = json_decode($response->getBody(), true);

        return $body['temperatura'];
    }
}
