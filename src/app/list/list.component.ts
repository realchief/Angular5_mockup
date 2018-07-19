import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { LISTS } from '../mock-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit { 

  lists = LISTS;
  selectedList: List;  

  constructor() { }

  ngOnInit() {
  }

  onSelect(list: List): void {
    this.selectedList = list;
  }

}
