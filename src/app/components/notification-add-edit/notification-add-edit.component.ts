import {  ChangeDetectionStrategy, Component, EventEmitter,
  Input, OnInit, OnChanges, Output, SimpleChanges
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {DataService} from "../../services/data-service";

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
  constructor(private dataService: DataService) {}

  ngOnInit() {

    this.id = this.dataService.getNotificationId();

    console.log(this.id);
  }

  getNotificationId() {

    this.id = this.dataService.getNotificationId();
  }

  submit() {
    this.form.reset();
  }
}
