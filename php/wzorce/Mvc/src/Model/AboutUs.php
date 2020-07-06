<?php

namespace Mvc\Model;

use GuzzleHttp\Client;

class AboutUs
{
    public function getFromWiki()
    {
        $client = new Client();
        $response = $client->request(
            'GET',
            'https://pl.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=Google'
        );

        $body = json_decode($response->getBody(), true);

        return $body['query']['pages']['122531']['extract'];
    }
}
