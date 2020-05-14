import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service'
import { GitSearch } from '../git-search'

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch;
  searchQuery: string;
  constructor(private GitSearchService: GitSearchService) { }

  ngOnInit(): void {
    // change the 'angular' value to '&&&&&' to check the error
    this.GitSearchService.gitSearch('angular').then( (response) => {
      // console.log(response)
      // alert("Total Libraries Found:" + response.total_count);
      this.searchResults = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

  gitSearch = (query: string) => {
    // Let's copy the method from the ngOnInit() function, and change 'angular' to query
    this.GitSearchService.gitSearch(query).then((response) => {
      this.searchResults = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

}
