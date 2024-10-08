import { Component, ViewChild, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import { NgApexchartsModule } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-info-graphic',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './info-graphic.component.html',
  styleUrls: ['./info-graphic.component.css']
})
export class InfoGraphicComponent implements OnChanges {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @Input() amountChild: number[] = [0, 0, 0, 0];

  constructor() {
    this.chartOptions = {
      series: [0, 0, 0, 0],
      chart: {
        type: "donut"
      },
      labels: ["Frutas y verduras", "Carnes y legumbres", "Cereales y Almidones", "Grasas y azúcares"]
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['amountChild']) {
      this.chartOptions.series = [
        this.amountChild[0],
        this.amountChild[1],
        this.amountChild[2],
        this.amountChild[3]
      ];
    }
  }
}
