<?php

namespace App\Entity;

/**
 * class Article
 * @package App\entity
 * @ORM\Entity(RepositoryClass="App\Repository\ArticleRepository")
 */
class Article{

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer", name="id", nullable=false)
     */
    private $id;

    /**
     * @ORM\Column(type="string", name="titre",length=50 nullable=false)
     */
    private $titre;

    /**
     * @ORM\Column(type="string", name="texte",length=1000 nullable=false)
     */
    private $texte;

    /**
     * @var \image
     * @ORM\OneToMany(targetEntity="App\Entity\Image")
     * @ORM\JoinColumn(referencedColumnName="id",name="imageId", nullable=true)
     */
    private $imageId;

}
