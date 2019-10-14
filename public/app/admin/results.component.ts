import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
})
export class ResultsComponent implements OnInit {

  @Input('allSessions') sessionsByVoteDesc: any;

  constructor() { }

  ngOnInit(): void { 
    this.sessionsByVoteDesc.sort((session1, session2) =>
      // reverse order
      (session2.voteCount - session1.voteCount));
  }
}
