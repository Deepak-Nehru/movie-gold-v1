import axios from 'axios';

export default axios.create({
baseURL: 'https://d30n2cbpfk5f4w.cloudfront.net',
headers: {"skip-browser-warning": "true"}
}); 
