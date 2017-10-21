import { Component } from '@angular/core';

export class SearchInfo {
  name: string;
  option: string;
}

export class Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string;
  species: string;
  vehicles: string;
  starships: string;
  edited: string;
  created: string;
  url: string;
}

export class Planet {
  name: string;
}

export class Species {
  name: string;
}

export class Starship {
  name: string;
}

export class Vehicle {
  name: string;
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
  people = 'Character';
  searchUrl = '';
  searhoption: SearchInfo = {
    name: '',
    option: ''
  };
  searches = SEARCHLIST;
  character: Character = {
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: '',
    homeworld: '',
    films: '',
    species: '',
    vehicles: '',
    starships: '',
    edited: '',
    created: '',
    url: ''
  };
  planet: Planet = {
    name: ''
  };
  species: Species = {
    name: ''
  };
  starship: Starship = {
    name: ''
  };
  vehicle: Vehicle = {
    name: ''
  };

  onSelect(search): void {
    this.searchUrl = 'https://swapai.co/api/' + search.option;
  }
}
