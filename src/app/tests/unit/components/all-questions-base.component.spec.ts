import { async, fakeAsync, tick, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MaterialModule, MdDialogModule } from '@angular/material';

import { AppRoutingModule } from '../../../modules/app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../../../services/in-memory-data.service';
import { DbService }  from '../../../services/db.service';

import { AllQuestionsBaseComponent } from '../../../components/all-questions-base.component';
import { SingleQuestionBaseComponent } from '../../../components/single-question-base.component';
import { ProfileBaseModalComponent } from '../../../components/profile-base-modal.component';

import { LimitCommentsByAnswerPipe } from '../../../pipes/limit-comments-by-answer.pipe';
import { AbsPipe } from '../../../pipes/abs.pipe';
import { LimitQuestionsByAuthorPipe } from '../../../pipes/limit-questions-by-author.pipe';
import { SearchPipe } from '../../../pipes/search.pipe';

class MockDbService {
    service = new InMemoryDataService();
    db = this.service.createDb();
    testDictionary = this.db.dictionary;
    testAuthors = this.db.authors;
    testQuestions = this.db.questions;
    testComments = this.db.comments;
    testAvatars = this.db.avatars;

    getDictionary = jasmine.createSpy('getDictionary').and.callFake(
        () => Promise
            .resolve(true)
            .then(() => Object.assign({}, this.testDictionary))
    );

    getQuestions = jasmine.createSpy('getQuestions').and.callFake(
        () => Promise
            .resolve(true)
            .then(() => Object.assign({}, this.testQuestions))
    );

    getCommments = jasmine.createSpy('getCommments').and.callFake(
        () => Promise
            .resolve(true)
            .then(() => Object.assign({}, this.testComments))
    );

    getAvatars = jasmine.createSpy('getAvatars').and.callFake(
        () => Promise
            .resolve(true)
            .then(() => Object.assign({}, this.testAvatars))
    );

    getUsers = jasmine.createSpy('getUsers').and.callFake(
        () => Promise
            .resolve(true)
            .then(() => Object.assign({}, this.testAuthors))
    );
}

describe('AllQuestionsBaseComponent', () => {
    let component: AllQuestionsBaseComponent;
    let fixture: ComponentFixture<AllQuestionsBaseComponent>;

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
                { provide: APP_BASE_HREF, useValue: '/' }

            ]
        })
        .overrideComponent(AllQuestionsBaseComponent, {
            set: {
                providers: [
                    { provide: DbService, useClass: MockDbService }
                ]
            }
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AllQuestionsBaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
    
    it('before starting ngOnInit() the data should not be loaded', () => {
        expect(component.appSettings.isDataLoaded()).toBeFalsy();
    });
    
    it('after starting ngOnInit() the data should be loaded', fakeAsync(() => {
        component.ngOnInit();
        tick();
        expect(component.appSettings.isDataLoaded()).toBeTruthy();
    }));
});
