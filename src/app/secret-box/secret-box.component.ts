import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret-box',
  templateUrl: './secret-box.component.html',
  styleUrls: ['./secret-box.component.css']
})
export class SecretBoxComponent implements OnInit {
  isHidingSecret = true;

  constructor() { }

  ngOnInit() {
  }

}
