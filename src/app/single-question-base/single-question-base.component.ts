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
    loading = { text: "Please wait. I'm loading data...", status: { 'dic': false, 'q': false, 'com': false, 'user': false } };
    
    // Question Id
    qId = 0;
    // Logged user id - for voting
    userId = 0;
    // User data
    user = {
        "votedComs": [],
        "votedQ": [],
    };
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
        this.getUser(this.userId);
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
    
    // disable voting during waiting for response from service
    voteEnable = true;
    // upVote for comment
    comUpVote(com: any): void {
        if(this.voteEnable) {
             // Vote for specific comment only if you not voted on it already
            if (_.indexOf(this.user.votedComs, com.id) === -1) {
                // Disable voting
                this.voteEnable = false;
                // Send data to service
                this.dataService
                    .comUpVote(com)
                    .then(() => { 
                        // Save vote
                        this.user.votedComs.push(com.id);
                        // Save also the user data
                        this.dataService
                            .saveUser(this.user)
                            .then(() => { 
                                // Enable voting when all data is successfully saved
                                this.voteEnable = true; 
                            });
                    });
            }
        }
    }
    // downVote for comment
    comDownVote(com: any): void {
        if(this.voteEnable) {
            // Vote for specific comment only if you not voted on it already
            if (_.indexOf(this.user.votedComs, com.id) === -1) {
                // Disable voting
                this.voteEnable = false;
                // Send data to service
                this.dataService
                    .comDownVote(com)
                    .then(() => { 
                        // Save vote
                        this.user.votedComs.push(com.id);
                        // Save also the user data
                        this.dataService
                            .saveUser(this.user)
                            .then(() => { 
                                // Enable voting when all data is successfully saved
                                this.voteEnable = true; 
                            });
                    });
            }
        }
    }
    // upVote for question
    qUpVote(question: any): void {
        if(this.voteEnable) {
            // Vote for specific comment only if you not voted on it already
            if (_.indexOf(this.user.votedQ, question.id) === -1) { 
                // Disable voting
                this.voteEnable = false;
                // Send data to service
                this.dataService
                    .qUpVote(question)
                    .then(() => { 
                        // Save vote
                        this.user.votedQ.push(question.id);
                        // Save also the user data
                        this.dataService
                            .saveUser(this.user)
                            .then(() => { 
                                // Enable voting when all data is successfully saved
                                this.voteEnable = true; 
                            });
                    });
            }
        }
    }
    // downVote for question
    qDownVote(question: any): void {
        if(this.voteEnable) {
            // Vote for specific comment only if you not voted on it already
            if (_.indexOf(this.user.votedQ, question.id) === -1) { 
                // Disable voting
                this.voteEnable = false;
                // Send data to service
                this.dataService
                    .qDownVote(question)
                    .then(() => { 
                        // Save vote
                        this.user.votedQ.push(question.id);
                        // Save also the user data
                        this.dataService
                            .saveUser(this.user)
                            .then(() => { 
                                // Enable voting when all data is successfully saved
                                this.voteEnable = true; 
                            });
                    });
            }
        }
    }
    // Get user data
    getUser(userId: number): void {
        this.dataService
            .getUser(userId)
            .then(
                user => {
                    this.user = user;
                    this.loading.status.user = true;
                }
            );
    }
    
    // Find out if user already voted on this comment
    isComVoted(id: number): boolean {
        return (_.indexOf(this.user.votedComs, id) === -1) ? false : true;
    }
    
    // Find out if user already voted on this question
    isQVoted(id: number): boolean {
        return (_.indexOf(this.user.votedQ, id) === -1) ? false : true;
    }
}
