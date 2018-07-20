import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material';
import { List } from '../list';
import { LISTS } from '../mock-list';


@Component({
  selector: 'app-connected',
  templateUrl: './connected.component.html',
  styleUrls: ['./connected.component.css']
})
export class ConnectedComponent implements OnInit {

  lists = LISTS;
  selectedList: List;  

  constructor() { }

  ngOnInit() {
  }
  panelOpenState = false;
}
