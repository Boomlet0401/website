-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2020 at 08:54 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `boomlet`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` double NOT NULL,
  `influencer_id` double NOT NULL,
  `link` text NOT NULL,
  `page_views` varchar(100) NOT NULL,
  `article_cost` varchar(100) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `influencer_id`, `link`, `page_views`, `article_cost`, `active`) VALUES
(13, 23, '', '', '', 0),
(17, 27, '', '', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `facebook`
--

CREATE TABLE `facebook` (
  `id` double NOT NULL,
  `influencer_id` double NOT NULL,
  `link` text NOT NULL,
  `followers` varchar(100) NOT NULL,
  `video_cost` varchar(100) NOT NULL,
  `story_cost` varchar(100) NOT NULL,
  `post_cost` varchar(100) NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `facebook`
--

INSERT INTO `facebook` (`id`, `influencer_id`, `link`, `followers`, `video_cost`, `story_cost`, `post_cost`, `verified`, `active`) VALUES
(11, 23, 'https://www.facebook.com/', '50000', '300', '200', '100', 0, 0),
(15, 27, '', '', '', '', '', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `influancer`
--

CREATE TABLE `influancer` (
  `id` double NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `contact_1` varchar(255) NOT NULL,
  `contact_2` varchar(255) NOT NULL,
  `contact_3` varchar(255) NOT NULL,
  `country` varchar(100) NOT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `language` varchar(255) NOT NULL,
  `location` text NOT NULL,
  `category` text NOT NULL,
  `vendor` text NOT NULL,
  `remark` text NOT NULL,
  `created_by` double NOT NULL,
  `aproved` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `influancer`
--

INSERT INTO `influancer` (`id`, `name`, `gender`, `email`, `type`, `contact_1`, `contact_2`, `contact_3`, `country`, `profile_image`, `language`, `location`, `category`, `vendor`, `remark`, `created_by`, `aproved`, `created_at`) VALUES
(23, 'influencer name', 'male', 'admin@gmail.com', 'celebrity', '1478523698', '1234567890', '7418529630', 'india', NULL, '[\"Hindi\",\"English\"]', '[\"Kormangla, 31st Main\"]', '[\"Travel\",\"driving\"]', '[\"salman\"]', 'no', 42, 0, '2020-04-21'),
(27, 'another influencer', 'male', 'temp@gmail.com', 'celebrity', '2541254563', '1478545966', '7845215412', 'india', NULL, '[\"Hindi\"]', '[\"Kormangla, 31st Main\"]', '[\"Travel\",\"driving\"]', '[\"salman\"]', '', 42, 0, '2020-04-21');

-- --------------------------------------------------------

--
-- Table structure for table `instagram`
--

CREATE TABLE `instagram` (
  `id` double NOT NULL,
  `influencer_id` double NOT NULL,
  `link` text NOT NULL,
  `followers` varchar(100) NOT NULL,
  `video_cost` varchar(100) NOT NULL,
  `story_cost` varchar(100) NOT NULL,
  `post_cost` varchar(100) NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `instagram`
--

INSERT INTO `instagram` (`id`, `influencer_id`, `link`, `followers`, `video_cost`, `story_cost`, `post_cost`, `verified`, `active`) VALUES
(17, 23, 'https://www.instagram.com/', '10000', '200', '100', '50', 1, 1),
(21, 27, '', '', '', '', '', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `linkedin`
--

CREATE TABLE `linkedin` (
  `id` double NOT NULL,
  `influencer_id` double NOT NULL,
  `link` text NOT NULL,
  `connections` varchar(100) NOT NULL,
  `post_cost` varchar(100) NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `linkedin`
--

INSERT INTO `linkedin` (`id`, `influencer_id`, `link`, `connections`, `post_cost`, `verified`, `active`) VALUES
(22, 23, 'https://in.linkedin.com/', '1000', '100', 1, 1),
(26, 27, '', '', '', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tiktok`
--

