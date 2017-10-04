import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'counter',
  styles: [`
  .counter {
    position: relative;
  }
  input {
    border: 0;
    border-radius: 3px;
    height: 30px;
    max-width: 100px;
    text-align: center;
  }
  button {
    outline: 0;
    cursor: pointer;
    height: 30px;
    border: 0;
    border-radius: 3px;
    background: #0088cc;
    color: #fff;
  }
`],
    templateUrl: './faculty.modal.html'
})

export class FacultyContent {
    @Input() name: string;
    @Input() count: number = 0;
    
    @Output()
    change: EventEmitter<number> = new EventEmitter<number>();
    
    increment() {
      this.count++;
      this.change.emit(this.count);
    }
    
    decrement() {
      this.count--;
      this.change.emit(this.count);
    }
    constructor(public activeModal: NgbActiveModal) {}
  }
