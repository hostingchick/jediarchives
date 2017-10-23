import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SearchComponent } from './search.component';
import { CharacterDetailComponent } from './character-detail.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
