import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';

import { CoursesComponent } from './courses.component';
import { StudentsComponent } from './students.component';
import { FacultyComponent } from './faculty.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'faculty', component: FacultyComponent }

];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, CoursesComponent, StudentsComponent, FacultyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
