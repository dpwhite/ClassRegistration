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
}