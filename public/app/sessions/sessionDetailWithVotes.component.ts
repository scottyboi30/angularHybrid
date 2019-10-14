import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'session-detail-with-votes',
  templateUrl: './sessionDetailWithVotes.component.html'
})
export class SessionDetailWithVotesComponent implements OnInit {
  
  @Input() session: any;
  constructor() { }

  ngOnInit(): void { }
}
