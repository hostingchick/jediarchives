import { Component, Input } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./app.component.css']
})
export class CharacterDetailComponent {
  @Input() character: Character;

}
