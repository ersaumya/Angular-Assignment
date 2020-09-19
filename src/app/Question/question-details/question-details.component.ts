import { questions } from './../../Shared/mock-data/questions.mock';
import { QuestionInterface } from './../../Shared/types/question-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css'],
})
export class QuestionDetailsComponent implements OnInit {
  questionDetailId: QuestionInterface;
  constructor(private route: ActivatedRoute, private router: Router) {
    const getParamsId: string = this.route.snapshot.paramMap.get('id');
    if (getParamsId > questions.length.toString()) {
      this.router.navigate(['/search']);
    } else {
      this.questionDetailId = questions[this.route.snapshot.paramMap.get('id')];
    }
  }

  

  ngOnInit(): void {
     
  }
}
