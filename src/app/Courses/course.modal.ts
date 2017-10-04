import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { CourseService } from './course.service';
import { Course } from './course';



@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './course.modal.content.html',
  providers: [CourseService]
})
export class CourseModalContent{
  @Input() name: string;
  @Input() monday: boolean;
  @Input() tuesday: boolean;
  @Input() wednesday: boolean;
  @Input() thursday: boolean;
  @Input() friday: boolean;
  @Input() duration: number;
  @Input() startTime: Date;
  
  constructor(public activeModal: NgbActiveModal) {}
  
  editCourse() {
    this.name = 'Durward White';
  }

}