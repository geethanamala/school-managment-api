# School Management API

A Node.js Express.js API for managing schools and retrieving them based on proximity to a user's location.

## Features

✅ **Add School API** - Create new schools with coordinates  
✅ **List Schools API** - Retrieve schools sorted by proximity to user location  
✅ **Haversine Formula** - Accurate distance calculation based on coordinates  
✅ **Input Validation** - Comprehensive validation for all inputs  
✅ **Error Handling** - Detailed error messages for debugging  
✅ **CORS Enabled** - Cross-origin resource sharing support  

## Requirements

- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm or yarn

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/geethanamala/school-managment-api.git
cd school-managment-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup MySQL Database
```bash
mysql -u root -p < database.sql
```

### 4. Create .env file
```bash
cp .env.example .env
```

Edit `.env` with your MySQL credentials:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_management
PORT=5000
```

### 5. Run the server

**Development Mode (with auto-reload):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### 1. Home Route
**GET** `/`

Check if API is running

**Response:**
```
School Management API Running Successfully
```

---

### 2. Add School
**POST** `/addSchool`

Add a new school to the database

**Request Body:**
```json
{
  "name": "Delhi Public School",
  "address": "Vasant Kunj, Delhi",
  "latitude": 28.5244,
  "longitude": 77.1855
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "School added successfully",
  "schoolId": 1
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "All fields are required"
}
```

**Validation Rules:**
- `name` - Required, non-empty string
- `address` - Required, non-empty string
- `latitude` - Required, number between -90 and 90
- `longitude` - Required, number between -180 and 180

---

### 3. List Schools
**GET** `/listSchools?latitude=X&longitude=Y`

Get all schools sorted by proximity to user's location

**Query Parameters:**
- `latitude` - Required, user's latitude (number)
- `longitude` - Required, user's longitude (number)

**Example Request:**
```
GET /listSchools?latitude=28.7041&longitude=77.1025
```

**Response (200 OK):**
```json
{
  "success": true,
  "totalSchools": 3,
  "schools": [
    {
      "id": 1,
      "name": "Delhi Public School",
      "address": "Vasant Kunj, Delhi",
      "latitude": 28.5244,
      "longitude": 77.1855,
      "distance": "34.52 KM"
    },
    {
      "id": 2,
      "name": "Convent School",
      "address": "Bandra, Mumbai",
      "latitude": 19.0596,
      "longitude": 72.8295,
      "distance": "1195.67 KM"
    },
    {
      "id": 3,
      "name": "Tech School Bangalore",
      "address": "Koramangala, Bangalore",
      "latitude": 12.9352,
      "longitude": 77.6245,
      "distance": "1806.34 KM"
    }
  ]
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Valid latitude and longitude are required"
}
```

---

## Testing with Postman

1. Open Postman
2. Click **Import**
3. Select `postman-collection.json`
4. All 10 pre-configured requests will be imported
5. Start testing!

**Collection includes:**
- ✅ 3 Add School requests with different locations
- ✅ 3 List Schools requests from different cities
- ✅ 3 Error test cases
- ✅ 1 Health check request

## Distance Calculation

The API uses the **Haversine Formula** to calculate the great-circle distance between two points on Earth:

```
d = 2 * R * arcsin(√(sin²(Δφ/2) + cos(φ1) * cos(φ2) * sin²(Δλ/2)))
```

Where:
- R = Earth's radius (6,371 km)
- φ = Latitude, λ = Longitude
- Δφ = Difference in latitude
- Δλ = Difference in longitude

## Database Schema

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_coordinates (latitude, longitude)
);
```

## Project Structure

```
school-managment-api/
├── server.js                 # Main application file
├── package.json              # Dependencies
├── .env.example              # Environment variables template
├── database.sql              # Database schema
├── postman-collection.json   # Postman collection
├── README.md                 # This file
└── .gitignore               # Git ignore rules
```

## Deployment

The API is ready to deploy on:
- **Heroku** - Add Procfile for deployment
- **Railway.app** - Zero config deployment
- **AWS EC2** - Classic cloud deployment
- **DigitalOcean** - Droplets or App Platform
- **Render** - Modern cloud platform

## Error Handling

All errors include:
- Appropriate HTTP status codes (400, 500)
- Clear error messages
- Success flag for easy client-side handling

## Environment Variables

```env
DB_HOST=localhost              # MySQL host
DB_USER=root                   # MySQL user
DB_PASSWORD=yourpassword       # MySQL password
DB_NAME=school_management      # Database name
PORT=5000                      # Server port
NODE_ENV=development           # Environment
```

## Troubleshooting

### Database Connection Failed
- Verify MySQL is running
- Check credentials in `.env`
- Ensure database exists: `mysql -u root -p < database.sql`

### Port Already in Use
- Change `PORT` in `.env`
- Or kill existing process: `lsof -ti:5000 | xargs kill`

### Module Not Found
- Run `npm install` again
- Delete `node_modules` and reinstall

## License

MIT License - Feel free to use this project for any purpose

## Author

**Geetha Namala**
- GitHub: [@geethanamala](https://github.com/geethanamala)

## Support

For issues or questions, please create an issue in the repository.
