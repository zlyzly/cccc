import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragmove',
  templateUrl: './dragmove.component.html',
  styleUrls: ['./dragmove.component.css']
})
export class DragmoveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onDragBegin(e) {
    console.log(e)
  }
  onDragEnd(e){
    console.log(e)
  }
}
