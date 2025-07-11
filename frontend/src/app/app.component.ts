import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  template: `
    <h1>MongoDB Entry</h1>
    <div *ngIf="item">
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
    </div>
  `,
})
export class AppComponent implements OnInit {
  item: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/item').subscribe(data => this.item = data);
  }
}
