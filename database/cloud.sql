-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 26, 2024 at 07:41 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cloud`
--

-- --------------------------------------------------------

--
-- Table structure for table `provider`
--

CREATE TABLE `provider` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `provider`
--

INSERT INTO `provider` (`id`, `name`) VALUES
(1, 'Microsoft'),
(2, 'IBM'),
(3, 'GoDaddy'),
(4, 'DigitalO');

-- --------------------------------------------------------

--
-- Table structure for table `server`
--

CREATE TABLE `server` (
  `id` int(11) NOT NULL,
  `server_name` varchar(50) NOT NULL,
  `provider_id` int(11) NOT NULL,
  `ipAddress` varchar(15) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `dateTimeCreated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `server`
--

INSERT INTO `server` (`id`, `server_name`, `provider_id`, `ipAddress`, `isActive`, `dateTimeCreated`) VALUES
(1, 'Shula', 1, '192.168.1.1', 1, '2023-01-01 10:00:00'),
(2, 'micha', 2, '192.168.1.2', 0, '2023-01-02 11:00:00'),
(3, 'macabi', 3, '192.168.1.3', 1, '2022-01-13 12:00:00'),
(4, 'police', 4, '192.168.1.4', 1, '2023-01-04 13:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `provider`
--
ALTER TABLE `provider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `server`
--
ALTER TABLE `server`
  ADD PRIMARY KEY (`id`),
  ADD KEY `provider_id` (`provider_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `provider`
--
ALTER TABLE `provider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `server`
--
ALTER TABLE `server`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `server`
--
ALTER TABLE `server`
  ADD CONSTRAINT `server_ibfk_1` FOREIGN KEY (`provider_id`) REFERENCES `provider` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
