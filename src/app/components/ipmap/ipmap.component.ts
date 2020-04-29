import { Component, OnInit } from '@angular/core';
import { IpService } from './../../shared/services/ip-service';
import { LocationResponse } from './../../shared/constants/global.constants';

@Component({
  selector: 'app-ipmap',
  templateUrl: './ipmap.component.html',
  styleUrls: ['./ipmap.component.scss']
})
export class IpmapComponent implements OnInit {

  ip: string;
  location: LocationResponse;
  zoom: number = 15;

  constructor(
    private _ipService: IpService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    await this.getIp();
    await this.getLocationInfo();
  }

  async getIp() {
    const data = await this._ipService.getIPAddress().toPromise();
    this.ip = data.ip;
  }

  async getLocationInfo() {
    this.location = await this._ipService.getLocationInfo(this.ip).toPromise();
  }
}
