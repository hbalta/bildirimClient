import { Component, OnInit, ViewChild } from "@angular/core";
import { DataBindingDirective, PageChangeEvent } from "@progress/kendo-angular-grid";
import { SVGIcon, filePdfIcon, fileExcelIcon, clipboardTextIcon, clipboardCodeIcon, clipboardMarkdownIcon, gearIcon, plusIcon, minusIcon } from "@progress/kendo-svg-icons";
import {ApiAdapter} from "../../services/api-adapter";
import {DataService} from "../../services/data-service";
import '@progress/kendo-angular-intl/locales/tr/all';
import {
  ButtonSize,
  ButtonRounded,
  ButtonFillMode,
  ButtonThemeColor,
} from "@progress/kendo-angular-buttons";
import { Router } from '@angular/router';
import {faBell, faPlus} from "@fortawesome/free-solid-svg-icons";


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

  //mySelection tıkladığım hücrenin id' sini verir bunuda kendo grid parametrelerinden ayarlanabilir.
  public mySelection: string[] = [];
  public pdfSVG: SVGIcon = filePdfIcon;
  public excelSVG: SVGIcon = fileExcelIcon;
  public clipboardSVG: SVGIcon = gearIcon;
  public themeColor: ButtonThemeColor = "inverse";
  public addSVG: SVGIcon = plusIcon;
  pageSize: number = 100000;
  pageNumber: number = 1;
  sortColumn: string = "id";
  sortWay: number = 1;
  content:string | DocumentFragment = 'İçerik'
  addNotificaiton: string = "Bildirimi Güncelle";
  deleteNotification: string = "Bildirimi Sil";
  faPlus = faPlus;

  notificaitonTitle: object = {

    content: 'İçerik',
    subject: "Konu",
    topic: "konu",
    isActive: "Aktiflik"
  }

  constructor(private apiAdapter: ApiAdapter, private  dataService: DataService, private router: Router) {
  }

  public async ngOnInit(): Promise<any> {

    await this.getData();
  }

  public data = [
    {
      text: this.addNotificaiton,
      svgIcon: plusIcon,
      click: (): void => {
        this.dataService.setNotificationEditId(this.mySelection);
        this.router.navigate(['notificationAddEdit']);
        //this.router.navigateByUrl("/notificationAddEdit");
      },
    },
    {
      text: this.deleteNotification,
      svgIcon: minusIcon,
      click: async (): Promise<void> => {
        console.log(this.mySelection);
        await this.apiAdapter.deleteNotificationById(this.mySelection);
        await this.getData();
      },
    }
  ];

  async onSortChange (event: any): Promise<void> {

    this.sortWay = event[0].dir === "asc" ? 1 : -1;

    this.sortColumn = event[0].field;

    await this.getData();
  }

  async onCellClick (event: any): Promise<void> {

    this.mySelection = event.dataItem.id;
    this.dataService.setNotificationEditId(this.mySelection);
    this.router.navigate(['notificationAddEdit']);
  }

  async pageChange(event: PageChangeEvent): Promise<void> {

    this.pageNumber = event.skip

    await this.getData();
  }

  async pageSizeChange(event: any): Promise<void> {

    this.pageSize = JSON.parse(event);

    await this.getData();
  }

  public async getData() {

    const response = await this.apiAdapter.getNotificationList(this.sortColumn, this.sortWay, this.pageNumber, this.pageSize);

    this.gridData = response.data;

    this.gridView = this.gridData;
  }

  setNotificationId() {

    this.dataService.setNotificationEditId(this.mySelection);
  }

  setNotificationIdByDropDown(id: any): void {

    this.mySelection = id;
  }

  openAddNotificationCompanent() {

    this.router.navigate(['notificationAddEdit'])
  }
}
