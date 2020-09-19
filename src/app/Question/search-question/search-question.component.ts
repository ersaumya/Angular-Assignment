import { questions } from './../../Shared/mock-data/questions.mock';
import { QuestionInterface } from './../../Shared/types/question-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-question',
  templateUrl: './search-question.component.html',
  styleUrls: ['./search-question.component.css'],
})
export class SearchQuestionComponent implements OnInit {
  searchString = '';
  searchResult: QuestionInterface[];
  constructor() {}

  ngOnInit(): void {
     this.searchResult = [];
  }

  searchQuestion() {
    this.searchResult = questions.filter((val) =>
      val.questionText
        .toLocaleLowerCase()
        .includes(this.searchString.toLocaleLowerCase())
    );
    console.log(this.searchResult);
  }
}
