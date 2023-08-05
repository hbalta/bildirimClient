import {Injectable} from "@angular/core";
import axios from "axios";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class apiAdapter {

  constructor(private http: HttpClient) {

  }

  token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJhN2VjOGU0NjUyOGI1NjFhNDE1YzIiLCJ1c2VybmFtZSI6ImFkbWluIiwidXNlck5hbWVTdXJuYW1lIjoiVGVzdCBVc2VyIiwicGVybWlzc2lvbklkTGlzdCI6WyI3YTRkNTFjMC01NmYyLTQwYWMtOTUxMC0wYWEzZWQxNTdhZmEiLCI2NWMyNmE5MS0zNjU0LTQ4NDAtYjJmYS1jYTM5ZDUzMTUyNWIiLCJmYjcxZTY1YS03ZjU0LTQ3NDYtODI0OC1iOGI0MjNkZTlhNmMiLCI2NWMyNmE5MS0zNjU0LTQ4NDAtYjJmYS1jYTM5ZDUzMTUyNWIiLCJlYjExODc4OC0zZDczLTQ0Y2QtOTFkOS1lYTYwOTg0NzAwMDIiXSwiaWF0IjoxNjkxMTMyOTIwLCJleHAiOjE2OTEyMTkzMjB9.nQsEXPl4VrLstRe0UyM3hpR5SoHIdgY2JB9qI1D6-Gk";
  url: string = "http://127.0.0.1:57101";

  public checkToken(): any {

   return this.token;
  }

  public async signIn(username: string, password: string): Promise<any> {

    const user = {

      action: "signIn",
      username: username,
      password: password
    };

    const response = await this.send(user);

    this.token = response.data.token;

    return this.token;

  }

  public async getNotificationList(): Promise<any> {

      const request = {

        action: "getNotificationList",
        sortColumn: "content",
        sortWay: 1,
        pageNumber: 1,
        pageSize : 10
      }

      return this.send(request);
  }

  public async send (request: any): Promise<any> {

       /*const config = {
         headers: {
           "Content-Type": "application/json; charset=UTF-8",
           "action": `${request.action}`,
           "token": `${this.token}`
         }
       }

       try {

          return this.http.post(this.url, request, config);

       } catch (error) {

         console.log(error);
       }*/


     const config = {
       headers: {
         "Content-Type": "application/json; charset=UTF-8",
         "action": `${request.action}`,
         "token": `${this.token}`
       }
     }

        return axios.post(this.url, request, config).catch(error => {
 console.log(error);
         return error;
       });
  }
}
