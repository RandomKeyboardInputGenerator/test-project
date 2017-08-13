import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ProfileBaseModalComponent } from '../profile-base-modal/profile-base-modal.component';

import { DbService }  from '../db.service';

import { LimitComToPipe } from '../limit-com-to.pipe';
import { AbsPipe } from '../abs.pipe';

import _ from "lodash"

@Component({
    selector: 'app-single-question-base',
    templateUrl: './single-question-base.component.html',
    styleUrls: ['./single-question-base.component.css']
})
export class SingleQuestionBaseComponent implements OnInit {
    loading = { text: "Please wait. I'm loading data...", status: { 'dic': false, 'q': false, 'com': false } };
    
    // Question Id
    qId = 0;
    // Buffors for data from db
    relComments = [];
    question = {};
    dic = {};

    constructor(
        public dialog: MdDialog,
        private dataService: DbService
    ) { }

    ngOnInit() {
        this.getDictionary();
        this.getQData(this.qId);
        this.findRelComm(this.qId);
    }

    // Show modal dialog with injected data
    openModal(name: string): void {
        this.dialog.open(ProfileBaseModalComponent, {
            data: name
        });
    }
    
    // Find related comments
    findRelComm(qId: number): void {
        this.dataService
            .getComData(qId)
            .then(
                comments => {
                    this.relComments = comments;
                    this.loading.status.com = true;
                }
            );
    }
    // Get question data
    getQData(qId: number): void {
        this.dataService
            .getQData(qId)
            .then(
                question => {
                    this.question = question;
                    this.loading.status.q = true;
                }
            );
    }
    // Get dictionary with static strings
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
    
    comUpVote(comment: any): void {
        //comment.upvotes += 1; // the value must be increased on database
        
        // Take from Db current values
        this.findRelComm(this.qId);
    }
    
    comDownVote(comment: any): void {
        
        // Take from Db current values
        this.findRelComm(this.qId);
    }
    
    qUpVote(question: any): void {
        
        
        // Take from Db current values
        this.getQData(this.qId);
    }
    
    qDownVote(question: any): void {
        
        // Take from Db current values
        this.getQData(this.qId);
    }
}
