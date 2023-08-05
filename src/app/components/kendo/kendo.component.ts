import { Component, OnInit, ViewChild } from "@angular/core";
import { DataBindingDirective } from "@progress/kendo-angular-grid";
import { SVGIcon, clipboardIcon, filePdfIcon, fileExcelIcon, clipboardTextIcon, clipboardCodeIcon, clipboardMarkdownIcon, gearIcon } from "@progress/kendo-svg-icons";
import { process } from "@progress/kendo-data-query";
import { employees } from "./employees";
import { images } from "./images";
import {apiAdapter} from "../../services/api-adapter";
import '@progress/kendo-angular-intl/locales/tr/all';
import {
  ButtonSize,
  ButtonRounded,
  ButtonFillMode,
  ButtonThemeColor,
} from "@progress/kendo-angular-buttons";
import {DropDownButton} from "@progress/kendo-angular-buttons";

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
  public dropDownColor: string = "blue";
  public themeColor: ButtonThemeColor = "inverse";


  constructor(private apiAdapter: apiAdapter) {
  }

  public async ngOnInit(): Promise<any> {

    const response = await this.apiAdapter.getNotificationList();

    if(response) {

    }

    this.gridData = response.data;

    this.gridView = this.gridData;

    console.log(this.gridView);
  }

  public onFilter(input: Event): void {

    const inputValue = (input.target as HTMLInputElement).value;

    this.gridView = process(this.gridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: "subject",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "content",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "date",
            operator: "custom",
            value: inputValue,
          },
          {
            field: "isActive",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "isComplete",
            operator: "contains",
            value: inputValue,
          },
        ],
      },
    }).data;

    this.dataBinding.skip = 0;
  }

  public onPaste() {
    console.log("Paste");
  }

  public data = [
    {
      text: "Keep Text Only",
      svgIcon: clipboardTextIcon,
      click: (): void => {
        console.log("Keep Text Only");
      },
    },
    {
      text: "Paste as HTML",
      svgIcon: clipboardCodeIcon,
      click: (): void => {
        console.log("Paste as HTML");
      },
    },
    {
      text: "Paste Markdown",
      svgIcon: clipboardMarkdownIcon,
      click: (): void => {
        console.log("Paste Markdown");
      },
    },
    {
      text: "Set Default Paste",
      click: (): void => {
        console.log("Set Default Paste");
      },
    },
  ];

  public photoURL(dataItem: { img_id: string; gender: string }): string {
    const code: string = dataItem.img_id + dataItem.gender;
    const image: { [Key: string]: string } = images;

    return image[code];
  }

  public flagURL(dataItem: { country: string }): string {
    const code: string = dataItem.country;
    const image: { [Key: string]: string } = images;

    return image[code];
  }
}
