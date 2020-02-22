<?php

declare(strict_types=1);

require_once 'JanuszeKodu.php';
require_once 'Nulle.php';
require_once 'Mariany.php';

$kursHtml = new JanuszeKodu('Kurs HTML', 'Szczecin', 7, 'Eustachy');
$kursPhp = new JanuszeKodu('Kurs PHP', 'Szczecin', 150, 'Marian');
$kursMysql = new JanuszeKodu('Kurs MySQL', 'Berlin', 40, 'Jan');

var_dump($kursHtml, $kursMysql, $kursPhp);

$wizytowka = new Nulle('Wizytówka', 3, 'B6', true);
$ulotka = new Nulle('Ulotka', 1000, 'A5');
$gazeta = new Nulle('Gazeta', 100000);

var_dump($wizytowka, $ulotka, $gazeta);

$kielbasa = new Mariany(new DateTime('2020-03-10'), 'Kiełbasa', 1);
$bulka = new Mariany(new DateTime(), 'Bułka', 10);
$piwo = new Mariany(new DateTime('2020-03-01 12:00:00'), 'Piwo', 666);

var_dump($kielbasa, $bulka, $piwo);
















