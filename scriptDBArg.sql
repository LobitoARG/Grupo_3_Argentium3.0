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
  PRIMARY KEY (`id_categoria_usuario`) ON DELETE CASCADE
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
  CONSTRAINT `categoria_usuario_id_foreign` FOREIGN KEY (`id_categoria_usuario`) REFERENCES `categoria_usuario` (`id_categoria_usuario`) ON DELETE CASCADE
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
  PRIMARY KEY (`id_categoria_producto`) ON DELETE CASCADE
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
  `componentes` TEXT NOT NULL,
  `imagen` VARCHAR(100) NOT NULL,
  `descripcion` TEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `id_categoria_producto` int UNSIGNED NOT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `categoria_producto_id_foreign` (`id_categoria_producto`),
  CONSTRAINT `categoria_producto_id_foreign` FOREIGN KEY (`id_categoria_producto`) REFERENCES `categoria_producto` (`id_categoria_producto`) ON DELETE CASCADE
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--


INSERT INTO `producto` VALUES (NULL,'PC GAMER INTEL CORE I3 GTX 1650 4GB SSD 500w',100,10,'desktop','{"Microprocesador": "Intel Core i3 12100","Cooler": "WATER COOLER ASUS ROG STRIX LC240 RGB","Motherboard": "MB ASUS 1200 B560","Memoria": "RAM DDR4 Gigabyte 8GB","Disco": "SSD 2.5 SATA3 Kingston 480GB","Fuente": "PWS Gigabyte 500w 80+","Video": "GPU NVIDIA GTX 1650 4GB","Gabinete": "Gabinete ATX GigabyeC200"}','pc_gamer_1.png','Equipo entry level INTEL ideal para comenzar a jugar',NULL,NULL,1),
(NULL,'CPU AMD Ryzen 9 5950x',1000,15,'componente', '{"Componente": "Microprocesador"}','CPU_AMD_Ryzen_9_5950x.jpg','nuevo microprocesador',NULL,NULL,3),
(NULL,'Gigabyte 15.6 Intel Core i7 16GB SSD 1TB',10000,40,'notebook','{"Microprocesador": "Intel Core i7-1065G7","Memoria": "RAM SODIMM DDR4 16GB 2666 mhz","Disco": "SSD M.2 NVME 1TB","Fuente": "Integrated 30wh","OS": "Windows 10 Pro x64 bits"}','notebook_prueba_3.png','Notebook Gigabyte Pro Core i7',NULL,NULL,2),
(NULL,
'PC GAMER INTEL CORE I5 GTX 1660 6GB SSD 600w',
100000, 
15,
'PC_GAMER',
'{"Microprocesador": "Intel Core i5 12400", "Cooler":"WATER COOLER ASUS ROG STRIX LC120 RGB", "Motherboard": "MB ASUS 1200 B560", "Memoria": "RAM DDR4 Gigabyte 16GB", "Disco": "SSD 2.5 SATA3 Kingston 960GB","Fuente":"PWS Gigabyte 600w 80+" , "Video": "GPU NVIDIA GTX 1660 6GB","Gabinete":"Gabinete ATX Thermaltake v250" }',
'pc_gamer_2.png',
'Equipo ideal para gaming en 1080p INTEL',
NULL,
NULL,
1),
(NULL,
"PC GAMER INTEL CORE I7 RTX 3060 12GB SSD 700w",
100000, 
15,
'PC_GAMER',
'{"Microprocesador": "Intel Core i7 12700K",
"Cooler":"WATER COOLER ASUS ROG STRIX LC240 RGB",
"Motherboard": "MB Gigabyte AORUS 1200 z690",
"Memoria": "RAM DDR5 Gigabyte 16GB",
"Disco": "SSD M.2 NVME Gigabyte AROUS 1TB",
"Video": "GPU NVIDIA RTX 3060 12GB",
"Fuente": "PWS Gigabyte 700w 80+",
"Gabinete":"Gabinete ATX Corsair 4000"}',
'pc_gamer_3.png',
'Equipo para gaming FHD gama alta INTEL',
NULL,
NULL,
1),
(NULL,
'PC GAMER INTEL CORE I9 RTX 3090 24GB SSD 800w',
400000, 
13,
'PC_GAMER',
'{"Microprocesador": "Intel Core i9 12900K",
"Cooler":"WATER COOLER ASUS ROG STRIX LC240 RGB",
"Motherboard": "MB Gigabyte AORUS 1200 z690",
"Memoria": "RAM DDR5 Gigabyte 16GB",
"Disco": "SSD M.2 NVME Gigabyte AROUS 1TB",
"Video": "GPU NVIDIA RTX 3090 24GB",
"Fuente": "PWS Gigabyte 800w 80+",
"Gabinete": "Gabinete ATX Corsair 4000"}',
'pc_gamer_4.png',
'Equipo para gaming/diseño INTEL EXTREME',
NULL,
NULL,
1),
(NULL,
' PC GAMER AMD Ryzen 3 GTX 1650 4GB SSD 500w',
500000, 
63,
'PC_GAMER',
'{
"Microprocesador": "AMD Ryzen 3 3100",
"Cooler":"WATER COOLER ASUS ROG STRIX LC120 RGB",
"Motherboard": "MB ASUS AM4 A520",
"Memoria": "RAM DDR4 Gigabyte 8GB",
"Disco": "SSD 2.5 SATA3 Kingston 240GB",
"Video": "GPU NVIDIA GTX 1650 4GB",
"Fuente": "PWS Gigabyte 500w 80+",
"Gabinete": "Gabinete ATX Thermaltake v250"
}',
'pc_gamer_1.png',
'Equipo entry level AMD gaming',
NULL,
NULL,
1),
(NULL,
'PC GAMER AMD Ryzen 5 GTX 1660 6GB SSD 600w',
600000,
37,
'PC_GAMER',
'{
"Microprocesador": "AMD Ryzen 5 5600x",
"Cooler": "WATER COOLER ASUS ROG STRIX LC120 RGB",
"Motherboard": "MB Gigabyte AM4 B550",
"Memoria": "RAM DDR4 Gigabyte 16GB",
"Disco": "SSD 2.5 SATA3 Kingston 960GB",
"Video": "GPU NVIDIA GTX 1660 6GB",
"Fuente": "PWS Gigabyte 600w 80+",
"Gabinete": "Gabinete ATX Aerocool AIRHAWK"
}',
'pc_gamer_2.png',
' Equipo ideal para gaming 1080p AMD',
NULL,
NULL,
1),
(NULL,
'PC GAMER AMD Ryzen 7 RTX 3060 12GB SSD 700w',
700000,
41,
'PC_GAMER',
'{
"Microprocesador": “AMD Ryzen 7 5800x",
"Cooler": "WATER COOLER ASUS ROG STRIX LC240 RGB",
"Motherboard": "MB ASUS AM4 X570",
"Memoria": "RAM DDR4 Gigabyte 16GB",
"Disco": "SSD 2.5 SATA3 Kingston 960GB",
"Video": "GPU NVIDIA RTX 3060 12GB",
"Fuente": "PWS Gigabyte 700w 80+",
"Gabinete": "Gabinete ATX Thermaltake H550"
}',
'pc_gamer_3.png',
'Equipo gaming AMD FHD gama alta',
NULL,
NULL,
1),
(NULL,
' PC GAMER AMD Ryzen 9 RTX 3090 24GB SSD 800w ',
800000,
17,
'PC_GAMER',
'{
"Microprocesador": “AMD Ryzen 9 5950x",
"Cooler": "WATER COOLER ASUS ROG STRIX LC240 RGB",
"Motherboard": "MB ASUS AM4 X570",
"Memoria": "RAM DDR4 Gigabyte 16GB",
"Disco": "SSD M.2 NVME Gigabyte AORUS 1TB",
"Video": "GPU NVIDIA GTX 3090 24GB",
"Fuente": "PWS Gigabyte 800w 80+",
"Gabinete": "Gabinete ATX Thermaltake H550"
}',
'pc_gamer_4.png',
'Equipo Gaming AMD EXTREME',
NULL,
NULL,
1),
(NULL,
'Lenovo 15.6 Intel Core i3 8GB SSD 256GB',
45000,
15,
'notebook',
'{"Microprocesador": "Intel® Core™ i3-1115G4",
  "Memoria": "RAM SODIMM DDR4 8GB 2666 mhz",
  "Disco": "SSD M.2 NVME 256GB",    
  "Fuente": "4 celdas, 70Wh Polímero de Litio",    
  "OS": "Windows 10 Pro x64 bits"}',
