import { Component, OnInit, ViewChild } from "@angular/core";
import { DataBindingDirective, PageChangeEvent } from "@progress/kendo-angular-grid";
import { SVGIcon, filePdfIcon, fileExcelIcon, clipboardTextIcon, clipboardCodeIcon, clipboardMarkdownIcon, gearIcon } from "@progress/kendo-svg-icons";
import {apiAdapter} from "../../services/api-adapter";
import '@progress/kendo-angular-intl/locales/tr/all';
import {
  ButtonSize,
  ButtonRounded,
  ButtonFillMode,
  ButtonThemeColor,
} from "@progress/kendo-angular-buttons";
import { Router } from '@angular/router';

export type Option = {
  type: string;
  data: string[];
  default: ButtonSize | ButtonRounded | ButtonFillMode | ButtonThemeColor;
};

@Component({
  selector: 'app-kendo',
  templateUrl: './kendo.component.html',
  styleUrls: ['./kendo.component.css']
})
export class KendoComponent  implements OnInit{
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  public gridData: unknown[];
  public gridView: unknown[];

  public mySelection: string[] = [];
  public pdfSVG: SVGIcon = filePdfIcon;
  public excelSVG: SVGIcon = fileExcelIcon;
  public clipboardSVG: SVGIcon = gearIcon;
  public themeColor: ButtonThemeColor = "inverse";
  pageSize: number = 100000;
  pageNumber: number = 1;
  sortColumn: string = "id";
  sortWay: number = 1;

  constructor(private apiAdapter: apiAdapter, private router: Router) {
  }

  public async ngOnInit(): Promise<any> {

    await this.getData(this.sortColumn, this.sortWay, this.pageNumber, this.pageSize);
  }

  public data = [
    {
      text: "Bildirimi Güncelle",
      svgIcon: clipboardTextIcon,
      click: (): void => {
        this.router.navigate(["notificationAddEdit"]);
        //this.router.navigateByUrl("/notificationAddEdit");
      },
    },
    {
      text: "Paste as HTML",
      svgIcon: clipboardCodeIcon,
      click: (): void => {
        console.log("Paste as HTML");
      },
    }
  ];

  async onSortChange (event: any): Promise<void> {

    this.sortWay = event[0].dir === "asc" ? 1 : -1;

    this.sortColumn = event[0].field;

    await this.getData(this.sortColumn, this.sortWay, this.pageNumber, this.pageSize);
  }

  async onCellClick (event: any): Promise<void> {

    this.mySelection = event.dataItem.id;

    await this.getData(this.sortColumn, this.sortWay, this.pageNumber, this.pageSize);
  }

  async pageChange(event: PageChangeEvent): Promise<void> {

    this.pageNumber = event.skip

    await this.getData(this.sortColumn, this.sortWay, this.pageNumber, this.pageSize);
  }

  async pageSizeChange(event: any): Promise<void> {

    this.pageSize = JSON.parse(event);

    await this.getData(this.sortColumn, this.sortWay, this.pageNumber, this.pageSize);
  }

  public async getData(sortColumn: string, sortWay: number, pageNumber: number, pageSize: number) {

    const response = await this.apiAdapter.getNotificationList(sortColumn, sortWay, pageNumber, pageSize);

    this.gridData = response.data;

    this.gridView = this.gridData;
  }
}
