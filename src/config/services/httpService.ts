import axios from 'axios';



export class HttpService {
    public axios
  constructor() {
    this.axios = axios.create({
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

}