CREATE TABLE `tiktok` (
  `id` double NOT NULL,
  `influencer_id` double NOT NULL,
  `link` text NOT NULL,
  `fans` varchar(100) NOT NULL,
  `hearts` varchar(100) NOT NULL,
  `post_cost` varchar(100) NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tiktok`
--

INSERT INTO `tiktok` (`id`, `influencer_id`, `link`, `fans`, `hearts`, `post_cost`, `verified`, `active`) VALUES
(5, 23, '', '', '', '', 0, 0),
(9, 27, '', '', '', '', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `twitter`
--

CREATE TABLE `twitter` (
  `id` double NOT NULL,
  `influencer_id` double NOT NULL,
  `link` text NOT NULL,
  `connections` varchar(100) NOT NULL,
  `post_cost` varchar(100) NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `twitter`
--

INSERT INTO `twitter` (`id`, `influencer_id`, `link`, `connections`, `post_cost`, `verified`, `active`) VALUES
(12, 23, 'https://twitter.com/login?lang=en', '10000', '300', 0, 0),
(16, 27, '', '', '', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` double NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `scops` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT 0,
  `active_note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `mobile`, `pass`, `scops`, `active`, `active_note`) VALUES
(42, 'admin', 'boomlet@gmail.com', '1234567890', '123456', 'admin', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `user_token`
--

CREATE TABLE `user_token` (
  `id` double NOT NULL,
  `user_id` double NOT NULL,
  `token` text NOT NULL,
  `expiry` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_token`
--

INSERT INTO `user_token` (`id`, `user_id`, `token`, `expiry`) VALUES
(16, 42, 'MjAyMC0wNC0xOSAyMToxNzoxOC41OA==', '2020-04-19 15:47:18'),
(17, 42, 'MjAyMC0wNC0yMCAwOToyMjo0NC4yNzg=', '2020-04-20 03:52:44'),
(18, 42, 'MjAyMC0wNC0yMCAyMToyMzozMy4wNzg=', '2020-04-20 15:53:33'),
(19, 42, 'MjAyMC0wNC0yMSAxMzozMjo0MS40Njc=', '2020-04-21 08:02:41'),
(20, 42, 'MjAyMC0wNC0yMSAxMzozMzoyNS4wNTk=', '2020-04-21 08:03:25'),
(21, 42, 'MjAyMC0wNC0yMSAxMzozMzoyOC40OA==', '2020-04-21 08:03:28'),
(22, 42, 'MjAyMC0wNC0yMSAxMzozMzozMy4wNTY=', '2020-04-21 08:03:33'),
(23, 42, 'MjAyMC0wNC0yMSAxMzozMzo0OC45NTY=', '2020-04-21 08:03:48'),
(24, 42, 'MjAyMC0wNC0yMSAxMzo0MzoyMy42ODE=', '2020-04-21 08:13:23'),
(25, 42, 'MjAyMC0wNC0yMSAxMzo1MToyNS45NzM=', '2020-04-21 08:21:25'),
(26, 42, 'MjAyMC0wNC0yMSAxMzo1MzoxMS44MTE=', '2020-04-21 08:23:11'),
(27, 42, 'MjAyMC0wNC0yMSAxMzo1Mzo0OS4xMTM=', '2020-04-21 08:23:49'),
(28, 42, 'MjAyMC0wNC0yMSAxMzo1OTowOC4wNDM=', '2020-04-21 08:29:08'),
(29, 42, 'MjAyMC0wNC0yMSAxNDowMDoyMy42Mjc=', '2020-04-21 08:30:23'),
(30, 42, 'MjAyMC0wNC0yMSAxNDowMjozOS42MzE=', '2020-04-21 08:32:39'),
(31, 42, 'MjAyMC0wNC0yMSAxNDowNzoxOS4zMDU=', '2020-04-21 08:37:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `facebook`
--
ALTER TABLE `facebook`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `influancer`
--
ALTER TABLE `influancer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `instagram`
--
ALTER TABLE `instagram`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `linkedin`
--
ALTER TABLE `linkedin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tiktok`
--
ALTER TABLE `tiktok`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `twitter`
--
ALTER TABLE `twitter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `mobile` (`mobile`);

--
-- Indexes for table `user_token`
--
ALTER TABLE `user_token`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` double NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `facebook`
--
ALTER TABLE `facebook`
  MODIFY `id` double NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `influancer`
--
ALTER TABLE `influancer`
  MODIFY `id` double NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `instagram`
--
ALTER TABLE `instagram`
  MODIFY `id` double NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `linkedin`
--
ALTER TABLE `linkedin`
  MODIFY `id` double NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `tiktok`
--
ALTER TABLE `tiktok`
  MODIFY `id` double NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `twitter`
--
ALTER TABLE `twitter`
  MODIFY `id` double NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` double NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `user_token`
--
ALTER TABLE `user_token`
  MODIFY `id` double NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
