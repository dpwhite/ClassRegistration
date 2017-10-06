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
        // this.subscription = modalRef.componentInstance.durationChange.subscribe((event: any) => {
        //     this.duration = event;
        //     content.duration = event;
        // })
        this.courseSubscription = modalRef.componentInstance.valueChange.subscribe((event: any) => {
            this.saveChanges(event, content);            
        });

    //      var course = this.courseService.getCourse(content.id);
        modalRef.componentInstance.name = content.name;
        modalRef.componentInstance.duration = content.duration;
        modalRef.componentInstance.monday = content.dotw.monday;
        modalRef.componentInstance.tuesday = content.dotw.tuesday;
        modalRef.componentInstance.wednesday = content.dotw.wednesday;
        modalRef.componentInstance.thursday = content.dotw.thursday;
        modalRef.componentInstance.friday = content.dotw.friday;
        modalRef.componentInstance.startTime = content.startTime;
        modalRef.componentInstance.teacher = content.teacher;
        modalRef.result.then((result) => {
            if (result === 'Save') {
                this.reOrderDays(content);
            }
            }, (reason) => {
            console.log(reason);
            });
    }

    getCourses(): void {
        this.courses = this.courseService.getCourses();
    }

    addCourse(): void {
    // var tempCourse = {id: 1, name:'Spanish', duration:'50mins', startTime: '1:10p', days: 'Mo, We, Fr'};
    // this.courses.push(tempCourse);
        this.course = new Course();
        const modalRef = this.modalService.open(CourseModalContent);
        this.courseSubscription = modalRef.componentInstance.valueChange.subscribe((event: any) => {
        this.saveChanges(event, this.course);
        }
        modalRef.result.then((result) => {
        if (result === 'Save') {
            this.reOrderDays(this.course);
            this.courses.push(this.course);
        }
        }, (reason) => {
        console.log(reason);
        });

    }

    saveChanges(event: any, course: Course): void {
    switch(event.propName) {
        case "name":
            course.name = event.propValue;
            break;
        case "Mo":
            if (event.propValue === 'true') {
                course.dotw.monday = true;
            }
            else {
                course.dotw.monday = false;
            }
            break;
        case "Tu":
            if (event.propValue === 'true') {
                course.dotw.tuesday = true;
            }
            else {
                course.dotw.tuesday = false;
            }
            break;
        case "We":
            if (event.propValue === "true") {
                course.dotw.wednesday = true;
            }
            else {
                course.dotw.wednesday = false;
            }
            break;
        case "Th":
            if (event.propValue === 'true') {
                course.dotw.thursday = true;
            }
            else {
                course.dotw.thursday = false;
            }
            break;
        case "Fr":
            if (event.propValue === 'true') {
                course.dotw.friday = true;
            }
            else {
                course.dotw.friday = false;
            }
            break;
        case "startTime":
            course.startTime = event.propValue;
            break;
        case "duration":
            course.duration = event.propValue;
            break;
        case "teacher":
            course.teacher = event.propValue;
            break;
        }
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