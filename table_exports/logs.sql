-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 30, 2023 at 08:46 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `adns`
--

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `user_id` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `transaction_ref` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`user_id`, `amount`, `status`, `transaction_ref`, `description`, `date_created`) VALUES
('31a56c03-b721-4871-8370-b34bd9fb35ac', '10', 'successful', 'f2f5fb7a-b044-4854-b170-b56ca89c095f', 'credit', '2023-05-29 15:49:12'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '10', 'successful', 'f9f75e11-3d3e-4b55-a60a-70dafe2ceb5e', 'credit', '2023-05-29 15:49:18'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '10', 'successful', '54a18354-83fb-4938-aa0f-c96e50cc96d8', 'credit', '2023-05-29 15:49:43'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '10.5', 'successful', '264ff761-ed9f-4e6d-b958-d19808785ec8', 'credit', '2023-05-29 17:59:57'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '10.5', 'successful', 'fc11540e-1d74-4264-be27-7b6272a0d4ce', 'debit', '2023-05-29 18:00:53'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '10', 'successful', 'dc842604-ec8b-4f36-9f59-fa261dd0cc55', 'debit', '2023-05-29 18:05:41'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1.5', 'successful', '7166f515-8170-479e-bc66-533392b31397', 'credit', '2023-05-29 18:09:07'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1.5', 'successful', 'a6994e51-e126-40a5-9039-5121cbaaf0fa', 'credit', '2023-05-29 18:12:38'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1.6', 'successful', '708b95cc-70b2-47d0-a667-a8780d27c521', 'debit', '2023-05-29 18:13:19'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '10', 'successful', '4e81cb48-77d6-4c62-8e80-1ad1d8c37540', 'debit', '2023-05-30 14:50:24'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '10', 'successful', '426100d5-a2ad-455b-82a4-73430a791fcd', 'debit', '2023-05-30 14:54:32'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1.4', 'successful', '4f40e03b-9dba-462e-b1b4-4f3ee75ee709', 'debit', '2023-05-30 14:56:43'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1000', 'successful', '83509091-be23-438a-9f36-217ccacbd938', 'debit', '2023-05-30 15:02:30'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1000', 'failed', '83509091-be23-438a-9f36-217ccacbd938', 'debit', '2023-05-30 15:02:30'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1000', 'successful', '4f5dabfc-936e-4170-a0f9-a9083fd3b73f', 'debit', '2023-05-30 15:05:01'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1000', 'failed', '4f5dabfc-936e-4170-a0f9-a9083fd3b73f', 'debit', '2023-05-30 15:05:01'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1000', 'failed', '392c3eba-33d9-4ebb-9db8-fe019ae9918c', 'debit', '2023-05-30 15:08:04'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1000', 'successful', '392c3eba-33d9-4ebb-9db8-fe019ae9918c', 'debit', '2023-05-30 15:08:04'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1000', 'failed', '5d42d5b3-1120-4089-a3c2-989122a586ee', 'debit', '2023-05-30 15:09:09'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1000', 'successful', '5d42d5b3-1120-4089-a3c2-989122a586ee', 'debit', '2023-05-30 15:09:09'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '10001', 'successful', 'de565628-3b28-4791-a94d-6f11200b374d', 'debit', '2023-05-30 15:10:34'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '10001', 'failed', '80ce315d-9e48-4158-b878-4430f6992e54', 'debit', '2023-05-30 15:11:18'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '10002', 'failed', '49978e38-1a7a-45a9-a037-1b16cd49f6eb', 'debit', '2023-05-30 15:11:31'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '10002', 'failed', 'e6522d9d-ab36-413b-a8e0-cfe40e40ff2c', 'debit', '2023-05-30 15:12:54'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '10003', 'failed', '139dd47d-8c08-47bd-aed4-f63df8820787', 'debit', '2023-05-30 15:13:15'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1', 'successful', '6ebb8dc8-5731-44c1-9324-f7a3f1fe5c89', 'debit', '2023-05-30 15:13:31'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1', 'successful', '09c2416c-a66f-4011-8042-3a12e897996f', 'debit', '2023-05-30 15:15:04'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1000', 'failed', '2c5787d1-e00d-4018-ba7f-331ab4ec2efa', 'debit', '2023-05-30 15:15:11'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1000', 'failed', '2c6c5cf2-b285-454c-a462-90857c64c833', 'debit', '2023-05-30 15:15:41'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1000', 'failed', 'ce336b36-a124-429c-9d36-e420a6661c21', 'debit', '2023-05-30 15:16:39'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1000', 'failed', 'a3dbc47b-78c3-4918-80b2-c13b32c02556', 'debit', '2023-05-30 15:18:01'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1000', 'failed', '0be12c34-41e0-4031-8a21-f14527d6ab7d', 'debit', '2023-05-30 15:18:47'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1000', 'failed', '66342a67-6cde-42ef-812f-c74c5f380b8d', 'debit', '2023-05-30 15:19:09'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1000', 'failed', '458808cf-8a70-431f-be48-1a1b68774d43', 'debit', '2023-05-30 15:20:13'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1', 'successful', 'c87e332e-757c-4243-a854-8a7829a6a5b0', 'debit', '2023-05-30 15:20:16'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1.9', 'successful', '80f7c3e2-89cf-435f-91b5-a22334269140', 'debit', '2023-05-30 15:20:22'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '1.9', 'successful', '8baf4e5a-961e-414b-a5f7-835d1ac9d7f0', 'debit', '2023-05-30 15:32:02'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '2', 'successful', '60aefb5f-fdbd-4268-a9c1-f4b5f91766ec', 'debit', '2023-05-30 18:26:09'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '2.5', 'successful', '27c1cebb-5725-488e-a7b6-2519a536074f', 'debit', '2023-05-30 18:27:11'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '2.5', 'successful', 'b11e5e18-32ba-4319-a84f-ade2b8827429', 'debit', '2023-05-30 18:30:46'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '2.5', 'successful', '548887e0-30f6-497b-aad8-093a887393ca', 'debit', '2023-05-30 18:32:34'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '2.5', 'successful', '54974870-df00-4e2e-9268-1b11956d6224', 'debit', '2023-05-30 18:35:18'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '2.5', 'successful', '154f9977-8de0-4dfc-b0f7-c39720a58996', 'debit', '2023-05-30 18:36:23'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '2.5', 'successful', 'c20008ed-516d-433b-98f3-121ce66d70d0', 'debit', '2023-05-30 18:36:45'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '2.5', 'successful', '22214601-6616-46ae-a3fc-1433d37816ff', 'debit', '2023-05-30 18:38:19'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '3.0', 'successful', 'e98ba613-1222-4695-8b9b-09bc1537db22', 'debit', '2023-05-30 18:39:03'),
('31a56c03-b721-4871-8370-b34bd9fb35ac', '3.0', 'successful', 'bb06c74f-3a9e-4ef2-93c7-759d79a4a945', 'debit', '2023-05-30 18:40:08'),
('a73d5b35-f7b2-4418-95c6-e277f6e9b221', '10', 'successful', '26c8fa5a-1ff6-4bf6-8a2a-f8051bfcd276', 'credit', '2023-05-30 21:26:04'),
('a73d5b35-f7b2-4418-95c6-e277f6e9b221', '5', 'successful', 'bc8be290-e59c-4d8d-aa24-28772cae0d82', 'credit', '2023-05-30 21:26:45'),
('a73d5b35-f7b2-4418-95c6-e277f6e9b221', '5', 'successful', '75f891d8-07e8-4575-8625-72350239796f', 'debit', '2023-05-30 21:26:52');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
