<?php


namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
/**
 * Class Technologie
 * @package App\Entity
 * @ORM\Entity(repositoryClass="App\Repository\TechnologieRepository")
 */
class Technologie
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer", name="id", nullable=false)
     */
    private $id;

    /**
     * @@ORM\Column(type="string", name="nom", length=50, nullable=false)
     */
    private $nom;
}