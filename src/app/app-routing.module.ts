import { QuestionDetailsComponent } from './Question/question-details/question-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SearchQuestionComponent } from './Question/search-question/search-question.component';
import { AuthGuard } from './Shared/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'question',
    loadChildren: () =>import('./Question/question.module').then((m) => m.QuestionModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
