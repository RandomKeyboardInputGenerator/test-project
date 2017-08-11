import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ProfileBaseModalComponent } from '../profile-base-modal/profile-base-modal.component';

@Component({
    selector: 'app-single-question-base',
    templateUrl: './single-question-base.component.html',
    styleUrls: ['./single-question-base.component.css']
})
export class SingleQuestionBaseComponent implements OnInit {

    constructor(public dialog: MdDialog) { }

    ngOnInit() {
    }

    // Show modal dialog with injected data
    openModal(name: string) {
        this.dialog.open(ProfileBaseModalComponent, {
            data: name
        });
    }
}
