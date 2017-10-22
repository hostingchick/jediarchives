import { Component } from '@angular/core';
import { Character } from './character';
import { Planet } from './planet';
import { Species } from './species';
import { Starship } from './starship';
import { Vehicle } from './vehicle';

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
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./app.component.css']
})

export class SearchComponent {
  title = 'The Jedi Archives';
  searchUrl = '';
  searchoption: SearchInfo = {
    name: '',
    option: ''
  };
  searches = SEARCHLIST;


  onSelect(search): void {
    this.searchUrl = 'https://swapai.co/api/' + search.option;
  }
}
