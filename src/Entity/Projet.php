<?php


namespace App\Entity;
use App\Entity\Technologie;
use App\Entity\Image;
use Doctrine\ORM\Mapping as ORM;
/**
 * Class Projet
 * @package App\Entity
 * @ORM\Entity(repositoryClass="App\Repository\ProjetRepository")
 */
class Projet{
    /**
    * @ORM\Id
    * @ORM\GeneratedValue
    * @ORM\Column(type="integer", name="id", nullable=false)
    */
    private $id;

    /**
     * @ORM\Column(type="string", length=100, name="titre", nullable=false)
     */
    private $titre;

    /**
     * @ORM\Column(type="string", length=100, name="texte", nullable=false)
     */
    private $texte;

    /**
     * @var \Technologie
     * @ORM\ManyToOne(targetEntity="App\Entity\Technologie", inversedBy="technologie")
     * @ORM\JoinColumn(referencedColumnName="id", name="technoId", nullable=false)
     */
    private $technoId;
    /**
     * @var \image
     * @ORM\ManyToOne(targetEntity="App\Entity\Image", inversedBy="image")
     * @ORM\Column(name="imageId")
     */
    private $imageId;

}