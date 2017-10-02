import { Course } from './course';

export const COURSES: Course[] = [
    { id: 1, name: 'Chemistry', dotw: {monday: true, tuesday: false, wednesday: true, thursday: false, friday: true },  days: 'Mo, We, Fr', startTime: '8:00a', duration:'50mins'}, 
    { id: 2, name: 'Algebra', dotw: {monday: false, tuesday: true, wednesday: false, thursday: true, friday: false }, days: 'Tu, Th', startTime: '8:10a', duration:'90mins'}, 
    { id: 3, name: 'Computer Science', dotw: {monday: true, tuesday: false, wednesday: true, thursday: false, friday: true }, days: 'Mo, We, Fr', startTime: '10:00a', duration:'50mins'}, 
    { id: 4, name: 'History', dotw: {monday: false, tuesday: true, wednesday: false, thursday: true, friday: false }, days: 'Tu, Th', startTime: '10:10a', duration:'90mins'}, 
    { id: 5, name: 'English', dotw: {monday: true, tuesday: false, wednesday: true, thursday: false, friday: true }, days: 'Mo, We, Fr', startTime: '11:00a', duration:'50mins'}    
];