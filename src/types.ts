export interface AllCampusOverview {
  everett:   CampusOverview;
  spokane:   CampusOverview;
  tricities: CampusOverview;
  vancouver: CampusOverview;
}

export interface CampusOverview {
  campus:        string;
  clinicalYears: ClinicalYear[];
}

export interface ClinicalYear {
  year:    string;
  current: boolean;
  classes: MSY[];
}

export interface MSY {
  classYear: string;
  capacity: string;
  current:  string;
  in:       string;
  out:      string;
}

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
    id: number;
    img?: string;
    name: string;
    type: string;
    reason?: string;
    academicYear: string;
    departDate: string;
    departCampus: string;
    returnDate: string;
    returnCampus: string;
    notes?: string;
}

export interface History {
  students: Student[]
}

export interface StudentList {
  names: string[]
}
