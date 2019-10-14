import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detail-panel',
  templateUrl: './detailPanel.component.html'
})
export class DetailPanelComponent implements OnInit {
  @Input() title: string;
  // @Input('collapsed') initialCollapsed; a renamed input prop angular js
  @Input() collapsed: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  collapse() {
    this.collapsed = !this.collapsed;
  }
}
