import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  constructor(public authenticatationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  Logout() {
    this.authenticatationService.Logout();
  }

}
