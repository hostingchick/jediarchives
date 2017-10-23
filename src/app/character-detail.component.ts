import { Component, Input } from '@angular/core';
import { Characters } from './characters';

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./app.component.css']
})
export class CharacterDetailComponent {
  @Input() character: Characters;

}
