<?php

namespace App\Entity;

use App\Entity\Image;
use DateTime;
use Doctrine\ORM\Mapping as ORM;

/**
 * class Article
 * @package App\Entity
 * @ORM\Entity(repositoryClass="App\Repository\ArticleRepository")
 */
class Article{

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer", name="id", nullable=false)
     */
    private $id;

    /**
     * @ORM\Column(type="string", name="titre",length=50, nullable=false)
     */
    private $titre;

    /**
     * @ORM\Column(type="string", name="texte",length=1000, nullable=false)
     */
    private $texte;
    /**
     * @var \DateTime
     * @ORM\Column(name="date", type="datetime", nullable=true)
     */
    private $date;

    /**
     * @var \image
     * @ORM\ManyToOne(targetEntity="App\Entity\Image", inversedBy="image")
     * @ORM\Column(name="imageId")
     */
    private $imageId;

}
