import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MaterialModule, MdDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AllQuestionsBaseComponent } from './all-questions-base/all-questions-base.component';
import { SingleQuestionBaseComponent } from './single-question-base/single-question-base.component';
import { ProfileBaseComponent } from './profile-base/profile-base.component';
import { ProfileBaseModalComponent } from './profile-base-modal/profile-base-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        AllQuestionsBaseComponent,
        SingleQuestionBaseComponent,
        ProfileBaseComponent,
        IndexComponent,
        ProfileBaseModalComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule,
        MaterialModule,
        MdDialogModule
    ],
    entryComponents: [
        ProfileBaseModalComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
