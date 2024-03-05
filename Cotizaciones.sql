CREATE DATABASE  IF NOT EXISTS `cotizacion` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cotizacion`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: cotizacion
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

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(300) NOT NULL,
  `username` varchar(300) NOT NULL,
  `password` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'Samus Aran','samus','123456');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_cotizacion`
--

DROP TABLE IF EXISTS `tb_cotizacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_cotizacion` (
  `id_cotizacion` int NOT NULL,
  `id_usuario` int NOT NULL,
  `fecha_cotizacion` date DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  `subtotal` decimal(12,0) DEFAULT NULL,
  `descuento` decimal(12,0) DEFAULT NULL,
  `tipo_descuento` char(1) DEFAULT NULL,
  `valor_total` decimal(12,0) DEFAULT NULL,
  PRIMARY KEY (`id_cotizacion`),
  KEY `fk_tb_carrito_tb_usuarios1_idx` (`id_usuario`),
  CONSTRAINT `fk_tb_carrito_tb_usuarios1` FOREIGN KEY (`id_usuario`) REFERENCES `tb_usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cotizacion`
--

LOCK TABLES `tb_cotizacion` WRITE;
/*!40000 ALTER TABLE `tb_cotizacion` DISABLE KEYS */;
INSERT INTO `tb_cotizacion` VALUES (1,1,'2024-02-02','1',25000,10,'a',678887),(2,3,'2024-02-02','1',29000,12,'b',22890),(3,2,'2024-02-02','1',25000,18,'c',22345),(4,3,'2024-02-02','1',25000,12,'b',22600),(5,3,'2024-02-02','1',25000,12,'a',24251),(6,3,'2024-02-03','1',28000,12,'c',29000),(7,2,'2024-02-03','0',23,1,'b',123);
/*!40000 ALTER TABLE `tb_cotizacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_cotizacion_productos`
--

DROP TABLE IF EXISTS `tb_cotizacion_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_cotizacion_productos` (
  `id_cotizacion` int NOT NULL,
  `id_productos` int NOT NULL,
  `cantidad` int NOT NULL,
  PRIMARY KEY (`id_cotizacion`,`id_productos`),
  KEY `fk_tb_cotizacion_has_tb_productos_tb_productos1_idx` (`id_productos`),
  KEY `fk_tb_cotizacion_has_tb_productos_tb_cotizacion1_idx` (`id_cotizacion`),
  CONSTRAINT `fk_tb_cotizacion_has_tb_productos_tb_cotizacion1` FOREIGN KEY (`id_cotizacion`) REFERENCES `tb_cotizacion` (`id_cotizacion`),
  CONSTRAINT `fk_tb_cotizacion_has_tb_productos_tb_productos1` FOREIGN KEY (`id_productos`) REFERENCES `tb_productos` (`id_productos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cotizacion_productos`
--

LOCK TABLES `tb_cotizacion_productos` WRITE;
/*!40000 ALTER TABLE `tb_cotizacion_productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_cotizacion_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_productos`
--

DROP TABLE IF EXISTS `tb_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_productos` (
  `id_productos` int NOT NULL AUTO_INCREMENT,
  `detalle_producto` varchar(150) DEFAULT NULL,
  `precio` int DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_productos`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_productos`
--

LOCK TABLES `tb_productos` WRITE;
/*!40000 ALTER TABLE `tb_productos` DISABLE KEYS */;
INSERT INTO `tb_productos` VALUES (1,'Portatil leno Ryzen 7 20gb 512 gb 5700u fhd ideapad 3',2189000,'1'),(2,'Portatil lenovo ideapad 5 amd ryzen 7-5700u-8gb',2699900,'1'),(3,'Portatil lenovo ideapad 3 ryzen 7 5700u ramm 8gb 5sd',2293466,'1'),(4,'Portatil lenovo ryzen 3 8b 512gb ideal pad slim 3',1699900,'1'),(5,'Portatil lenovo v14 intel core i5-1235u',5159800,'1'),(6,'Portatil Gamer  lenovo LOQ geforce Rtx 3050 itelcore i5 serie h ',5599900,'1'),(7,'Portatil Gamer HP Victus 15b GeForce RTX 3050 ',3299000,'1'),(8,'Portatil Gamer Asus TUf Dash  F 15',4299900,'1'),(9,'Tablet lenovo M9 pantalla 9 pulg cam 8mp 64gb',649900,'1'),(10,'Tablet lenovo M11 Pantalla 10.95 pilg 128gb',999990,'1'),(11,'Tablet Lenovo P12 256gb pantalla 12.7 pulg',2099900,'1'),(12,'Tablet Lenovo ta M8 4ta Gen Tb300fu 2 gb 32gb',549000,'1'),(13,'Lenovo Audifonos dispositivos ',97890,'1'),(14,'lenovo audi',25000,'1');
/*!40000 ALTER TABLE `tb_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_rol`
--

DROP TABLE IF EXISTS `tb_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_rol` (
  `id_rol` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_rol`
--

LOCK TABLES `tb_rol` WRITE;
/*!40000 ALTER TABLE `tb_rol` DISABLE KEYS */;
INSERT INTO `tb_rol` VALUES (1,'Persona con acceso a la plataforma','usuario'),(2,'Persona responsable de controlar todas las actividades de la plataforma','administrador'),(3,'Responsable de controlar  las actividades excepto creacion y cambio de informacion de usuario','gestor');
/*!40000 ALTER TABLE `tb_rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_usuario_rol`
--

DROP TABLE IF EXISTS `tb_usuario_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_usuario_rol` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `id_rol` int NOT NULL,
  `estado` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`,`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_usuario_rol`
--

LOCK TABLES `tb_usuario_rol` WRITE;
/*!40000 ALTER TABLE `tb_usuario_rol` DISABLE KEYS */;
INSERT INTO `tb_usuario_rol` VALUES (1,1,_binary ''),(2,2,_binary ''),(3,1,_binary ''),(4,1,_binary ''),(5,1,_binary ''),(6,3,_binary ''),(7,2,_binary '\0'),(8,1,_binary ''),(9,1,_binary ''),(10,1,_binary ''),(11,2,_binary ''),(12,1,_binary ''),(13,3,_binary '');
/*!40000 ALTER TABLE `tb_usuario_rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_usuarios`
--

DROP TABLE IF EXISTS `tb_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(60) NOT NULL,
  `estado` char(1) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `correo_usuario` varchar(45) NOT NULL,
  `contraseña_usuario` varchar(500) NOT NULL,
  `telefono` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_usuarios`
--

LOCK TABLES `tb_usuarios` WRITE;
/*!40000 ALTER TABLE `tb_usuarios` DISABLE KEYS */;
INSERT INTO `tb_usuarios` VALUES (1,'MARY ROMERO','1','kra 81 a # 5-1','mary1@gmail.com','123456m','3027944255'),(2,'Andres Lugo','1','Kra 1 # 25-1','andre1@gmail.com','123456an','3074325674'),(3,'Ale Lopez','1','kra 2 # 5-2','alex1@gmail.com','123456Ale','3021547897'),(4,'Nelson Ramirez','1','cll 5 # 24-1','nelson35@gamail.com','123456nel','3084563214'),(5,'Diego Parrita','1','cll 9 # 32-2','diego51@gmail.com','12345r','3027651986'),(6,'Jesus Labarca','1','cll 45 a # 5 -2','susj1@gmail.com','123456jes','3016572893'),(7,'lania Rivas','1','cll 3 # 2 -1','lexne1@gmail.com','123456lexne','3098654292'),(8,'Lisbeth Morillo','1','Cll 7 # 23-78 s','mor23@gmail.com','123456lisbr','3018736674'),(9,'liany Cueto','1','cll 5 # 21 - 2','cueto12@gmail.com','123456cue','3218987763'),(10,'Pedro Perez','1','Cll 3 # 22-9','perez1@gmail.com','123456perz','3245689010'),(11,'Laudy Pereira','1','Cll 2 # 5-1 ','Perei34@gmail.com','123456pere','3098626625'),(12,'Chicho Palote','1','Cll 1 # 5 -6s','','123456chi','3098776616'),(13,'Jesus ope','1','cll 2','lop@gmail.com','12345','321456789');
/*!40000 ALTER TABLE `tb_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(300) NOT NULL,
  `apellido` varchar(300) NOT NULL,
  `telefono` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Sams','Aran','123456789'),(2,'Samus','Oscura','789456'),(3,'Ghor','Rohg','7891457');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'cotizacion'
--

--
-- Dumping routines for database 'cotizacion'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-04 21:39:31
