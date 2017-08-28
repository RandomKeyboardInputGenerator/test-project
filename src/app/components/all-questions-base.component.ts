import { Component, OnInit, HostListener  } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ProfileBaseModalComponent } from '../components/profile-base-modal.component';

import { DbService }  from '../services/db.service';

import { LimitQToPipe } from '../pipes/limit-qto.pipe';
import { SearchPipe } from '../pipes/search.pipe';

import _ from 'lodash'

@Component({
    selector: 'app-all-questions-base',
    templateUrl: '../templates/html/all-questions-base.component.html',
    styleUrls: ['../styles/all-questions-base.component.scss']
})
export class AllQuestionsBaseComponent implements OnInit {
    questions: string = 'all'; // radio btn
    selected: string = 'recent'; // another trigger
    searchQuery: string = ''; // bufor for searching query connected with search input
    term: string = '';  // This one is sent to Search Pipe when user clicks search btn
    loading = { text: 'Please wait. I\'m loading data...', status: { 'dic': false, 'q': false, 'com': false, 'users': false } };
    
    // Simulated user - userId
    me: number = 1;
    
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
    // Users data
    users = [];
    hottestQ = {};
    
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
        // phone and tablet mode (<830px)
        if (window.innerWidth < 830) {
            this.visCom = 1;
        }
        // Full view mode
        else {
            this.visCom = 4;
        }
        
        this.getDictionary();
        this.getQData();
        this.getComData();
        this.sortQ();
        this.getUsers();
    }

    // Show modal dialog with injected data
    openModal(userId: number): void {
        this.dialog.open(ProfileBaseModalComponent, {
            data: { 'userId': userId, 'users': this.users, 'dic': this.dic, 'qData': this.qData }
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
        let index = _.findIndex(this.comData, function(o) { return o.id == id; });
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
                            users[i] = _.assign(_.omit(u, 'avatarId'), _.omit(avatar, 'id'));
                        });
                        this.loading.status.users = true;
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

    searchQ(): void {
        this.term = this.searchQuery;
    }
}
