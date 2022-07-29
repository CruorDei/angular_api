import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/services/http-client.service';
import { UrlApi } from 'src/services/url-api';
import { Departement } from 'src/model/Departement';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent implements OnInit {
  public arrayDepartement: Departement[] = []

  constructor(private _httpService: HttpClientService) { }

  ngOnInit(): void {
    this.getDepartement()
  }

  getDepartement(url: string = UrlApi.rawUrl_Departement) {
    this._httpService.getRequest<Departement[]>(url).subscribe((jsonResponse) => {
      this.arrayDepartement = jsonResponse
      console.log(jsonResponse)
    })

  }
}

