import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-tool-bar',
  templateUrl: './admin-tool-bar.component.html',
  styleUrls: ['./admin-tool-bar.component.css']
})
export class AdminToolBarComponent implements OnInit {
  @Input() name !: String;
  @Input() role !: String;

  constructor() { }

  ngOnInit(): void {
  }

}