'notebook_prueba_2.png',
'Notebook Lenovo Core i3 para hogar, home office, word, excel ',
NULL,
NULL,
2),
(NULL,
'Acer 15.6 Intel Core i5 8GB SSD 512GB',
6803753.03,
25,
'notebook',
'{"Microprocesador": " Intel® Core™ i5-1035G4",
  "Memoria": "RAM SODIMM DDR4 8GB 2666 mhz",
  "Disco": "SSD M.2 NVME 512GB",    
  "Fuente": "Integrated 35Wh - Duración de batería 7.3 hs",    
  "OS": "Windows 10 Pro x64 bits"}',
'notebook_prueba_1.png',
'Notebook Core i5 Home Office',
NULL,
NULL,
2),
(NULL,
'Gigabyte 15.6 Intel Core i7 16GB SSD 1TB',
3970485.26,
48,
'notebook',
'{"Microprocesador": "Intel® Core™ i7-1065G7",
    "Memoria": "RAM SODIMM DDR4 16GB 2666 mhz",
    "Disco": "SSD M.2 NVME 1TB",    
    "Fuente": "Integrated 30wh",    
    "OS": "Windows 10 Pro x64 bits"}',
'notebook_prueba_3.png',
'Notebook Gigabyte Pro Core i7',
NULL,
NULL,
2),
(NULL,
'HP 15.6 HP AMD Ryzen 3 8GB SSD 256GB',
8960402,
25,
'notebook',
'{"Microprocesador": "AMD RYZEN 3",
    "Memoria": "RAM 8GB",
    "Disco": "SSD 256",    
    "Fuente": "Integrated 30wh",    
    "OS": "Windows 10 Pro x64 bits"}',
