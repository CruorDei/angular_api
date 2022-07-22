import { Component, OnInit } from '@angular/core';
import { Region } from 'src/model/Region';
import { HttpClientService } from 'src/services/http-client.service';
import { UrlApi } from 'src/services/url-api';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  public arrayRegions:Region[] = []

  constructor(private _httpService:HttpClientService) { }

  ngOnInit(): void {
    this.getRegion()
  }

  getRegion(url: string = UrlApi.rawUrl_region) {
    this._httpService.getRequest<Region[]>(url).subscribe((jsonResponse) => {
      this.arrayRegions = jsonResponse
      console.log(jsonResponse)
    })
    
  }
}
