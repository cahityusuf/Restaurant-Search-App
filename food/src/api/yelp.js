import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer bwS8-TDs6uFV-irpvtQHvze_LVUGUlnFzNcUtP1ZS_iYlieDqymwwPcDc-XUqA7KHHbYEOApE8IO02gWF91riADYg-29_sCXVZHeCGX1enFPGdo_9tNsHbOTT32HXnYx'
    }
});
