import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  id: any;

  setNotificationEditId (id: any) {

    this.id = id;
  }

  getNotificationId() {

    return this.id;
  }
}
