import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MaterialModule, MdDialogModule } from '@angular/material';

import { AppRoutingModule } from '../../../modules/app-routing.module';

import { LimitCommentsByAnswerPipe } from '../../../pipes/limit-comments-by-answer.pipe';
import { AbsPipe } from '../../../pipes/abs.pipe';
import { LimitQuestionsByAuthorPipe } from '../../../pipes/limit-questions-by-author.pipe';
import { SearchPipe } from '../../../pipes/search.pipe';

import { AppComponent } from '../../../components/app.component';
import { AllQuestionsBaseComponent } from '../../../components/all-questions-base.component';
import { SingleQuestionBaseComponent } from '../../../components/single-question-base.component';
import { ProfileBaseModalComponent } from '../../../components/profile-base-modal.component';

import { DbService } from '../../../services/db.service';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
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
                RouterTestingModule,
                HttpModule
            ],
            providers: [DbService, { provide: APP_BASE_HREF, useValue: '/' }]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
