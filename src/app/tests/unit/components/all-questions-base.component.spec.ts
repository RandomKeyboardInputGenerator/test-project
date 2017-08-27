import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuestionsBaseComponent } from '../../../components/all-questions-base.component';

describe('AllQuestionsBaseComponent', () => {
    let component: AllQuestionsBaseComponent;
    let fixture: ComponentFixture<AllQuestionsBaseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AllQuestionsBaseComponent]
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
});
