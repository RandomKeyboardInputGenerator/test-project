import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MaterialModule, MdDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { DbService }  from './db.service';

import { AppComponent } from './app.component';
import { AllQuestionsBaseComponent } from './all-questions-base/all-questions-base.component';
import { SingleQuestionBaseComponent } from './single-question-base/single-question-base.component';
import { ProfileBaseModalComponent } from './profile-base-modal/profile-base-modal.component';

import { LimitComToPipe } from './limit-com-to.pipe';
import { AbsPipe } from './abs.pipe';
import { LimitQToPipe } from './limit-qto.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
    declarations: [
        AppComponent,
        AllQuestionsBaseComponent,
        SingleQuestionBaseComponent,
        ProfileBaseModalComponent,
        LimitComToPipe,
        AbsPipe,
        LimitQToPipe,
        SearchPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule,
        MaterialModule,
        MdDialogModule,
        HttpModule,
        // Simulate connection to Db with delay
        InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
    ],
    entryComponents: [
        ProfileBaseModalComponent
    ],
    providers: [DbService],
    bootstrap: [AppComponent]
})
export class AppModule { }
