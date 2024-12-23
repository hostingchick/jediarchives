import {Component, Input } from '@angular/core';
import {Router} from '@angular/router';
import {Characters} from './characters';
import {Planets} from './planets';
import {Species} from './species';
import {Starships} from './starships';
import {Vehicles} from './vehicles';
import {HttpClient} from "@angular/common/http";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


export class SearchInfo {
  name: string;
  option: string;
}

const SEARCHLIST: SearchInfo[] = [
  {name: 'Characters', option: 'people'},
  {name: 'Species', option: 'species'},
  {name: 'Planets', option: 'planets'},
  {name: 'Starships', option: 'starships'},
  {name: 'Vehicles', option: 'vehicles'}
];

@Component({
  selector: 'search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./app.component.css']
})

export class SearchComponent {

  title = 'The Jedi Archives';
  results: any;
  noResults: number;
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
    private http: HttpClient
  ) {
  }

  searchData(search, question) {

    //Create the api url
    this.searchUrl = 'https://swapi.dev/api' + search.replace('/search', '') + '?search=' + question.toUpperCase();
    // Make the HTTP request:
    return this.http.get<any>(this.searchUrl)
      .subscribe({
        next: data => {this.results = data.results;
          this.noResults = data.results.length;
          console.log(this.results);
          return JSON.stringify(this.results);},
        error: error => {console.log('R2-D2 What have you done?!');}
      });
  }

  startOver() {
    this.router.navigate(['./']);
  }

}
