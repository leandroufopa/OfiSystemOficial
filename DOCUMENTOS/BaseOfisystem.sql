-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: nnsgluut5mye50or.cbetxkdyhwsb.us-east-1.rds.amazonaws.com    Database: snehqasxkbkfuy6p
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

CREATE DATABASE ofisystem;

USE ofisystem;

--
-- Table structure for table `empresas`
--

DROP TABLE IF EXISTS `empresas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nomeEmpresa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresas`
--

LOCK TABLES `empresas` WRITE;
/*!40000 ALTER TABLE `empresas` DISABLE KEYS */;
INSERT INTO `empresas` VALUES (1,'Rodadao','2023-10-15 17:01:47','2023-10-15 17:01:47');
/*!40000 ALTER TABLE `empresas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nomeProduto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `precoProduto` float DEFAULT NULL,
  `imagemProduto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `categoriaProduto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `idUsuario` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1094 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (998,'GTA Down 2',28.67,'https://images.tcdn.com.br/img/img_prod/971467/guidao_de_bicicleta_curvo_gta_down_will_739_1_cdeebec540c914184598994858c4d5f1.jpg','Guidãos',NULL,'2023-10-15 17:04:54','2023-10-19 18:07:01'),(1065,'Aero Latvia',18.89,'https://kfbikes.vteximg.com.br/arquivos/ids/171335-1000-1000/roda-para-bicicletas-de-aro-29-vzan-escape-preta-cubos-rolamentados.jpg?v=636392820250000000','Aros',NULL,'2023-10-19 11:12:43','2023-11-21 01:42:59'),(1067,'Vee Tire',29.99,'https://ericbike.vteximg.com.br/arquivos/ids/170752-1000-1000/Pneu-de-Bike-Aro-20-X-2.25-Vee-Tire-Co-V378-Crown-Gen-57-406---9682--5-.jpg?v=637450219730130000','Pneus',NULL,'2023-10-19 11:31:11','2023-10-19 11:31:11'),(1076,'Paco',29.95,'https://cdn.awsli.com.br/600x450/1520/1520709/produto/144119721689a03b651.jpg','Garfos',NULL,'2023-10-19 17:59:38','2023-10-19 17:59:38'),(1083,'Cog Ictis',98.65,'https://cdn.dooca.store/4/products/zl9r7ddundprdtvx44b0qiwhwegc1nxxqjyo_495x495+fill_ffffff+crop_center.jpg?v=1699319524','Pinhão',NULL,'2023-11-21 01:16:54','2023-11-21 01:19:33'),(1084,'Passante Ictus',192.92,'https://cdn.dooca.store/4/products/tzebzifzhbwmusfmn7xicjvsvwahz3l25cwv_1600x1600+fill_ffffff.jpg?v=1699316448','Eixos',NULL,'2023-11-21 01:18:37','2023-11-21 01:19:22'),(1085,'Ictus Narraw',76.98,'https://cdn.dooca.store/4/products/w824q31pnymmdadli1eonrujm178ci9njdaz_495x495+fill_ffffff+crop_center.jpg?v=1699309696','Coroas',NULL,'2023-11-21 01:20:44','2023-11-21 01:20:44'),(1086,'Cassete 11v',552.42,'https://cdn.dooca.store/4/products/fouqkvtnwxosoz2gvox443ug1v28jfyeeikv_1600x1600+fill_ffffff.jpg?v=1699299853','Coroas',NULL,'2023-11-21 01:22:17','2023-11-21 01:22:17');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20231015163653-create-empresa.js'),('20231015164330-create-usuario.js'),('20231015165031-create-produto.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nomeUsuario` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `emailUsuario` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `senhaUsuario` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tipoUsuario` int DEFAULT NULL,
  `empresaId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `empresaId` (`empresaId`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`empresaId`) REFERENCES `empresas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (24,'Leandro','leocaue00788@gmail.com','$2b$10$O6y1ZJR7ADcHK7HgnMGMN.20H01xSbpEc8QZHa.HYrdsci7EltfO.',1,1,'2023-11-16 18:37:53','2023-11-21 00:47:23'),(26,'Joao','joaovictorsousa45@gmail.com','$2b$10$YtRSH/P5Qtfgvbx.rbxyzu8JULagkdD6mAttU8xwu/06GmvY8ruIO',1,1,'2023-11-16 18:48:02','2023-11-21 00:29:31');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-23 20:34:59