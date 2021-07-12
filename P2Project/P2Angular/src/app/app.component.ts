import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'P2Angular';
  isLogin: boolean = false;
  isHome: boolean = true;

  LoginEmitter(event: any): void {
    this.isLogin = !event;
    this.isHome = event;
  }

}
