import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shouldSecretBeHidden = false;

  confirmHide() {
    window.alert('Das Geheimnis ist in Sicherheit.');
  }
}
