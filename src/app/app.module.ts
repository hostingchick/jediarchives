import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { CharacterDetailComponent } from './character-detail.component';
import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
  {
    path: 'search/:option',
    component: SearchComponent
  }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
