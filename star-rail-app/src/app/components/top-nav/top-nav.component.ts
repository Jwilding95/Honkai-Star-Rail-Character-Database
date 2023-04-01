import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  public navItems: string[] = ['Home', 'Search', 'Teambuilder', 'Matchups']

  constructor() { }

  ngOnInit(): void {
  }

}
