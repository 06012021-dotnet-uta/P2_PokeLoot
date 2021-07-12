import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {
  @Input() isHomeNav: boolean = true;
  @Input() isLoginNav: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
