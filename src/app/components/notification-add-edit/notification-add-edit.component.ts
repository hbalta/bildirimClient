import { Component, EventEmitter,
  Input, OnInit, Output
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {DataService} from "../../services/data-service";
import {ApiAdapter} from "../../services/api-adapter";
import {Router} from "@angular/router";

export interface Medal {
  name: string;
  type: string;
  sport: string;
}
@Component({
  selector: 'app-notification-add-edit',
  templateUrl: './notification-add-edit.component.html',
  styleUrls: ['./notification-add-edit.component.scss']
})
export class NotificationAddEditComponent implements OnInit{
  @Input() id: string = "";
  @Output() idClick = new EventEmitter<void>();
  form: FormGroup;
  isActive: boolean = true;
  content: string = "";
  subject: string = "";
  topic: string = "";
  date: Date = new Date();
  header: string = "";
  saveValue: string = "";
  selectedDescription: string = "Announcement";
  constructor(private dataService: DataService, private apiAdapter: ApiAdapter, private router: Router) {}

  async ngOnInit() {

    this.id = this.dataService.getNotificationId();

    if(this.id !== undefined) {

      this.header = "Bildirim Güncelle";
      this.saveValue = "Güncelle";

      const notification = await this.getNotification(this.id);

      this.content = notification.data.content;
      this.subject = notification.data.subject;
      this.topic = notification.data.topic;
      this.date = notification.data.date;
      this.isActive = notification.data.isActive;

    } else {

      this.header = "Bildirim Ekle";
      this.saveValue = "Ekle";
      this.isActive = true;
      this.content = "";
      this.subject = "";
      this.topic = "";
      this.date = new Date();
    }
  }

  public data = [
    {text: "Duyuru", value: "Announcement"},
    {text: "Proje", value: "Project"},
    {text: "Haberler", value: "News"},
    {text: "Etkinlik", value: "Activity"},
  ];

  selectedDescriptionChange(description: any) {

    this.selectedDescription = description;
  }

  public async getNotification(id: any):Promise<any> {

    return this.apiAdapter.getNotificationById(id);
  }

  public async save(): Promise<void> {

    this.dataService.setNotificationEditId(undefined);

    console.log(this.saveValue);

    if(this.saveValue === "Ekle") {

      await this.apiAdapter.insertNotification(this.content, this.subject, this.topic, this.date, this.isActive);

      this.isActive = true;
      this.content = "";
      this.subject = "";
      this.topic = "";
      this.date = new Date();

      this.router.navigate(["kendo"]);

    } else {

      await this.apiAdapter.updateNotification(this.id, this.content, this.subject, this.topic, this.date, this.isActive);
      this.router.navigate(["kendo"]);
    }


  }
}
