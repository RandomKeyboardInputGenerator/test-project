import { Component, OnInit, Input, Inject, Optional } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

import _ from "lodash"

@Component({
    selector: 'app-profile-base-modal',
    templateUrl: '../templates/html/profile-base-modal.component.html',
    styleUrls: ['../styles/css/profile-base-modal.component.css']
})
export class ProfileBaseModalComponent implements OnInit {
    aId = 0;
    dic = {};   
    author = {
        'id': 0,
        'memberTime': ''
        };
    users = {};
    others = {};
    hottestQ = {};
    

    constructor(
        @Optional() @Inject(MD_DIALOG_DATA) private dialogData: any,
        public dialogRef: MdDialogRef<ProfileBaseModalComponent>
    ) { }

    ngOnInit() {
        // Write injected data to local variable
        this.aId = this.dialogData.userId;
        this.users = this.dialogData.users;
        this.dic = this.dialogData.dic;
        let qData = this.dialogData.qData;
        
        this.getUsers();
        this.getHotestDis(qData);
    }

    closeModal(): void {
        this.dialogRef.close();
    }
    
    // Get avatar's src
    getAvatar(userId: number): string {
        let users = this.users;
        let src = _.find(users, function(o) { return o.id == userId }) || 'adelaide_hanscom1.png';
        _.isObject(src) ? src = src.avatarSrc : src;
        return 'assets/img/portraits/' + src;
    }
    
    // Get others users 'WHO JOINED THE PLATFORM THAT SAME PERIOD' and the author
    getUsers(): void {
        let _aId = this.aId;
        this.author = _.find(this.users, function(o) { return o.id == _aId });
        let memberTime = this.author.memberTime;
        // Get max 3 users and exclude the author 
        this.others = _.slice(
                        _.filter(this.users, function(o) { 
                            return ( ( o.memberTime == memberTime ) && ( o.id !== _aId ) )
                            }),
                        0, 3
                        );
    }
    //Get 'THE HOTTEST DISCUSSION THESE DAYS'
    getHotestDis(qData: any): void {
        this.hottestQ = _.max(qData, function(o) { return o.peerInv });
    }
}
