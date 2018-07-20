import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material';
import { Entity } from '../models/entity';
import { Entities } from '../models/mock-list';


@Component({
  selector: 'app-connected',
  templateUrl: './connected.component.html',
  styleUrls: ['./connected.component.css']
})
export class ConnectedComponent implements OnInit {

  lists = Entities;
  selectedList: Entity;  

  constructor() { }

  ngOnInit() {
  }
  
  panelOpenState = false;
}
