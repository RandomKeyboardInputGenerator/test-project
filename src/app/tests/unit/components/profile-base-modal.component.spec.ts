import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MaterialModule, MdDialogModule } from '@angular/material';

import { AppRoutingModule } from '../../../modules/app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../../../services/in-memory-data.service';

import { AllQuestionsBaseComponent } from '../../../components/all-questions-base.component';
import { SingleQuestionBaseComponent } from '../../../components/single-question-base.component';
import { ProfileBaseModalComponent } from '../../../components/profile-base-modal.component';

import { LimitCommentsByAnswerPipe } from '../../../pipes/limit-comments-by-answer.pipe';
import { AbsPipe } from '../../../pipes/abs.pipe';
import { LimitQuestionsByAuthorPipe } from '../../../pipes/limit-questions-by-author.pipe';
import { SearchPipe } from '../../../pipes/search.pipe';

describe('ProfileBaseModalComponent', () => {
    let component: ProfileBaseModalComponent;
    let fixture: ComponentFixture<ProfileBaseModalComponent>;
    let database = new InMemoryDataService().createDb();
    let data = { 
            'userId': 2, 
            'users': database.authors, 
            'dictionary': database.dictionary, 
            'questions': database.questions 
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AllQuestionsBaseComponent,
                SingleQuestionBaseComponent,
                ProfileBaseModalComponent,
                LimitCommentsByAnswerPipe,
                AbsPipe,
                LimitQuestionsByAuthorPipe,
                SearchPipe
            ],
            imports: [
                FormsModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                MdButtonModule,
                MdCheckboxModule,
                MaterialModule,
                MdDialogModule,
                HttpModule,
                InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 })
            ],
            providers: [
                {provide: APP_BASE_HREF, useValue: '/'},
                {provide: MD_DIALOG_DATA, useValue: data},
                {provide: MdDialogRef, useValue: {}}
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileBaseModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
    
    it('user\'s id should be set to 2', () => {
        expect(component.profileAuthor.id).toBe(2);
    });
});
