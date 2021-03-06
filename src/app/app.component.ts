import { Component } from '@angular/core';


export class SearchInfo {
  name: string;
  option: string;
}

const SEARCHLIST: SearchInfo[] = [
  { name: 'Characters', option: 'people' },
  { name: 'Species', option: 'species' },
  { name: 'Planets', option: 'planets' },
  { name: 'Starships', option: 'starships' },
  { name: 'Vehicles', option: 'vehicles' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'The Jedi Archives';
  searchoption: SearchInfo = {
    name: '',
    option: ''
  };
  searches = SEARCHLIST;
}
