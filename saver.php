<?php
/**
 * Created by PhpStorm.
 * User: dederobert
 * Date: 12/01/19
 * Time: 16:30
 */

class Saver {

    private $pdo;

    function connection() {
        try {
            $strConnection = 'mysql:host=localhost;dbname=id8454499_hanoi'; //Ligne 1
            $arrExtraParam= array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"); //Ligne 2
            $this->pdo = new PDO($strConnection, 'id8454499_hanoi', 'hanoi', $arrExtraParam); //Ligne 3; Instancie la connexion
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);//Ligne 4
        }
        catch(PDOException $e) {
            $msg = 'ERREUR PDO dans ' . $e->getFile() . ' L.' . $e->getLine() . ' : ' . $e->getMessage();
            die($msg);
        }


    }

    function insert($type, $click) {
        try {
            $query = 'INSERT INTO data(loader_type, nb_click) VALUES(?, ?)';
            $prep = $this->pdo->prepare($query);
            $prep->bindValue(1, $type);
            $prep->bindValue(2, $click);
            $prep->execute();
        }catch (PDOException $e) {
            header("");
            die($e);
        }
    }

}
if (isset($_GET['type']) && isset($_GET['click']))
$saver = new Saver();
$saver->connection();
$saver->insert($_GET['type'], $_GET['click']);
?>
<h1>Saved !</h1>
