import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms'; 

import { AppComponent }  from './app.component';
import { CoursesComponent, CourseModalContent } from './courses/courses.component';
import { StudentsComponent, StudentModalContent } from './students/students.component';
import { FacultyComponent } from './faculty/faculty.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'faculty', component: FacultyComponent }

];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes), NgbModule.forRoot(), FormsModule ],
  declarations: [ AppComponent, CoursesComponent, StudentsComponent, FacultyComponent, StudentModalContent, CourseModalContent ],
  entryComponents: [StudentModalContent, CourseModalContent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
