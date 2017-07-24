import { Component, OnInit } from '@angular/core';

import { AppState } from '../../../app.state';

@Component({
  selector: 'app-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.scss']
})
export class SortBarComponent implements OnInit {

  constructor(public state: AppState) { }

  ngOnInit() {
  }
  
  setCollapse(col){
    this.state.setCollapse(col);
  }
  
  // toggle element
  toggleElement(button, id){
    if($('.'+button).hasClass('active')) {
      $('.'+button).removeClass('active');
    }
    else if ($('.'+button).not('.active')) {
      $('.'+button).addClass('active');
    }
    $('#'+id).toggleClass('active');
    $('#'+id).slideToggle( "fast" );
  }
}
