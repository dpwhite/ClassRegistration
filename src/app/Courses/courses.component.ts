import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { CourseService } from './course.service';
import { Course } from './course';
import { CourseModalContent } from './course.modal';

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
  duration: number = 50;
  subscription: any;
  courseSubscription: any;
  
  // durationChange(event: any) {
  //   // this.duration = event;
  // }

  // courseChange(event: any){}




  constructor(private modalService: NgbModal, private courseService: CourseService) {}
  
    reOrderDays(course: Course): void {
        course.days = "";
        if (course.dotw.monday === true) {
            course.days += "Mo, ";
        }
        if (course.dotw.tuesday === true) {
            course.days += "Tu, ";        
        }
        if (course.dotw.wednesday === true) {
            course.days += "We, ";
        }
        if (course.dotw.thursday === true) {
            course.days += "Th, ";
        }
        if (course.dotw.friday === true) {
            course.days += "Fr, "
        }

        course.days = course.days.slice(0, course.days.lastIndexOf(', '));
    }

    open() {      
      const modalRef = this.modalService.open(CourseModalContent);     
    }

    edit(content: Course) {     
        const modalRef = this.modalService.open(CourseModalContent);
        this.subscription = modalRef.componentInstance.durationChange.subscribe((event: any) => {
        this.duration = event;
        content.duration = event;
        })
        this.courseSubscription = modalRef.componentInstance.valueChange.subscribe((event: any) => {
            switch(event.propName) {
            case "name":
                content.name = event.propValue;
                break;
            case "Mo":
                if (event.propValue === 'true') {
                    content.dotw.monday = true;
                }
                else {
                    content.dotw.monday = false;                
                }
                break;
            case "Tu":
                if (event.propValue === 'true') {
                    content.dotw.tuesday = true;             
                }
                else {
                    content.dotw.tuesday = false;                             
                }
                break;
            case "We":
                if (event.propValue === "true") {
                    content.dotw.wednesday = true;
                }
                else {
                    content.dotw.wednesday = false;                
                }
                break;
            case "Th": 
                if (event.propValue === 'true') {
                    content.dotw.thursday = true;
                }
                else {
                    content.dotw.thursday = false;                
                }
                break;
            case "Fr":
                if (event.propValue === 'true') {
                    content.dotw.friday = true;
                }
                else {
                    content.dotw.friday = false;                
                }
                break;
            case "startTime":
                content.startTime = event.propValue;
                break;
            case "duration": 
                content.duration = event.propValue;
                break;
            }
        })
      
//      var course = this.courseService.getCourse(content.id);
        modalRef.componentInstance.name = content.name;
        modalRef.componentInstance.duration = content.duration;
        modalRef.componentInstance.monday = content.dotw.monday;
        modalRef.componentInstance.tuesday = content.dotw.tuesday;
        modalRef.componentInstance.wednesday = content.dotw.wednesday;
        modalRef.componentInstance.thursday = content.dotw.thursday;
        modalRef.componentInstance.friday = content.dotw.friday;
        modalRef.componentInstance.startTime = content.startTime;
        modalRef.result.then((result) => {
            if (result === 'Save') {
                this.reOrderDays(content);
            }, 
            function(error) {
                console.log(error);
            }
        );
    }

  getCourses(): void {
    this.courses = this.courseService.getCourses();
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

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }  
}