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

    addCourse(newCourse: Course, days: DaysOfTheWeek): void {        
        // var tempCourse = {id: 1, name:'Spanish', duration:'50mins', startTime: '1:10p', days: 'Mo, We, Fr'};
        // this.courses.push(tempCourse);
        var dtw = days.monday;
        if (days.monday) {
            newCourse.days = "Mo,";
        }
        if (days.tuesday) {
            newCourse.days += "Tu,";
        }
        if (days.wednesday) {
            newCourse.days += "We,";            
        }
        if (days.thursday) {
            newCourse.days += "Th,";
        }
        if (days.friday) {
            newCourse.days += "Fr,";
        }

        console.log(newCourse.days.charAt(newCourse.days.length-1));
        newCourse.days.replace(newCourse.days.charAt(newCourse.days.length-1), ""); 
        this.courses.push(newCourse);
        this.modalReference.close();
    }

    open(content: any) {
        this.course = new Course();

        this.closeResult = '';
        this.modalReference = this.modalService.open(content).result.then((result) => {
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