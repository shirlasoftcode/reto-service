-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-03-2022 a las 20:10:23
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `jhuorleydata`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `clave` text NOT NULL,
  `celular` varchar(9) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `nombre`, `apellidos`, `correo`, `clave`, `celular`, `direccion`, `created_at`) VALUES(1, 'Jhuorley', 'Quispicusi perez', 'yordicito2014@gmail.com', '1234', '925457812', 'Jr valdez', '2022-03-25 19:07:14');
INSERT INTO `user` (`id`, `nombre`, `apellidos`, `correo`, `clave`, `celular`, `direccion`, `created_at`) VALUES(2, 'Maria', 'Bastidas Luquess', 'maria@gmail.com', '123456', '925457812', '', '2022-03-25 19:07:26');
INSERT INTO `user` (`id`, `nombre`, `apellidos`, `correo`, `clave`, `celular`, `direccion`, `created_at`) VALUES(3, 'Jose', 'Torres Hurtado', 'jt@gmail.com', '12345', '925457812', '', '2022-03-25 19:07:50');
INSERT INTO `user` (`id`, `nombre`, `apellidos`, `correo`, `clave`, `celular`, `direccion`, `created_at`) VALUES(4, 'Miguel', 'Vazquez', 'sd@gmail.com', '12345', '925457812', '', '2022-03-25 19:08:08');
INSERT INTO `user` (`id`, `nombre`, `apellidos`, `correo`, `clave`, `celular`, `direccion`, `created_at`) VALUES(8, 'Alex', 'Campos', 'alx@gmail.com', '12345', '925457812', '', '2022-03-25 19:08:33');
INSERT INTO `user` (`id`, `nombre`, `apellidos`, `correo`, `clave`, `celular`, `direccion`, `created_at`) VALUES(11, 'Heber', 'peña Loza', 'fsf@gmail.com', '12345', '925457812', '', '2022-03-25 19:08:47');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
