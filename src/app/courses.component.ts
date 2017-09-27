import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { CourseService } from './course.service';
import { Course } from './course';


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
    closeResult: string;
    courses: Course[];
    course: Course;
    dotw: DaysOfTheWeek;
    modalReference: any;


    constructor(private courseService: CourseService, private modalService: NgbModal) {}
    
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

    open(content: any) {
        this.course = new Course();
        this.dotw = { monday: false, tuesday: false, wednesday: false, thursday: false, friday: false};

        this.closeResult = '';
        this.modalReference = this.modalService.open(content).result.then((result) => {
          if (result === 'add course') {
                this.addCourse();
          }
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    ngOnInit(): void {
        this.getCourses();
        this.course = new Course();
        this.dotw = { monday: false, tuesday: false, wednesday: false, thursday: false, friday: false};

        
    }
}