-- Create Database
CREATE DATABASE IF NOT EXISTS school_management;

USE school_management;

-- Create Schools Table
CREATE TABLE IF NOT EXISTS schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_coordinates (latitude, longitude)
);

-- Sample data for testing
INSERT INTO schools (name, address, latitude, longitude) VALUES
('Delhi Public School', 'Vasant Kunj, Delhi', 28.5244, 77.1855),
('Convent School', 'Bandra, Mumbai', 19.0596, 72.8295),
('Tech School Bangalore', 'Koramangala, Bangalore', 12.9352, 77.6245);
