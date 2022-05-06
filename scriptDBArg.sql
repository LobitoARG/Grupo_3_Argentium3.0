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
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_usuario`
--


INSERT INTO `categoria_usuario` VALUES (1,'Cliente'),
(2,'Administrador');

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuario` int unsigned NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `telefono` VARCHAR(50) NOT NULL,
  `imagenUsers` VARCHAR(50) NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id_categoria_usuario` int unsigned NOT NULL,
  PRIMARY KEY (`id_usuario`),
  KEY `categoria_usuario_id_foreign` (`id_categoria_usuario`),
  CONSTRAINT `categoria_usuario_id_foreign` FOREIGN KEY (`id_categoria_usuario`) REFERENCES `categoria_usuario` (`id_categoria_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--


INSERT INTO `usuarios` VALUES (1,'Alejandro','Jabo','12345A','alejandro@digitalhouse.com','123456','imagenUsers1650340819929.jpg',NULL,NULL,2),
(2,'Perrito','Joven','12345AA','perrito@digitalhouse.com','1234567','imagenUsers1650340819929.jpg',NULL,NULL,1);



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
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_producto`
--


INSERT INTO `categoria_producto` VALUES (1,'PC_GAMER'),
(2,'Notebooks'),
(3,'Componentes');


--
-- Table structure for table `productos`
--


DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id_producto` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `descuento` INT NOT NULL,  
  `tipo` VARCHAR(50) NOT NULL,
  `componentes` TEXT NOT NULL,
  `imagen` VARCHAR(100) NOT NULL,
  `descripcion` TEXT NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
 `id_categoria_producto` int unsigned NOT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `categoria_producto_id_foreign` (`id_categoria_producto`),
  CONSTRAINT `categoria_producto_id_foreign` FOREIGN KEY (`id_categoria_producto`) REFERENCES `categoria_producto` (`id_categoria_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--


INSERT INTO `productos` VALUES (1,'PC GAMER INTEL CORE I3 GTX 1650 4GB SSD 500w',100,'computadora','varios','pc_gamer_1.png','Equipo entry level INTEL ideal para comenzar a jugar',NULL,NULL,1),
(2,'CPU AMD Ryzen 9 5950x',1000,'componente','uno solo','CPU_AMD_Ryzen_9_5950x.jpg','nuevo microprocesador',NULL,NULL,3),
(3,'Gigabyte 15.6 Intel Core i7 16GB SSD 1TB',10000,'notebook','varios','notebook_prueba_3.png','Notebook Gigabyte Pro Core i7',NULL,NULL,2);



--
-- Table structure for table `compras`
--


DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compras` (
  `id_compra` int unsigned NOT NULL AUTO_INCREMENT,
  `total` DECIMAL(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `id_usuario` int unsigned NOT NULL,
  PRIMARY KEY (`id_compra`),
  KEY `id_usuario_id_foreign` (`id_usuario`),
  CONSTRAINT `id_usuario_id_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--


INSERT INTO `compras` VALUES (1,100,NULL,1),
(2,200,NULL,2),
(3,250,NULL,1);

--
-- Table structure for table `productos_compras`
--


DROP TABLE IF EXISTS `productos_compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos_compras` (
  `id_producto_compra` int unsigned NOT NULL AUTO_INCREMENT,
  `importe_producto` DECIMAL(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `id_compra` int unsigned NOT NULL,
  `id_producto` int unsigned NOT NULL,
  PRIMARY KEY (`id_producto_compra`),
  KEY `id_compra_id_foreign` (`id_compra`),
  KEY `id_producto_id_foreign` (`id_producto`),
  CONSTRAINT `id_compra_id_foreign` FOREIGN KEY (`id_compra`) REFERENCES `compras` (`id_compra`),
  CONSTRAINT `id_producto_id_foreign` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos_compras`
--


INSERT INTO `productos_compras` VALUES (1,100,NULL,1,1),
(2,300,NULL,2,2),
(3,400,NULL,3,3);

