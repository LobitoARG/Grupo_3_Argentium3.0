-- MySQL dump 10.13  Distrib 5.7.18, for Linux (x86_64)
--
-- Host: localhost    Database: laravel-database
-- ------------------------------------------------------
-- Server version	5.7.18-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;



DROP DATABASE IF EXISTS db_argent_hardware;
CREATE DATABASE db_argent_hardware;
USE db_argent_hardware;

--
-- Table structure for table `categoria_usuario`
--

DROP TABLE IF EXISTS `categoria_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria_usuario` (
  `id_categoria_usuario` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_categoria_usuario`)
)  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_usuario`
--


INSERT INTO `categoria_usuario` VALUES (NULL,'Cliente'),
(NULL,'Administrador');

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id_usuario` int unsigned NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `telefono` VARCHAR(50) NOT NULL,
  `imagenUsers` VARCHAR(50) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_categoria_usuario` int unsigned NOT NULL,
  PRIMARY KEY (`id_usuario`),
  KEY `categoria_usuario_id_foreign` (`id_categoria_usuario`),
  CONSTRAINT `categoria_usuario_id_foreign` FOREIGN KEY (`id_categoria_usuario`) REFERENCES `categoria_usuario` (`id_categoria_usuario`)
)  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--


INSERT INTO `usuario` VALUES (NULL,'Alejandro','Jabo','12345A','alejandro@digitalhouse.com','123456','imagenUsers1650340819929.jpg',NULL,NULL,2),
(NULL,'Perrito','Joven','12345AA','perrito@digitalhouse.com','1234567','imagenUsers1650340819929.jpg',NULL,NULL,1);



--
-- Table structure for table `categoria_producto`
--


DROP TABLE IF EXISTS `categoria_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria_producto` (
  `id_categoria_producto` int unsigned NOT NULL AUTO_INCREMENT,
  `titulo_categoria` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_categoria_producto`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_producto`
--


INSERT INTO `categoria_producto` VALUES (NULL,'pc_gamer'),
(NULL,'notebooks'),
(NULL,'componentes');


--
-- Table structure for table `producto`
--


DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto` (
  `id_producto` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `descuento` INT NULL,  
  `tipo` VARCHAR(50) NOT NULL,
  `componentes` TEXT,
  `imagen` VARCHAR(100) NOT NULL,
  `descripcion` TEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `id_categoria_producto` int UNSIGNED NOT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `categoria_producto_id_foreign` (`id_categoria_producto`),
  CONSTRAINT `categoria_producto_id_foreign` FOREIGN KEY (`id_categoria_producto`) REFERENCES `categoria_producto` (`id_categoria_producto`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--


INSERT INTO `producto` VALUES (NULL,'PC GAMER INTEL CORE I3 GTX 1650 4GB SSD 500w',100,10,'desktop',
	
  '{"Microprocesador": "Intel Core i3 12100",
    "Cooler": "WATER COOLER ASUS ROG STRIX LC240 RGB",
    "Motherboard": "MB ASUS 1200 B560",
    "Memoria": "RAM DDR4 Gigabyte 8GB",
    "Disco": "SSD 2.5 SATA3 Kingston 480GB",
	  "Fuente": "PWS Gigabyte 500w 80+",
    "Video": "GPU NVIDIA GTX 1650 4GB",
    "Gabinete": "Gabinete ATX Gigabye C200"}',
    
    'pc_gamer_1.png','Equipo entry level INTEL ideal para comenzar a jugar',NULL,NULL,1),
(NULL,'CPU AMD Ryzen 9 5950x',1000,15,'componente',NULL,'CPU_AMD_Ryzen_9_5950x.jpg','nuevo microprocesador',NULL,NULL,3),
(NULL,'Gigabyte 15.6 Intel Core i7 16GB SSD 1TB',10000,40,'notebook',
	'{"Microprocesador": "Intel® Core™ i7-1065G7",
    "Memoria": "RAM SODIMM DDR4 16GB 2666 mhz",
    "Disco": "SSD M.2 NVME 1TB",    
    "Fuente": "Integrated 30wh",    
    "OS": "Windows 10 Pro x64 bits"}','notebook_prueba_3.png','Notebook Gigabyte Pro Core i7',NULL,NULL,2);



--
-- Table structure for table `compra`
--


DROP TABLE IF EXISTS `compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compra` (
  `id_compra` int unsigned NOT NULL AUTO_INCREMENT,
  `total` DECIMAL(10,2) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `id_usuario` int unsigned NOT NULL,
  PRIMARY KEY (`id_compra`),
  KEY `id_usuario_id_foreign` (`id_usuario`),
  CONSTRAINT `id_usuario_id_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
)  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compra`
--


INSERT INTO `compra` VALUES (NULL,100,NULL,1),
(NULL,200,NULL,2),
(NULL,250,NULL,1);

--
-- Table structure for table `producto_compra`
--


DROP TABLE IF EXISTS `producto_compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto_compra` (
  `id_producto_compra` int unsigned NOT NULL AUTO_INCREMENT,
  `importe_producto` DECIMAL(10,2) NOT NULL,
 `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `id_compra` int unsigned NOT NULL,
  `id_producto` int unsigned NOT NULL,
  PRIMARY KEY (`id_producto_compra`),
  KEY `id_compra_id_foreign` (`id_compra`),
  KEY `id_producto_id_foreign` (`id_producto`),
  CONSTRAINT `id_compra_id_foreign` FOREIGN KEY (`id_compra`) REFERENCES `compra` (`id_compra`),
  CONSTRAINT `id_producto_id_foreign` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`)
)  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for tablºe `producto_compra`
--


INSERT INTO `producto_compra` VALUES (NULL,100,NULL,1,1),
(NULL,300,NULL,2,2),
(NULL,400,NULL,3,3);

