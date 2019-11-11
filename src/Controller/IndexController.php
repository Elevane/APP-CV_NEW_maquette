<?php

namespace App\Controller;

use App\Entity\Article;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController {


    /**
     * @Route("/index", name="index")
     */
    public function indexAction(){

        $em = $this->getDoctrine()->getManager();
        $articles = $em->getRepository(Article::class)->findAll();



        return $this->render('site/index.html.twig', [

            'articles' => $articles,

        ]);
    }

}
