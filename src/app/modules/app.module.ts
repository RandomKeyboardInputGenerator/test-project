import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MaterialModule, MdDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../services/in-memory-data.service';
import { DbService }  from '../services/db.service';

import { AppComponent } from '../components/app.component';
import { AllQuestionsBaseComponent } from '../components/all-questions-base.component';
import { SingleQuestionBaseComponent } from '../components/single-question-base.component';
import { ProfileBaseModalComponent } from '../components/profile-base-modal.component';

import { LimitComToPipe } from '../pipes/limit-com-to.pipe';
import { AbsPipe } from '../pipes/abs.pipe';
import { LimitQToPipe } from '../pipes/limit-qto.pipe';
import { SearchPipe } from '../pipes/search.pipe';

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
