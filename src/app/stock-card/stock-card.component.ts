import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aec-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent {
  @Input() stockQuote;
}
