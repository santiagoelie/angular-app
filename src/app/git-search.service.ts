import { Injectable } from '@angular/core';
import { GitSearch } from './git-search';
import { promise } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/toPromise'; -> this one is deprecated not available anymore

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
    cachedValues: Array<{
          [query: string]: GitSearch
    }> = [];
  constructor(private http: HttpClient) {

   }

   gitSearch = (query: string): Promise<GitSearch> => {
      const promise = new Promise<GitSearch>((resolve, reject) => {
          if (this.cachedValues[query]) {
              resolve(this.cachedValues[query]);
          } else {
              this.http.get('https://api.github.com/search/repositories?q=' + query)
              .toPromise()
              .then( (response) => {
                  resolve(response as GitSearch);
              }, (error) => {
                  reject(error);
              });
          }
      });
      return promise;
   }
}
