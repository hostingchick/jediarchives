import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Form } from '@angular/forms'

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
  results: any;
  subResults: any;
  searchUrl = '';
  searchoption: SearchInfo = {
    name: '',
    option: ''
  };
  searches = SEARCHLIST;
  characters: Characters[];
  charResult: Characters;
  constructor(
    public router: Router,
    private http: Http
  ) {}

  searchData(search, question) {
      //Create the api url
      this.searchUrl = 'https://swapi.co/api'+ search.replace('/search','') + '?search=' + question.toUpperCase();

      // Make the HTTP request:
      return this.http.get(this.searchUrl)
      .map(res => res.json())
      .subscribe(
        data => {
          this.results = data.results;
          console.log(this.results);
          return JSON.stringify(this.results);
         },
        err => { console.log('Something went awry!'); }
      );
    }

    searchSubData(url) {
        // Make the HTTP request:
        return this.http.get(url)
        .map(res => res.json())
        .subscribe(
          data => {
            this.subResults = data.subResults;
            console.log(this.subResults);
            return JSON.stringify(this.subResults);
           },
          err => { console.log('Something went awry!'); }
        );
      }
  }
