import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchQuestionComponent } from './Question/search-question/search-question.component';
import { QuestionDetailsComponent } from './Question/question-details/question-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchQuestionComponent,
    QuestionDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
