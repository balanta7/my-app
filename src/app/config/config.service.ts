import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }

  private pacientsDataUrl = 'https://alexgr.ro/ehealth/patients.json';

  getPatientsData() {
    return this.http.get(this.pacientsDataUrl);
  }
}
