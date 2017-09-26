import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';

import { ClassesComponent } from './classes.component';
import { StudentsComponent } from './students.component';
import { FacultyComponent } from './faculty.component';

const routes: Routes = [
  { path: 'classes', component: ClassesComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'faculty', component: FacultyComponent }

];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, ClassesComponent, StudentsComponent, FacultyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
