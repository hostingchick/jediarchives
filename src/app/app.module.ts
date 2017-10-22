import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterDetailComponent } from './character-detail.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
