import {Component, Input, OnInit} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { StudentService } from './student.service';
import { Student } from './student';

@Component({
    selector: 'ngbd-modal-content',
    providers: [StudentService],
    template: `
      <div class="modal-header">
        <h4 class="modal-title">Hi there!</h4>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Hello, {{firstName}}</p>
        <p>{{lastName}}</p>
        <p>{{classYear}}</p>
      </div>
      
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
      </div>
    `
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