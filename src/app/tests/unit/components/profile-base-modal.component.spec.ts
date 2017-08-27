import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBaseModalComponent } from '../../../components/profile-base-modal.component';

describe('ProfileBaseModalComponent', () => {
    let component: ProfileBaseModalComponent;
    let fixture: ComponentFixture<ProfileBaseModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileBaseModalComponent]
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
});
