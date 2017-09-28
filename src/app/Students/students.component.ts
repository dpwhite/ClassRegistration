import {Component, Input, OnInit} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { StudentService } from './student.service';
import { Student } from './student';


@Component({
    selector: 'ngbd-modal-content',
    providers: [StudentService],
    templateUrl:  './student.modal.content.html'
  })

  export class NgbdModalContent  implements OnInit{
    @Input() firstName: string;
    @Input() lastName: string;
    @Input() classYear: string; 
    student: Student;

    constructor(public activeModal: NgbActiveModal, private studentService: StudentService) {
    }

    getStudent(): void {
        this.student = this.studentService.getStudent();
    }

    ngOnInit(): void {
        this.getStudent();
        this.firstName = this.student.firstName;
        this.lastName = this.student.lastName;
        this.classYear = this.student.classYear;

    }
  }

@Component ({
    selector: 'student-list',
    templateUrl: './students.component.html'
})

export class StudentsComponent {
    constructor(private modalService: NgbModal) {}
    
      open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.firstName = 'Durward';
        modalRef.componentInstance.lastName = 'White';
        modalRef.componentInstance.classYear = 'Sophomore';
      }
}