import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  public capitalize(word): string {
    // return first letter Uppercase, and then add the rest
    return word.charAt(0).toUpperCase() + word.substring(1);
  }

}
