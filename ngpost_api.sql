-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 14, 2020 at 05:46 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ngpost_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminpost`
--

CREATE TABLE `adminpost` (
  `postId` int(11) NOT NULL,
  `adminId` int(11) NOT NULL,
  `title` varchar(300) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(200) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adminpost`
--

INSERT INTO `adminpost` (`postId`, `adminId`, `title`, `description`, `image`, `date`) VALUES
(1, 1, 'What is Bitcoin?', 'Bitcoin (₿) is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto and started in 2009 when its implementation was released as open-source software.', '200731091528.jpg', '0000-00-00'),
(2, 1, 'Eiffel Tower', 'The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.', '200731092746.jpg', '0000-00-00'),
(3, 1, 'Game!!!', 'A video game is an electronic game that involves interaction with a user interface to generate visual feedback on a two- or three-dimensional video display device such as a touchscreen, virtual reality headset or monitor/TV set. Since the 1980s, video games have become an increasingly important part of the entertainment industry, and whether they are also a form of art is a matter of dispute.', '200731093052.png', '0000-00-00'),
(4, 1, 'Hublot', 'Hublot is a Swiss luxury watchmaker founded in 1980 by Italian Carlo Crocco.', '200731093852.png', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `adminregister`
--

CREATE TABLE `adminregister` (
  `adminId` int(11) NOT NULL,
  `adminName` varchar(100) NOT NULL,
  `adminEmail` varchar(200) NOT NULL,
  `adminPassword` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adminregister`
--

INSERT INTO `adminregister` (`adminId`, `adminName`, `adminEmail`, `adminPassword`) VALUES
(1, 'conrad', 'conrad@ngpost.com', '123456');

-- --------------------------------------------------------

--
-- Table structure for table `usercomment`
--

CREATE TABLE `usercomment` (
  `commentId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `comment` varchar(300) NOT NULL,
  `date` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usercomment`
--

INSERT INTO `usercomment` (`commentId`, `postId`, `userId`, `comment`, `date`) VALUES
(1, 1, 1, 'llllllllll', '0000-00-00'),
(2, 1, 1, 'llllyyy', '0000-00-00'),
(3, 1, 1, 'lll', '0000-00-00'),
(4, 1, 1, 'llllll', '09:42 AM on 31st July 2020, Friday'),
(5, 3, 2, '2222222222', '09:44 AM on 31st July 2020, Friday');

-- --------------------------------------------------------

--
-- Table structure for table `userregister`
--

CREATE TABLE `userregister` (
  `userId` int(11) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `userEmail` varchar(200) NOT NULL,
  `userPassword` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userregister`
--

INSERT INTO `userregister` (`userId`, `userName`, `userEmail`, `userPassword`) VALUES
(1, 'one', '1@ngpost.com', '123456'),
(2, 'two', '2@222.com', '121212');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminpost`
--
ALTER TABLE `adminpost`
  ADD PRIMARY KEY (`postId`);

--
-- Indexes for table `adminregister`
--
ALTER TABLE `adminregister`
  ADD PRIMARY KEY (`adminId`);

--
-- Indexes for table `usercomment`
--
ALTER TABLE `usercomment`
  ADD PRIMARY KEY (`commentId`);

--
-- Indexes for table `userregister`
--
ALTER TABLE `userregister`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminpost`
--
ALTER TABLE `adminpost`
  MODIFY `postId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `adminregister`
--
ALTER TABLE `adminregister`
  MODIFY `adminId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `usercomment`
--
ALTER TABLE `usercomment`
  MODIFY `commentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `userregister`
--
ALTER TABLE `userregister`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
