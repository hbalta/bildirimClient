import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ApiAdapter} from "../../services/api-adapter";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  @Output() tokenChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor(private apiAdapter: ApiAdapter) { }

  username: string = "";
  password: string = "";

  async ngOnInit(): Promise<any> {

    await this.apiAdapter.checkToken();
  }

  async login(): Promise<any> {

    const object = {

      username: this.username,
      password: this.password
    };

    const response = await this.apiAdapter.signIn(this.username, this.password);

    if(response) {

      this.tokenChanged.emit();
    }
  }
}
