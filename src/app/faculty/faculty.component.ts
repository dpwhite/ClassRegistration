import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FacultyContent } from './faculty.modal';

@Component ({
    selector: 'faculty-list',
    templateUrl: './faculty.component.html'
})

export class FacultyComponent {
    myCount: number = 10;
    subscription: any;

    countChange(event: any) {
      // this.myCount = event;
    }

    constructor(private modalService: NgbModal) {}

    open() {      
        const modalRef = this.modalService.open(FacultyContent);
        modalRef.componentInstance.count = this.myCount;
        this.subscription = modalRef.componentInstance.change.subscribe((event: any) => {
          this.myCount = event;
        })
      }
      
      ngOnDestroy() {
        if(this.subscription) {
          this.subscription.unsubscribe();
        }
      }
}