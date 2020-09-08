import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/',
});

const client_id =
  'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

export const clientsApi = {
  getClients() {
    return instance.get(`photos/?client_id=${client_id}`);
  },
};
