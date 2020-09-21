import { QuestionDetailsComponent } from './question-details/question-details.component';
import { SearchQuestionComponent } from './search-question/search-question.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Shared/auth.guard';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
 
  {
    path: 'search',
    component: SearchQuestionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'details/:id',
    component: QuestionDetailsComponent,
    canActivate: [AuthGuard]
  },
];


@NgModule({
  declarations: [QuestionDetailsComponent, SearchQuestionComponent],
  imports: [CommonModule,FormsModule, RouterModule.forChild(routes)]
})
export class QuestionModule {}
