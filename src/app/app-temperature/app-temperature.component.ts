import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../temperature.service';

@Component({
  selector: 'app-app-temperature',
  templateUrl: './app-temperature.component.html',
  styleUrls: ['./app-temperature.component.scss']
})
export class AppTemperatureComponent implements OnInit {
  devicesTemp: any[] = [];
  errorMsg: any;
  item: any = {};
  subItem: any = {};
  subDeviceNum: any = {}
  constructor(private temperatureService: TemperatureService) { }


  ngOnInit(): void {
    this.renderValues()
  }
  toSendDNumber(device: any) {
    this.temperatureService.addTemperature(device)

  }

  renderValues() {
    this.temperatureService.getAllTemps().subscribe((data) => {
      return this.devicesTemp = data;
    },
      error => {
        this.errorMsg = error;
      });
  }

  toViewSubTable(deviceNum) {
    this.temperatureService.getTemperature(deviceNum).subscribe((data) => {
      return this.subDeviceNum = data;
    })


  }
}
