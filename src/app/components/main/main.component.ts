import { Component, OnInit } from '@angular/core';
import {apiAdapter} from "../../services/api-adapter";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private apiAdapter: apiAdapter) { }

  async ngOnInit(): Promise<any> {

  }

}
