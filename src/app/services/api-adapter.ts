import {Injectable} from "@angular/core";
import axios from "axios";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAdapter {

  constructor(private http: HttpClient) {

  }

  token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJhN2VjOGU0NjUyOGI1NjFhNDE1YzIiLCJ1c2VybmFtZSI6ImFkbWluIiwidXNlck5hbWVTdXJuYW1lIjoiVGVzdCBVc2VyIiwicGVybWlzc2lvbklkTGlzdCI6WyI3YTRkNTFjMC01NmYyLTQwYWMtOTUxMC0wYWEzZWQxNTdhZmEiLCI2NWMyNmE5MS0zNjU0LTQ4NDAtYjJmYS1jYTM5ZDUzMTUyNWIiLCJmYjcxZTY1YS03ZjU0LTQ3NDYtODI0OC1iOGI0MjNkZTlhNmMiLCI2NWMyNmE5MS0zNjU0LTQ4NDAtYjJmYS1jYTM5ZDUzMTUyNWIiLCJlYjExODc4OC0zZDczLTQ0Y2QtOTFkOS1lYTYwOTg0NzAwMDIiLCIxYWE3NWU4OC02OTU3LTRkN2UtODg5My04NGY3YjU4OGNlYmQiXSwiaWF0IjoxNjkxMzI0NTE5LCJleHAiOjE2OTE0MTA5MTl9.wnx8zmmEgsivZiRbLFx_2diR8AUzxQSporubMwutRE4";
  url: string = "http://127.0.0.1:57101";
  data: any;

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

  public async getNotificationList(sortColumn: string, sortWay: number, pageNumber: number, pageSize: number): Promise<any> {

      const request = {

        action: "getNotificationList",
        sortColumn: sortColumn,
        sortWay: sortWay,
        pageNumber: pageNumber,
        pageSize : pageSize
      }

      return this.send(request);
  }

  public async deleteNotificationById(id: any): Promise<void> {

    const request = {

      action: "deleteNotification",
      id: id
    }

    await this.send(request);
  }

  public async insertNotification(content: string, subject: string, topic: string, notificationDate: Date, isActive: boolean): Promise<void> {

    const request = {

      action: "insertNotification",
      subject: subject,
      content: content,
      topic: topic,
      date: notificationDate,
      isActive: isActive
    }

    await this.send(request);
  }
  public async getNotificationById(id: any): Promise<void> {

    const request = {

      action: "getNotification",
      id: id,
    }

    return this.send(request);
  }

  public async updateNotification(id: any, content: string, subject: string, topic: string, notificationDate: Date, isActive: boolean): Promise<void> {
    const request = {

      action: "updateNotification",
      id: id,
      subject: subject,
      content: content,
      topic: topic,
      date: notificationDate,
      isActive: isActive
    }

    await this.send(request);

  }

  public async send (request: any): Promise<any> {

    // return new Promise<any>((resolve, reject) => {

    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //       "action": `${request.action}`,
    //       "token": `${this.token}`
    //     }
    //   }
    //
    //   try {
    //
    //     this.http.post<any>(this.url, request, config).subscribe((response) => {
    //
    //       setTimeout(() => {this.data = response;},200)
    //
    //     });
    //
    //     console.log(this.data);
    //      resolve(this.data);
    //
    //   } catch (error) {
    //
    //     console.log(error);
    //   }
    //
    // })
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
