import {Component, OnInit} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  myModel = JSON.parse<boolean>(localStorage.getItem('sw'))

  constructor() {
  }

  ngOnInit(): void {
  }

  swic(event: MatSlideToggleChange) {
    this.myModel = event.checked
    localStorage.setItem('sw', JSON.stringify(this.myModel))
  }
}
