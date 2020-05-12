import { Injectable } from '@angular/core';
import { GitSearch } from './git-search'
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
    cachedValues: Array<{
          [query: string]: GitSearch
    }> = [];
  constructor() {

   }

   gitSearch = (query: string) => {
      let promose = new Promise((resolve, reject) => {

      })
      return promise;
   }
}
