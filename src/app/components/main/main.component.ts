import { Component, OnInit } from '@angular/core';
import {ApiAdapter} from "../../services/api-adapter";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private apiAdapter: ApiAdapter) { }

  async ngOnInit(): Promise<any> {

  }

}
