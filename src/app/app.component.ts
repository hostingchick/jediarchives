import { Component } from '@angular/core';

export class CharInfo {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Jedi Archives';
  people = 'Character';
  character: CharInfo = { name: ''};
}
