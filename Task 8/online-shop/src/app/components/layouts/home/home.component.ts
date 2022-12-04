import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  quantity: number = 0;
  showRecent: boolean = true;
  changeValue(event: any) {
    this.quantity = event.target.value;
  }

  showRecentProducts() {
    this.showRecent = true;
  }
  hideRecentProducts() {
    this.showRecent = false;
  }
}
