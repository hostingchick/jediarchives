import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {SearchInfo} from './searchInfo';
import {CommonModule} from '@angular/common';

const SEARCHLIST: SearchInfo[] = [
  { name: 'Characters', option: 'people' },
  { name: 'Species', option: 'species' },
  { name: 'Planets', option: 'planets' },
  { name: 'Starships', option: 'starships' },
  { name: 'Vehicles', option: 'vehicles' }
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title ="Jedi Archives";
  searchoption: SearchInfo = {
    name: '',
    option: ''
  };
  searches = SEARCHLIST;
}
