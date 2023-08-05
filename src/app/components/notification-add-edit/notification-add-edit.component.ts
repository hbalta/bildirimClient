import {  ChangeDetectionStrategy, Component, EventEmitter,
  Input, OnInit, OnChanges, Output, SimpleChanges
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
export class NotificationAddEditComponent {
  @Input() medal: "";
  @Output() submitted = new EventEmitter<Medal>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      type: [null],
      sport: [null],
    });
  }


  submit() {
    this.submitted.emit(this.form.getRawValue());
    this.form.reset();
  }
}
