export interface ClassOverview {
    class: string;
    ms1: CalendarYear;
    ms2: CalendarYear;
    ms3: CalendarYear;
    ms4: CalendarYear;
  }
  
export interface CalendarYear {
    currentYear: boolean;
    academicYear: string;
    campuses: Campus[];
  }
  
export interface Campus {
    campus: string;
    capacity: number;
    current: number;
    in: number;
    out: number;
    students: Student[];
}
  
export interface Student {
    img?: string,
    name: string;
    out: StudentDates;
    in: StudentDates;
    type: string;
}
  
export interface StudentDates {
    date: string;
    campus: string;
}
  