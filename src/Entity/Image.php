<?php

namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @package App\Entity
 * @ORM\Entity(repositoryClass="App\Repository\ImageRepository")
 */
class Image{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer", name="id", nullable=false)
     */
    private $id;

    /**
     * @ORM\Column(type="string", name="nom", nullable=true)
     */
    private $nom;

    /**
     * @ORM\Column(type="string", name="path", nullable=false)
     */
    private $path;
}