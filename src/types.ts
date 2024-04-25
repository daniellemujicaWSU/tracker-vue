// export interface AllCampusOverview {
//   everett:   CampusOverview;
//   spokane:   CampusOverview;
//   tricities: CampusOverview;
//   vancouver: CampusOverview;
// }

// export interface CampusOverview {
//   campus:        string;
//   clinicalYears: ClinicalYear[];
// }

// export interface ClinicalYear {
//   year:    string;
//   current: boolean;
//   classes: MSY[];
// }

// export interface MSY {
//   classYear: string;
//   capacity: string;
//   current:  string;
//   in:       string;
//   out:      string;
// }

// export interface ClassOverview {
//     class: string;
//     ms1: CalendarYear;
//     ms2: CalendarYear;
//     ms3: CalendarYear;
//     ms4: CalendarYear;
//   }
  
// export interface CalendarYear {
//     currentYear: boolean;
//     academicYear: string;
//     campuses: Campus[];
//   }
  
// export interface Campus {
//     campus: string;
//     capacity: number;
//     current: number;
//     in: number;
//     out: number;
//     students: Student[];
// }
  
// export interface Student {
//     id: number;
//     img?: string;
//     name: string;
//     type: string;
//     reason?: string;
//     curriculumYear: string;
//     departDate: string;
//     departCampus: string;
//     returnDate: string;
//     returnCampus: string;
//     notes?: string;
// }

export interface CampusOverview {
    campus:        string;
    clinicalYears: ClinicalYear[];
}

export interface ClinicalYear {
    year:    string;
    classes: Class[];
}

export interface Class {
  overview: Overview;
}
export interface Overview {
    classYear: number;
    capacity:  number;
    current:   number;
    in:        number;
    out:       number;
}

export interface History {
  students: Student[]
}

export interface StudentList {
  names: string[]
}


export interface ClassOverview {
    class: number;
    MS1:   MSY;
    MS2:   MSY;
    MS3:   MSY;
    MS4:   MSY;
}

export interface MSY {
    academicYear: string;
    campuses: Campuses;
}

export interface Campuses {
    spokane:   Campus;
    Campus:   Campus;
    triCities: Campus;
    vancouver: Campus;
}

export interface Campus {
    overview: Overview;
    students: Student[];
}

export interface Overview {
    classYear: number;
    capacity:  number;
    current:   number;
    in:        number;
    out:       number;
}

export interface Student {
    name:           string;
    img?:           string;
    departDate:     string;
    departCampus:   string;
    returnDate:     string;
    returnCampus:   string;
    reason:         string;
    type:           string;
    curriculumYear: string;
}