import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';

@Component ({
    selector: 'course-list',
    templateUrl: './courses.component.html',
    providers: [CourseService]
})

export class CoursesComponent implements OnInit {
    constructor(private courseService: CourseService) {}
    private newCourse: Course;
    courses: Course[];

    getCourses(): void {
        this.courses = this.courseService.getCourses();
        console.log(this.courses);
    }

    addCourse(): void {        
        this.newCourse = {id: 1, name:'Spanish', duration:'50mins', startTime: '1:10p', days: 'Mo, We, Fr'};
        this.courses.push(this.newCourse);
    }

    ngOnInit(): void {
        this.getCourses();
    }
}