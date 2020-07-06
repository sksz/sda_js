<?php

namespace Mvc\Controller;

use Mvc\Model\AboutUs;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class CompanyController extends AbstractController
{
    public function aboutUs()
    {
        $aboutUs = new AboutUs();

        return $this->render('aboutUs.html.twig', [
            'content' => $aboutUs->getFromWiki(),
        ]);
    }
}
