export class WeekDays {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
}
export class Course {
    id: number;
    name: string;
    days: string;
    dotw: WeekDays;
    startTime: string;
    duration: string;
}