'notebook_prueba_4.png',
'Notebook para el hogar y la oficina',
NULL,
NULL,
2),
(NULL,
'Lenovo 15.6 AMD Ryzen 5 8GB SSD 512GB',
1665431.75,
18,
'notebook',
'{"Microprocesador": "AMD RYZEN 5",
    "Memoria": "RAM 8GB",
    "Disco": "SSD 512GB",    
    "Fuente": "Integrated 30wh",    
    "OS": "Windows 10 Pro x64 bits"}',
'notebook_prueba_1.png',
'Notebook para el hogar y la oficina',
NULL,
NULL,
2),
(NULL,
'Acer 15.6 AMD Ryzen 7 16GB SSD 1TB',
4689486.02,
43,
'notebook',
'{"Microprocesador": "AMD RYZEN 7”,
    "Memoria": "RAM 16GB",
    "Disco": "SSD 1TB",    
    "Fuente": "Integrated 30wh",    
    "OS": "Windows 10 Pro x64 bits"}',
'notebook_prueba_1.png',
'Notebook para el hogar y la oficina',
NULL,
NULL,
2),
(NULL,
'Gigabyte 15.6 Core i7 16GB SSD 1TB RTX 3060 12GB',
1438542,
22,
'notebook',
'{"Microprocesador": "CORE I 7”,
    "Memoria": "RAM 16GB",
    "Disco": "SSD 1TB",    
    "Fuente": "Integrated 30wh",    
    "OS": "Windows 10 Pro x64 bits"}',
'notebook_prueba_3.png',
'Notebook para el hogar y la oficina',
NULL,
NULL,
2),
(NULL,
'Lenovo 15.6 Ryzen 7 16GB SSD 1TB RTX 3060 12GB',
8984999,
39,
'notebook',
'{"Microprocesador": "RYZEN 7”,
    "Memoria": "RAM 16GB",
    "Disco": "SSD 1TB",    
    "Fuente": "Integrated 30wh",    
    "OS": "Windows 10 Pro x64 bits"}',
