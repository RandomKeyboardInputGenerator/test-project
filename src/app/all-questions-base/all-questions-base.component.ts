import { Component, OnInit, HostListener  } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ProfileBaseModalComponent } from '../profile-base-modal/profile-base-modal.component';

import { DbService }  from '../db.service';

import { LimitQToPipe } from '../limit-qto.pipe';
import { SearchPipe } from '../search.pipe';

import _ from "lodash"

@Component({
    selector: 'app-all-questions-base',
    templateUrl: './all-questions-base.component.html',
    styleUrls: ['./all-questions-base.component.css']
})
export class AllQuestionsBaseComponent implements OnInit {
    questions: string = 'all'; // radio btn
    selected: string = 'recent'; // another trigger
    searchQuery: string = ''; // bufor for searching query connected with search input
    term: string = '';  // This one is sent to Search Pipe when user clicks search btn
    loading = { text: "Please wait. I'm loading data...", status: { 'dic': false, 'q': false, 'com': false } };
    
    // Simulated user
    me: string = 'Eva';
    
    // Limit of visable comments
    visCom = 4;
    // Limit of displayed questions
    maxQ = 3;
    // Dictionary with static texts
    dic = {};
    // Questions data from Db
    qData = [];
    // Comments data from Db
    comData = [];
    
    // Listen for resizing window
    @HostListener('window:resize', ['$event']) onResize(event: any) {
        // phone and tablet mode (<830px)
        if (event.target.innerWidth < 830) {
            this.visCom = 1;
        }
        // Full view mode
        else {
            this.visCom = 4;
        }
    }
    constructor(
        public dialog: MdDialog,
        private dataService: DbService
    ) { }

    ngOnInit() {
        this.getDictionary();
        this.getQData();
        this.getComData();
        this.sortQ();
    }

    // Show modal dialog with injected data
    openModal(name: string): void {
        this.dialog.open(ProfileBaseModalComponent, {
            data: name
        });
    }
    
    // Sort trigger: recent or hot
    click(event: any): void {
        this.selected = event.target.innerText;
        this.sortQ();
    }
    
    // Sort questions by hot or recent
    sortQ(): void {
        if (this.selected === 'recent') {
            this.qData = _.sortBy(this.qData, 'lastTimeDiscusedDays');
        }
        else {
            this.qData = _.sortByOrder(this.qData, 'peerInv', 'desc');
        }
    }
    
    // Needs optimisation... but later
    getComment(id: number): any {
        let index = _.findIndex(this.comData, function(o) { return o.id === id; });
        return this.comData[index];
    }
    
    // Increase the max number of displayed questions
    showMoreQ(): void {
        this.maxQ += 3;
    }
    
    // Get dictionary from database
    getDictionary(): void {
        this.dataService
            .getDictionary()
            .then(
                dictionary => {
                    this.dic = dictionary;
                    this.loading.status.dic = true;
                }
            );
    }
    
    // Get questions data from database
    getQData(): void {
        this.dataService
            .getQData()
            .then(
                questions => {
                    this.qData = questions;
                    this.loading.status.q = true;
                }
            );
    }
    
    // Get comments data from database
    getComData(): void {
        this.dataService
            .getComData()
            .then(
                comments => {
                    this.comData = comments;
                    this.loading.status.com = true;
                }
            );
    }

    searchQ(): void {
        this.term = this.searchQuery;
    }
}
