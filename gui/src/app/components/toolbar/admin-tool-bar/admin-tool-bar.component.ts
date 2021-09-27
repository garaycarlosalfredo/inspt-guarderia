import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-tool-bar',
  templateUrl: './admin-tool-bar.component.html',
  styleUrls: ['./admin-tool-bar.component.css']
})
export class AdminToolBarComponent implements OnInit {
  @Input() name !: String;
  @Input() role !: String;

  constructor() { }
  @Output() statusOut = new EventEmitter(); 

  ngOnInit(): void {
  }

  
  onStatusChange(status : number){
    this.statusOut.emit(status);
}

}
