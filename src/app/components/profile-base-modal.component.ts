import { Component, OnInit, Input, Inject, Optional } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

import { AppSettings } from '../config/app-settings';

import _ from 'lodash'

@Component({
    selector: 'app-profile-base-modal',
    templateUrl: '../templates/html/profile-base-modal.component.html',
    styleUrls: ['../styles/profile-base-modal.component.scss']
})
export class ProfileBaseModalComponent implements OnInit {
    authorId = 0;
    dictionary = {};
    profileAuthor = {
        'id': this.authorId,
        'memberTime': ''
        };
    users = {};
    equalJoinTimeUsers = {};
    hottestDiscussion = {};

    constructor(
        @Optional() @Inject(MD_DIALOG_DATA) private dialogData: any,
        public dialogRef: MdDialogRef<ProfileBaseModalComponent>
    ) { }

    ngOnInit() {
        this.authorId = this.dialogData.userId;
        this.users = this.dialogData.users;
        this.dictionary = this.dialogData.dictionary;
        let questions = this.dialogData.questions;

        this.getProfileAuthor();
        this.getUsersWithEqualJoinTime();
        this.getHotestDiscussion(questions);
    }

    closeModal(): void {
        this.dialogRef.close();
    }
    
    findUser(userId: number): any {
        return _.find(this.users, 'id', userId);
    }
    
    getAvatar(userId: number): string {
        let src = this.findUser(userId) || AppSettings.DEFAULT_AVATAR;
        _.isObject(src) ? src = src.avatarSrc : src;
        return AppSettings.PORTRAITS_DIRECTORY + src;
    }
    
    getProfileAuthor() {
        this.profileAuthor = this.findUser(this.authorId);
    }
    
    getUsersWithEqualJoinTime(): void {
        let authorId = this.profileAuthor.id;
        let memberTime = this.profileAuthor.memberTime;
        this.equalJoinTimeUsers = _.slice(
            _.filter(this.users, user => { 
                return ( ( user.memberTime === memberTime ) && ( user.id !== authorId ) )
                }),
                0, 3
            );
    }
    
    getUserName(userId: number): string {
        return this.findUser(userId).name;
    }
    
    getHotestDiscussion(questions: any): void {
        this.hottestDiscussion = _.max(questions, question => question.peersInvolved);
    }
}
