-- A&A Güvenlik - Database Schema
-- Run this to initialize the database

CREATE DATABASE IF NOT EXISTS aguvenlik CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE aguvenlik;

-- Users / Admin
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL,
  role ENUM('admin', 'editor') DEFAULT 'editor',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contact Messages
CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  subject VARCHAR(100) DEFAULT '',
  message TEXT NOT NULL,
  status ENUM('new', 'read', 'replied', 'archived') DEFAULT 'new',
  ip VARCHAR(45) DEFAULT '',
  is_spam TINYINT(1) DEFAULT 0,
  admin_note TEXT DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  INDEX idx_status (status),
  INDEX idx_created (created_at)
);

-- Free Inspection Requests
CREATE TABLE IF NOT EXISTS free_inspections (
  id INT AUTO_INCREMENT PRIMARY KEY,
  site_name VARCHAR(200) NOT NULL,
  manager_name VARCHAR(100) NOT NULL,
  manager_phone VARCHAR(20) NOT NULL,
  site_address TEXT NOT NULL,
  notes TEXT DEFAULT '',
  status ENUM('new', 'read', 'in_progress', 'completed', 'cancelled') DEFAULT 'new',
  ip VARCHAR(45) DEFAULT '',
  is_spam TINYINT(1) DEFAULT 0,
  admin_note TEXT DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  INDEX idx_status (status),
  INDEX idx_created (created_at)
);

-- Gallery Items
CREATE TABLE IF NOT EXISTS gallery_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT DEFAULT '',
  image_url VARCHAR(500) NOT NULL,
  category ENUM('camera', 'entry', 'technical') DEFAULT 'camera',
  sort_order INT DEFAULT 0,
  status ENUM('active', 'draft') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  INDEX idx_category (category),
  INDEX idx_sort (sort_order)
);

-- Services
CREATE TABLE IF NOT EXISTS services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  short_desc TEXT DEFAULT '',
  full_desc TEXT DEFAULT '',
  icon VARCHAR(50) DEFAULT 'fas fa-shield',
  sort_order INT DEFAULT 0,
  status ENUM('active', 'draft') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL
);

-- FAQs
CREATE TABLE IF NOT EXISTS faqs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  status ENUM('active', 'draft') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Settings / Site Config
CREATE TABLE IF NOT EXISTS settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  setting_key VARCHAR(100) NOT NULL UNIQUE,
  setting_value LONGTEXT DEFAULT NULL,
  setting_group VARCHAR(50) DEFAULT 'general',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_key (setting_key),
  INDEX idx_group (setting_group)
);

-- Page Meta (SEO)
CREATE TABLE IF NOT EXISTS page_meta (
  id INT AUTO_INCREMENT PRIMARY KEY,
  page_slug VARCHAR(100) NOT NULL UNIQUE,
  title VARCHAR(200) DEFAULT '',
  description TEXT DEFAULT '',
  keywords TEXT DEFAULT '',
  og_title VARCHAR(200) DEFAULT '',
  og_description TEXT DEFAULT '',
  canonical_url VARCHAR(500) DEFAULT '',
  schema_markup LONGTEXT DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Audit Log
CREATE TABLE IF NOT EXISTS audit_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT DEFAULT NULL,
  action VARCHAR(100) NOT NULL,
  entity_type VARCHAR(50) DEFAULT '',
  entity_id INT DEFAULT NULL,
  details TEXT DEFAULT '',
  ip VARCHAR(45) DEFAULT '',
  user_agent TEXT DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_action (action),
  INDEX idx_created (created_at),
  INDEX idx_user (user_id)
);

-- Security Logs
CREATE TABLE IF NOT EXISTS security_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  action VARCHAR(100) NOT NULL,
  details TEXT DEFAULT '',
  ip VARCHAR(45) DEFAULT '',
  user_agent TEXT DEFAULT NULL,
  severity ENUM('info', 'warning', 'critical') DEFAULT 'info',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_action (action),
  INDEX idx_severity (severity),
  INDEX idx_created (created_at)
);

-- Insert default admin user (password: admin123)
INSERT INTO users (username, password_hash, email, role) VALUES
('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'info@aguvenlik.com.tr', 'admin');

-- Insert default settings
INSERT INTO settings (setting_key, setting_value, setting_group) VALUES
('site_name', 'A&A Güvenlik', 'general'),
('site_description', 'Güvenlik teknolojileri ve bilişim hizmetleri', 'general'),
('company_phone', '0506 092 16 14', 'contact'),
('company_email', 'info@aguvenlik.com.tr', 'contact'),
('company_address', 'Güneştepe 1. Yalıçiftlik Sk. No:46/A, Osmangazi / BURSA', 'contact'),
('working_hours', 'Pazartesi - Cumartesi: 08:00 - 19:00', 'contact'),
('whatsapp_number', '90506921614', 'contact'),
('social_facebook', '', 'social'),
('social_twitter', '', 'social'),
('social_linkedin', '', 'social');
