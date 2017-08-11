import { Component, OnInit, Input, Inject, Optional } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
    selector: 'app-profile-base-modal',
    templateUrl: './profile-base-modal.component.html',
    styleUrls: ['./profile-base-modal.component.css']
})
export class ProfileBaseModalComponent implements OnInit {
    data: string = '';

    constructor(
        @Optional() @Inject(MD_DIALOG_DATA) private dialogData: any,
        public dialogRef: MdDialogRef<ProfileBaseModalComponent>
    ) { }

    ngOnInit() {
        // Write injected data to local variable
        this.data = this.dialogData;
    }

    closeModal(): void {
        this.dialogRef.close();
    }
}
