import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CsiiDateHelperService {

  constructor(){}

  numberOfdaysFromCurrentDate(dateSent: Date): number {
    const currentDate = new Date();
    dateSent = new Date(dateSent);
    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
      - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
  }

  calculateDaysBetweenDates(d1: string | Date, d2: string | Date): number {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    return Math.floor((Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())
      - Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate())) / (1000 * 60 * 60 * 24));
  }

  dateDifferenceString(startingDate : string | Date, endingDate: string | Date) {
    let startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
    if (!endingDate) {
      endingDate = new Date().toISOString().substr(0, 10);
    }
    let endDate = new Date(endingDate);
    if (startDate > endDate) {
      const swap = startDate;
      startDate = endDate;
      endDate = swap;
    }
    const startYear = startDate.getFullYear();
    const february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
    const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let yearDiff = endDate.getFullYear() - startYear;
    let monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    let dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
      if (monthDiff > 0) {
        monthDiff--;
      } else {
        yearDiff--;
        monthDiff = 11;
      }
      dayDiff += daysInMonth[startDate.getMonth()];
    }
    let period = '';
    if (yearDiff !== 0) {
      period = yearDiff + ' Years, ';
    }

    if (monthDiff !== 0) {
      period = period + monthDiff + ' Months, ';
    }

    if (dayDiff !== 0) {
      period = period + dayDiff + ' Days ';
    }
    return period;
  }

  isPastDate(val: any): boolean {
    const reqDate = new Date(val);
    const today = new Date();
    if (reqDate < today) {
      return true;
    } else {
      return false;
    }
  }


  isFutureDate(val: any): boolean {
    const reqDate = new Date(val);
    const today = new Date();
    if (reqDate.getTime() > today.getTime()) {
      return true;
    } else {
      return false;
    }
  }

  calculateAge(birthday: any) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
    // HAPPY BIRTHDAY = birthday
  }
}
