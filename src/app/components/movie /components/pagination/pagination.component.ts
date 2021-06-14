import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Res} from "../../../../models/Res";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input()
  res: Res

  @Output()
  next_lift = new EventEmitter()

  @Output()
  back_lift = new EventEmitter()

  @Output()
  first_lift = new EventEmitter()

  @Output()
  last_lift = new EventEmitter()


  constructor() {
  }

  ngOnInit(): void {
  }

  next() {
    this.next_lift.emit()
  }

  back() {
    this.back_lift.emit()
  }

  first() {
    this.first_lift.emit()
  }

  last() {
    this.last_lift.emit()
  }

  newtem() {
    // @ts-ignore
    return JSON.parse<boolean>(localStorage.getItem('sw'))
  }

}
