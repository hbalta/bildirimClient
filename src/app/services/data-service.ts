import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  notificationId: any;

  setNotificationEditId (id: any) {

    this.notificationId = id;
  }

  getNotificationId() {

    return this.notificationId;
  }
}
