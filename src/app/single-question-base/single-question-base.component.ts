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
    // Logged user id - for voting
    userId = 0;
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
                    this.voteEnable = true;
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
                    this.voteEnable = true;
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
    
    // disable voting during waiting for response from service
    voteEnable = true;
    // upVote for comment
    comUpVote(com: any): void {
        if(this.voteEnable) {
            this.voteEnable = false;
            this.dataService
                .comUpVote(com)
                .then(response => { this.findRelComm(this.qId); });
        }
    }
    // downVote for comment
    comDownVote(com: any): void {
        if(this.voteEnable) {
            this.voteEnable = false;
            this.dataService
                .comDownVote(com)
                .then(response => { this.findRelComm(this.qId); });
        }
    }
    // upVote for question
    qUpVote(question: any): void {
        if(this.voteEnable) {
            this.voteEnable = false;
            this.dataService
                .qUpVote(question)
                .then(response => { this.getQData(this.qId); });
        }
    }
    // downVote for question
    qDownVote(question: any): void {
        if(this.voteEnable) {
            this.voteEnable = false;
            this.dataService
                .qDownVote(question)
                .then(response => { this.getQData(this.qId); });
        }
    }
}
