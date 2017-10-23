import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Characters } from './characters';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class CharacterDetailComponent {
  @Input() character: Characters;
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
}
}
