import { Course } from './course';

export const COURSES: Course[] = [
    { id: 1, name: 'Chemistry', dotw: {monday: true, tuesday: false, wednesday: true, thursday: false, friday: true },  days: 'Mo, We, Fr', startTime: '08:00', duration:'50'}, 
    { id: 2, name: 'Algebra', dotw: {monday: false, tuesday: true, wednesday: false, thursday: true, friday: false }, days: 'Tu, Th', startTime: '08:10', duration:'90'}, 
    { id: 3, name: 'Computer Science', dotw: {monday: true, tuesday: false, wednesday: true, thursday: false, friday: true }, days: 'Mo, We, Fr', startTime: '10:00', duration:'50'}, 
    { id: 4, name: 'History', dotw: {monday: false, tuesday: true, wednesday: false, thursday: true, friday: false }, days: 'Tu, Th', startTime: '10:10', duration:'90'}, 
    { id: 5, name: 'English', dotw: {monday: true, tuesday: false, wednesday: true, thursday: false, friday: true }, days: 'Mo, We, Fr', startTime: '11:00', duration:'50'}    
];