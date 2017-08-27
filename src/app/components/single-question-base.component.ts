import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ProfileBaseModalComponent } from './profile-base-modal.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { DbService }  from '../services/db.service';

import { LimitComToPipe } from '../pipes/limit-com-to.pipe';
import { AbsPipe } from '../pipes/abs.pipe';

import _ from "lodash"

@Component({
    selector: 'app-single-question-base',
    templateUrl: '../templates/html/single-question-base.component.html',
    styleUrls: ['../styles/css/single-question-base.component.css']
})
export class SingleQuestionBaseComponent implements OnInit {
    loading = { text: "Please wait. I'm loading data...", status: { 'dic': false, 'q': false, 'com': false, 'user': false} };
    
    // Question Id
    qId = 0;
    // Logged user id - for voting
    userId = 0;
    // User data
    user = {
        "votedComs": [],
        "votedQ": [],
    };
    users = [];
    // Buffors for data from db
    relComments = [];
    question = {};
    dic = {};
    qData = {};

    constructor(
        public dialog: MdDialog,
        private dataService: DbService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
        this.loading = { text: "Please wait. I'm loading data...", status: { 'dic': false, 'q': false, 'com': false, 'user': false} };
        this.qId = +this.route.snapshot.paramMap.get('id') || 0;
        
        this.getQData(this.qId);
        this.findRelComm(this.qId);
        this.getDictionary();
        this.getUsers();
    }

    // Show modal dialog with injected data
    openModal(userId: number): void {
        this.dialog.open(ProfileBaseModalComponent, {
            data: { 'userId': userId, 'users': this.users, 'dic': this.dic, 'qData': this.qData }
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
    // Get questions data from database
    getQData(qId: number): void {
        this.dataService
            .getQData()
            .then(
                questions => {
                    this.qData = questions;
                    this.question = _.find(this.qData, function(o) { return o.id == qId });
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
                        this.saveUser();
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
                        this.saveUser();
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
                        this.saveUser();
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
                        this.saveUser();
                    });
            }
        }
    }
    // Get user data
    getUser(userId: number): void {
        this.user = _.find(this.users, function(a) { return a.id == userId });
        this.loading.status.user = true;
    }
    
    // Save user data
    saveUser(): void {
        this.dataService
            .saveUser(this.user)
            .then(() => { 
                // Enable voting when all data is successfully saved
                this.voteEnable = true; 
            });
    }
    
    // Get avatars data
    getAvatars(): void {
        this.dataService
            .getAvatars()
            .then(
                avatars => {
                        let avatar = {};
                        // For each user
                        _.forEach(this.users, function(u, i, users) {
                            // Find related avatar
                            avatar = _.find(avatars, function(a) { return a.id == u.avatarId });
                            // Remove needless keys and merge the objects
                            users[i] = _.assign(_.omit(u, "avatarId"), _.omit(avatar, "id"));
                        });
                        // Get data of logged user
                        this.getUser(this.userId);
                    }
            );
    }
    
    // Get avatar's src
    getAvatar(userId: number): string {
        let users = this.users;
        let src = _.find(users, function(o) { return o.id == userId }) || 'adelaide_hanscom1.png';
        _.isObject(src) ? src = src.avatarSrc : src;
        return 'assets/img/portraits/' + src;
    }
    
    // Get users data
    getUsers(): void {
        this.dataService
            .getUsers()
            .then(
                users => {
                        this.users = users;
                        this.getAvatars();
                    }
            );
    }
    
    getUserName(userId: number): string {
        let users = this.users;
        return _.find(users, function(o) { return o.id == userId }).name;
    }
    
    // Find out if user already voted on this comment
    isComVoted(id: number): boolean {
        return (_.indexOf(this.user.votedComs, id) === -1) ? false : true;
    }
    
    // Find out if user already voted on this question
    isQVoted(id: number): boolean {
        return (_.indexOf(this.user.votedQ, id) === -1) ? false : true;
    }
    
    // Go back btn
    goBack(): void {
        this.location.back();
    }
}
