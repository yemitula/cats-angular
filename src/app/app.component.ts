import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'cats-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  cats: any[] = [];
  apiURL = 'https://api.thecatapi.com/v1/images/search?limit=50';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadCats();
  }

  loadCats() {
    this.http.get<any[]>(this.apiURL).subscribe((data) => {
      console.log(data);
      this.cats = data;
    });
  }
}
