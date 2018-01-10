import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secret-box',
  templateUrl: './secret-box.component.html',
  styleUrls: ['./secret-box.component.css']
})
export class SecretBoxComponent implements OnInit {
  @Input() isHidingSecret = true;
  @Input() secret: string;

  constructor() { }

  ngOnInit() {
  }

}
