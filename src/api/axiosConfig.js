import axios from 'axios';

export default axios.create({
baseURL: 'http://moviesbackend-env.eba-k8ymxgmc.ap-south-1.elasticbeanstalk.com',
headers: {"skip-browser-warning": "true"}
}); 
