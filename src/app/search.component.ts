import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Characters } from './characters';
import { Planets } from './planets';
import { Species } from './species';
import { Starships } from './starships';
import { Vehicles } from './vehicles';


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
  category = '';
  results = '';
  searchUrl = '';
  searchoption: SearchInfo = {
    name: '',
    option: ''
  };
  searches = SEARCHLIST;
  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  searchData(option: string): void {
      //Create the api url
      this.searchUrl = 'https://swapi.co/api/'+ option + '?search=' + searchoption.name.toUpperCase();

      // Make the HTTP request:
      this.http.get(this.searchUrl).subscribe(data => {
        // Read the result field from the JSON response.
        this.results = data['results'];
      },
        err => {console.log('Something went awry!');
      });
    }
  }
