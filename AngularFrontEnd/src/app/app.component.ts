import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontEnd';
  response: any;
  length: any;
  constructor(private http: HttpClient) {
    try {
      http.get('http://localhost:90/weatherforecast', { responseType: 'text' }).subscribe((res: any) => {
        console.log(res.length);
        this.response = res;
      });

    } catch (error) {
      console.log(error);
    }
  }
}
