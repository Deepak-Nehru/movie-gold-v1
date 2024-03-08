import axios from 'axios';

export default axios.create({
baseURL: 'https://d2reo2yoy0hqdo.cloudfront.net',
headers: {"skip-browser-warning": "true"}
}); 
