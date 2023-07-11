export interface CapacityCard {
    cardHeader: string,
    columnHeaders: string[],
    columnData: string[]
}

export interface StudentCard {
    profilePhoto: string,
    name: string,
    editStudent: string,
    outCard: string[],
    inCard: string[],
    typeCard: string[]
}

export interface ClassOverview {
    class: string;
    firstYear: CalendarYear;
    SecondYear: CalendarYear;
    ThirdYear: CalendarYear;
    FourthYear: CalendarYear;
  }
  
  export interface CalendarYear {
    currentYear: boolean;
    academicYear: string;
    Everett: Campus;
    Spokane: Campus;
    Tricities: Campus;
    Vancouver: Campus;
  }
  
  export interface Campus {
    capacity: number;
    current: number;
    in: number;
    out: number;
  }