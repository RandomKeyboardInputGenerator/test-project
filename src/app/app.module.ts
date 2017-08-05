import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AllQuestionsBaseComponent } from './all-questions-base/all-questions-base.component';
import { SingleQuestionBaseComponent } from './single-question-base/single-question-base.component';
import { ProfileBaseComponent } from './profile-base/profile-base.component';

@NgModule({
    declarations: [
        AppComponent,
        AllQuestionsBaseComponent,
        SingleQuestionBaseComponent,
        ProfileBaseComponent,
        IndexComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
