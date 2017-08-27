import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuestionBaseComponent } from '../../../components/single-question-base.component';

describe('SingleQuestionBaseComponent', () => {
    let component: SingleQuestionBaseComponent;
    let fixture: ComponentFixture<SingleQuestionBaseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SingleQuestionBaseComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SingleQuestionBaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
