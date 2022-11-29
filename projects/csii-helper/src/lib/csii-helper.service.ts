import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsiiHelperService {

  constructor() { }

  isEmpty(s: any): boolean {
    if (
      s === undefined ||
      s === null ||
      s === 'undefined' ||
      s.toString().trim() === ''
    ) {
      return true;
    }
    return false;
  }

  validateEmail(email: string) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  disableSpaceBar(event: KeyboardEvent): boolean {
    if (event.code === 'Space') {
      return false;
    }
    return true;
  }

  isValidNumber(num: any) {
    return /^[0-9]+$/.test(num);
  }

  validate10DigitNumberRegex(num: string) {
    return num.match(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/);
  }


  calculatePercentage(num: number, total: number, toFixed?: number): number {
    if(this.isEmpty(toFixed)){
      toFixed = 2;
    }
    const percentage = (num / total) * 100;
    if (percentage && percentage > 0) {
      return Number(percentage.toFixed(toFixed));
    } else {
      return 0;
    }
  }

  formatBytes(bytes: number, decimals = 2): string {
    if (bytes === 0) { return '0 Bytes'; }
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

changeToSentenceCase(data: string): string {
  return data.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, event => event.toUpperCase());
}

changeToTitleCase(data: string): string {
  return data.replace(/\b\w/g, event => event.toUpperCase());
}

changeToLowerCase(data: string): string {
  return data.toLowerCase();
}

validateNumberLength(number: any, length: number) {
  const num: string = number.toString();
  const isSpace = num.indexOf(' ') >= 0;
  if (isSpace) {
   throw new Error("Found Spaces in the number while validating number length");
  } else {
    const numberLength = num.length;
    if (numberLength === length) {
      return true;
    } else {
      return false;
    }
  }
}

}
