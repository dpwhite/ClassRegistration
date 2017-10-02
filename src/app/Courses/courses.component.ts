import { Component, Input, OnInit } from '@angular/core';
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


export class DaysOfTheWeek {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
}

@Component ({
    selector: 'course-list',
    templateUrl: './courses.component.html',
    providers: [CourseService]
})

export class CoursesComponent implements OnInit {
  courses: Course[];
  course: Course;
  dotw: DaysOfTheWeek;

  constructor(private modalService: NgbModal, private courseService: CourseService) {}
  
    open() {      
      const modalRef = this.modalService.open(CourseModalContent);
      modalRef.componentInstance.name = 'World';
    }

    edit(content: Course) {
      console.log(content);
      
      const modalRef = this.modalService.open(CourseModalContent);
      var course = this.courseService.getCourse(content.id);
      modalRef.componentInstance.name = course.name;
      modalRef.componentInstance.duration = course.duration;
      modalRef.componentInstance.monday = course.dotw.monday;
      modalRef.componentInstance.tuesday = course.dotw.tuesday;
      modalRef.componentInstance.wednesday = course.dotw.wednesday;
      modalRef.componentInstance.thursday = course.dotw.thursday;
      modalRef.componentInstance.friday = course.dotw.friday;
      modalRef.componentInstance.startTime = course.startTime;
      modalRef.result.then((result) => {
        if (result === 'Save')
          course.name = content.name;
      });
    }

  getCourses(): void {
    this.courses = this.courseService.getCourses();
    console.log(this.courses);
  }

  addCourse(): void {        
    // var tempCourse = {id: 1, name:'Spanish', duration:'50mins', startTime: '1:10p', days: 'Mo, We, Fr'};
    // this.courses.push(tempCourse);
    var dtw = this.dotw.monday;
    if (this.dotw.monday) {
        this.course.days = "Mo,";
    }
    if (this.dotw.tuesday) {
        this.course.days += "Tu,";
    }
    if (this.dotw.wednesday) {
        this.course.days += "We,";            
    }
    if (this.dotw.thursday) {
        this.course.days += "Th,";
    }
    if (this.dotw.friday) {
        this.course.days += "Fr,";
    }
    this.course.duration += "mins";

    this.course.days = this.course.days.slice(0, -1);
    this.courses.push(this.course);       
    
}

  ngOnInit(): void {
    this.getCourses();
    this.course = new Course();
    this.dotw = { monday: false, tuesday: false, wednesday: false, thursday: false, friday: false};      
  }
}