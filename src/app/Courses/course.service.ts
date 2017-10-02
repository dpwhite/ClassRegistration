import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Course } from './course';
import { COURSES } from './mock-courses';

@Injectable()
export class CourseService {
    getCourses(): Course[] {
        return COURSES;
    }

    getCourse(id: number): Course {
        var course: Course;
        COURSES.forEach(function(item) {
            if (item.id === id) {
                course = item;
                var duration = parseInt(item.duration);
                course.duration = duration.toString();
            }
        });
        return course;
    }
}