'notebook_prueba_4.png',
'Notebook para el hogar y la oficina',
NULL,
NULL,
2),
(NULL,
' CPU Intel Core i3 12100',
1000,
15,
'componente',
'{"Componente":"Componente"}',
'CPU_AMD_Ryzen_9_5950x.jpg',
'Cantidad de núcleos 4, Cantidad de subprocesos 8, Frecuencia turbo máxima 4,30 Ghz, 
Frecuencia de la Tecnología Intel Turbo Boost 2.0‡ 4.30 Ghz., Frecuencia básica del procesador 3,60 Ghz, Caché 6 MB Intel® Smart Cache, Velocidad del bus 8 GT/s, TDP 65 W.',
NULL,
NULL,
3),
(NULL,
'CPU Intel Core i5 12400',
9150512,
31,
'componente',
'{"Componente":"Componente"}',
'CPU_Intel_Core_i5_12400.jpg',
'Cantidad de núcleos 4 Cantidad de subprocesos 4 Frecuencia turbo máxima 4,20 Ghz Frecuencia de la Tecnología Intel® Turbo Boost 2.0‡ 4.20 Ghz Frecuencia básica del procesador 3,80 Ghz Caché 6 MB Intel® Smart Cache Velocidad del bus 8 GT/s Cantidad de enlaces QPI 0',
NULL,
NULL,
3),
(NULL,
'CPU Intel Core i7 12700',
78522,
6,
'componente',
'{"Componente":"Componente"}',
'CPU_Intel_Core_i7_12700.jpg',
'Cantidad de núcleos 12 Performance-cores 8 Efficient-cores 4 Cantidad de subprocesos 20 Frecuencia turbo máxima 4,90 Ghz Frecuencia de la Tecnología Intel Turbo Boost Max 3.0  4,90 Ghz Performance-core Max Turbo Frequency 4.80 Ghz Efficient-core Max Turbo Frequency 3.60 GHz',
NULL,
NULL,
3),
(NULL,
'CPU Intel Core i9 12900',
72682,
13,
'componente',
'{"Componente":"Componente"}',
'CPU_Intel_Core_i9_12900K.png',
'Cantidad de núcleos 16. of Performance-cores 8. of Efficient-cores 8.Cantidad de subprocesos 24. Frecuencia turbo máxima 5,20 Ghz. Frecuencia de la Tecnología Intel Turbo Boost Max 3.0 5,20 Ghz. Performance-core Max Turbo Frequency 5.10 Ghz. Efficient-core Max Turbo Frequency 3.90 GHz.',
NULL,
NULL,
3),
(NULL,
'CPU AMD Ryzen 3 3100',
27895,
40,
'componente',
'{"Componente":"Componente"}',
'CPU_AMD_Ryzen_3_3100.jpg',
'Plataforma Boxed Processor Familia de productos AMD Ryzen™ Processors Línea de productos AMD Ryzen™ 3 Desktop Processors # de núcleos de CPU 4 # de hilos 8 Reloj de aumento máx. Hasta 3.9GHz Reloj base 3.6GHz Caché L1 total 256KB Caché L2 total 2MB Caché L3 total 16MB
TDP/TDP predeterminado 65W Processor Technology for CPU Cores TSMC 7nm FinFET Desbloqueados  Sí CPU Socket  AM4 Solución térmica (PIB) Wraith Stealth',
NULL,
NULL,
3),
(NULL,
'CPU AMD Ryzen 5 5600x',
34900,
15,
'componente',
'{"Componente":"Componente"}',
'CPU_AMD_Ryzen_5_5600x.jpg',
'Plataforma. Boxed Processor.Familia de productos. AMD Ryzen™ Processors. Línea de productos. AMD Ryzen™ 5 Desktop Processors. # de núcleos de CPU.  Reloj de aumento máx. Hasta 3.4GHz.
Reloj base. 3.2GHz.Caché L1 total. 384KB.',
NULL,
NULL,
3),
(NULL,
'WATER COOLER ASUS ROG STRIX LC240 RGB',
25000,
25,
'componente',
'{"Componente":"Componente"}',
'water_cooler_asus_rog_strix_lc240_rgb-min.png',
'ROG Strix LC 240: Sistema de refrigeración líquida AiO con Aura Sync y dos ventiladores RGB direccionables ROG de 120mm',
NULL,
NULL,
3),
(NULL,
'WATER COOLER ASUS ROG STRIX LC120 RGB',
5503894.92,
47,
'componente',
'{"Componente":"Componente"}',
'wc_asus_rog_strix_lc_120_rgb-min.png',
'Enfriador de CPU líquido todo en uno ROG Strix LC 120 con Aura Sync RGB y ventilador de radiador ROG de 120 mm Ventilador del radiador diseñado por ROG para optimizar el flujo de aire y la presión estática.',
NULL,
NULL,
3),
(NULL,
'Gabiente ATX Corsair 5000',
20000,
10,
'componente',
'{"Componente":"Componente"}',
'Gabinete_ATX_Corsair_5000-min.jpg',
'Especificaciones. Dimensiones: 520mm x 245mm x 520mm.Max GPU: Largo 400. Max PSU: Largo 250. Max CPU Cooler: Altura 170. Slots de expansión: 7 vertical + 2 horizontal. Case Drive Bays: (x2) 3.5in (x4) 2.5in. Factor de forma: MID TOWER. Tipo de vidrio: Templado. ',
NULL,
NULL,
3),
(NULL,
'Gabinete ATX Thermaltake H550',
21000,
10,
'componente',
'{"Componente":"Componente"}',
'Gabinete_Thermaltake_H550-min.jpg',
'Especificaciones P / N	CA-1P4-00M1WN-00 DIMENSIÓN (AL X AN X PR)	472 x 225 x 441 mm (18,58 x 8,85 x 17,36 pulgadas) PESO NETO	7,65 kg / 16,87 libras PANEL LATERAL	Vidrio templado de 4 mm x1 COLOR Exterior e interior: negro ',
NULL,
NULL,
3),
(NULL,
'Gabinete ATX Corsair 4000',
24000,
12,
'componente',
'{"Componente":"Componente"}',
'Gabinete_ATX_Corsair_4000-min.jpg',
'Soporte para placas base ATX. Soporte para fuentes ATX de hasta 220 mm (180mm con módulo de discos duros). Soporte para GPUs de hasta 360 mm. Soporte para disipadores de CPU de 170 mm.
Fabricadas en acero, plástico y cristal templado.',
NULL,
NULL,
3),
(NULL,
'Gabinete ATX Aerocool Nigthawk',
28000,
15,
'componente',
'{"Componente":"Componente"}',
'Gabinete_ATX_Aerocool_Nightwak2-min.png',
'Soporte para placas base ATX. Soporte para fuentes ATX de hasta 220 mm (180mm con módulo de discos duros). Soporte para GPUs de hasta 360 mm. Soporte para disipadores de CPU de 170 mm.
Fabricadas en acero, plástico y cristal templado.',
NULL,
NULL,
3),
(NULL,
'Gabinete ATX Aerocool AIRHAWK',
33000,
12,
'componente',
'{"Componente":"Componente"}',
'Gabinete_AirHawk-min.png',
'Soporte para placas base ATX. Soporte para fuentes ATX de hasta 220 mm (180mm con módulo de discos duros). Soporte para GPUs de hasta 360 mm. Soporte para disipadores de CPU de 170 mm.
Fabricadas en acero, plástico y cristal templado.',
NULL,
NULL,
3);



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
  CONSTRAINT `id_usuario_id_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE
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
  CONSTRAINT `id_compra_id_foreign` FOREIGN KEY (`id_compra`) REFERENCES `compra` (`id_compra`) ON DELETE CASCADE,
  CONSTRAINT `id_producto_id_foreign` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`) ON DELETE CASCADE
)  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for tablÂºe `producto_compra`
--


INSERT INTO `producto_compra` VALUES (NULL,100,NULL,1,1),
(NULL,300,NULL,2,2),
(NULL,400,NULL,3,3);

