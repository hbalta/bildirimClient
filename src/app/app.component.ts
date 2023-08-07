import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  input: any;
  output: any;

  constructor() {
  }

  isLogin: boolean = false;
  ngOnInit() {

  }

  onTokenChange($event: any) {

    this.isLogin = true;
  }
}
