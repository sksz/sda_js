<?php

namespace Mvc\Controller;

use Mvc\Model\Weather;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends AbstractController
{
    public function index()
    {
        $weather = new Weather();

        return $this->render('base.html.twig', [
            'temperature' => $weather->getTemperature(),
        ]);
    }
}
