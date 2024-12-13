import { Routes } from '@angular/router';
import {SearchComponent} from './search.component';

export const routes: Routes = [{
  path: 'search/:option',
  component: SearchComponent
}];
