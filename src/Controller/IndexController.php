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


<<<<<<< HEAD
        return $this->render('site/index.html.twig', [
=======
        return $this->render('index/index.html.twig', [
>>>>>>> 095a59681bedff48097d114cb9a095debee3f288

            'articles' => $articles,

        ]);
    }

}
