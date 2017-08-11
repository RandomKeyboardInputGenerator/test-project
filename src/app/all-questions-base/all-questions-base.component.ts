import { Component, OnInit, HostListener  } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ProfileBaseModalComponent } from '../profile-base-modal/profile-base-modal.component';

@Component({
    selector: 'app-all-questions-base',
    templateUrl: './all-questions-base.component.html',
    styleUrls: ['./all-questions-base.component.css']
})
export class AllQuestionsBaseComponent implements OnInit {
    questions: string = 'my';
    selected: string = 'recent';
    
    // For tests only - the number of answers
    count = [3, 6, 0];
    
    // Listen for resizing window
    @HostListener('window:resize', ['$event']) onResize(event: any) {
        // In phone and tablet mode show the count number tab of hiden comments (<830px)
        if (event.target.innerWidth < 830) {
            this.count = [6, 9, 2];
        }
        // In full view mode hide the count number tab
        else {
            this.count = [3, 6, 0];
        }
    }
    constructor(public dialog: MdDialog) { }

    ngOnInit() {
    }

    // Show modal dialog with injected data
    openModal(name: string) {
        this.dialog.open(ProfileBaseModalComponent, {
            data: name
        });
    }
    
    // Sort trigger: recent or hot
    click(event: any): void {
        this.selected = event.target.innerText;
    }
}
