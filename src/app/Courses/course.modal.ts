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
  @Output() durationChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  // @Output() courseInfoChange: EventEmitter<Course> = new EventEmitter<Course>();

 
  constructor(public activeModal: NgbActiveModal) {}
  
  editCourse() {
    this.name = 'Durward White';
  }

  changeDuration(content: string) {
    var changeObj = {"propName": "default", "propValue": "default"};

    if (content === 'duration')
    {
      // this.durationChange.emit(this.duration);
      changeObj.propName = "duration";
      changeObj.propValue = this.duration.toString();
    }
    if (content === 'name')    
    {
        changeObj.propName = "name";
        changeObj.propValue = this.name;
    }
    if (content === 'monday')
    {
        changeObj.propName = "Mo";
        changeObj.propValue = this.monday.valueOf().toString();
    }
    if (content === 'tuesday')
    {
        changeObj.propName = "Tu";
        changeObj.propValue = this.tuesday.valueOf().toString();
    }
    if (content === 'wednesday')
    {
        changeObj.propName = "We";
        changeObj.propValue = this.wednesday.valueOf().toString();
    }
    if (content === 'thursday')
    {
        changeObj.propName = "Th";
        changeObj.propValue = this.thursday.valueOf().toString();
    }
    if (content === 'friday')
    {
        changeObj.propName = "Fr";
        changeObj.propValue = this.friday.valueOf().toString();
    }
    if (content === 'startTime') 
    {
      changeObj.propName = "startTime";
      changeObj.propValue = this.startTime.toLocaleString();
    }
    this.valueChange.emit(changeObj);    
  }
}