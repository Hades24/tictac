import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  nav(mode: string) {
    this.route.navigate([`/toss/${mode}`]);
  }

}
