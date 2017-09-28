# Angular QuickStart Source

This repository holds the TypeScript source code of the [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html),
the foundation for most of the documentation samples and potentially a good starting point for your application.

This project serves as a demo to help others get started with Angular.  I will attempt to document what I have learned in the hope that it serves as a point of reference for others who are attempting to use similar tools.  

This is a demo Class Registration site.  There are 3 tabs: Courses, Students, Faculty.  

The courses tab will allow you to view a list of current course offerings, add/update/delete a course, assign students to a course, remove students from a course, and assign or remove a teacher.  

The students tab will allow you to add/update/delete a student.  Add/remove a course for a specific student.  You will also be able to display a list of courses assigned to 

The faculty page will allow you to add/update/delete faculty members, assign/remove faculty to courses, and view a list of courses assigned to a faculty member.  


# 9-28-17
So far I have been fairly successful with using ng-bootstrap.  My application currently uses the modal component.  
I figured out how to pass content into a modal dialog.  
The key is to pass in your content to the ModalService object.  Currently I am only able to pass in intrinsic values and not a complex object like a class. Hopefully I will resolve this issue. 


