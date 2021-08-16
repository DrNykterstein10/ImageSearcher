import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID MVEmSBzGX8S-iuzWUQ7yrvmw4bXhpmoZJUmLwazl5WA'
    }
});