-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 19-Out-2023 às 14:29
-- Versão do servidor: 8.0.31
-- versão do PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `baseofisystem`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `empresas`
--

DROP TABLE IF EXISTS `empresas`;
CREATE TABLE IF NOT EXISTS `empresas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nomeEmpresa` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `empresas`
--

INSERT INTO `empresas` (`id`, `nomeEmpresa`, `createdAt`, `updatedAt`) VALUES
(1, 'Rodadao', '2023-10-15 17:01:47', '2023-10-15 17:01:47');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nomeProduto` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `precoProduto` float DEFAULT NULL,
  `imagemProduto` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `categoriaProduto` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `idUsuario` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1073 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nomeProduto`, `precoProduto`, `imagemProduto`, `categoriaProduto`, `idUsuario`, `createdAt`, `updatedAt`) VALUES
(900, 'Tyt Vazado', 12.99, 'https://http2.mlstatic.com/D_NQ_NP_762449-MLB49338215683_032022-O.webp', 'Bancos', NULL, '2023-10-15 17:04:54', '2023-10-15 17:04:54'),
(998, 'GTA Down', 25.99, 'https://images.tcdn.com.br/img/img_prod/971467/guidao_de_bicicleta_curvo_gta_down_will_739_1_cdeebec540c914184598994858c4d5f1.jpg', 'Guidãos', NULL, '2023-10-15 17:04:54', '2023-10-19 12:24:07'),
(1065, 'Aero Latvias', 18.89, 'https://kfbikes.vteximg.com.br/arquivos/ids/171335-1000-1000/roda-para-bicicletas-de-aro-29-vzan-escape-preta-cubos-rolamentados.jpg?v=636392820250000000', 'Aros', NULL, '2023-10-19 11:12:43', '2023-10-19 12:25:59'),
(1067, 'Vee Tire', 29.99, 'https://ericbike.vteximg.com.br/arquivos/ids/170752-1000-1000/Pneu-de-Bike-Aro-20-X-2.25-Vee-Tire-Co-V378-Crown-Gen-57-406---9682--5-.jpg?v=637450219730130000', 'Pneus', NULL, '2023-10-19 11:31:11', '2023-10-19 11:31:11');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Extraindo dados da tabela `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20231015163653-create-empresa.js'),
('20231015164330-create-usuario.js'),
('20231015165031-create-produto.js');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nomeUsuario` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `emailUsuario` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `senhaUsuario` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tipoUsuario` int DEFAULT NULL,
  `empresaId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `empresaId` (`empresaId`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nomeUsuario`, `emailUsuario`, `senhaUsuario`, `tipoUsuario`, `empresaId`, `createdAt`, `updatedAt`) VALUES
(1, 'Leandro', 'leandro@gmail.com', '1234', 1, 1, '2023-10-15 17:02:45', '2023-10-18 18:47:49'),
(2, 'Joao', 'joao@gmail.com', '1234', 0, 1, '2023-10-15 17:02:45', '2023-10-15 17:02:45'),
(13, 'Victor', 'Victor@gmail.com', '1234', 1, 1, '2023-10-18 20:36:04', '2023-10-18 20:36:04'),
(14, 'Pedro', 'Pedro@gmail.com', '1234', 1, 1, '2023-10-18 20:47:53', '2023-10-18 20:47:53');

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`empresaId`) REFERENCES `empresas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
