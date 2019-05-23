import { Component, OnInit } from '@angular/core';

import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(private configService: ConfigService) { }

  pacientsData: any[];

  ngOnInit(): void {
    this.configService.getPatientsData()
    .subscribe((data: any[]) => {
      this.pacientsData = data;
    });
  }
}
