import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Student } from './student';
import { STUDENT } from './mock-student';

@Injectable()
export class StudentService {
    getStudent(): Student {
        return STUDENT;
    }
}