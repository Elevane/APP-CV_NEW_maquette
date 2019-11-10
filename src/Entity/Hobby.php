<?php


namespace App\Entity;

use App\Entity\Image;
use Doctrine\ORM\Mapping as ORM;
/**
 * Class Hobby
 * @package App\Entity
 * @ORM\Entity(repositoryClass="App\Repository\HobbyRepository")
 */
class Hobby
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer", name="id", nullable=false)
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100, nullable=false, name="titre")
     */
    private $titre;

    /**
     * @ORM\Column(type="string", length=1000, nullable=false, name="texte")
     */
    private $texte;
    /**
     * @var \Image
     * @ORM\OneToOne(targetEntity="App\Entity\Image")
     * @ORM\Column(name="imageId")
     */
    private $imageId;

}