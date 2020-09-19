import { QuestionDetailsComponent } from './Question/question-details/question-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SearchQuestionComponent } from './Question/search-question/search-question.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
