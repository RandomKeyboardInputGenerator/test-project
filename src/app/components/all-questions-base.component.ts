import { Component, OnInit, HostListener  } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ProfileBaseModalComponent } from '../components/profile-base-modal.component';

import { DbService } from '../services/db.service';
import { AppSettings } from '../config/app-settings';

import { LimitQuestionsByAuthorPipe } from '../pipes/limit-questions-by-author.pipe';
import { SearchPipe } from '../pipes/search.pipe';

import * as _ from "lodash";

@Component({
    selector: 'app-all-questions-base',
    templateUrl: '../templates/html/all-questions-base.component.html',
    styleUrls: ['../styles/all-questions-base.component.scss']
})
export class AllQuestionsBaseComponent implements OnInit {
    appSettings = new AppSettings();
    userId = 0;
    radioFilter = 'all';
    sortOrder = 'recent';
    searchQueryBuffor = '';
    searchQuery = '';
    visableComments = 4;
    visableQuestions = 3;
    dictionary = {};
    questions = [];
    comments = [];
    users = [];
    
    checkCommentsVisibility(windowWidth: number): void {
        if (windowWidth < this.appSettings.FULL_VIEW_MODE_MIN_WIDTH ) {  
            this.visableComments = 1; 
        } else { 
            this.visableComments = 4; 
        }
    }
    
    @HostListener('window:resize', ['$event']) onResize(event: any) {
        this.checkCommentsVisibility(event.target.innerWidth);
    }
    constructor(
        public dialog: MdDialog,
        private dataService: DbService
    ) { }

    ngOnInit() {
        this.appSettings = new AppSettings();
        this.userId = this.appSettings.DEFAULT_USER_ID;
        this.checkCommentsVisibility(window.innerWidth);
        
        this.getDictionary();
        this.getComments();
        this.getUsers();
    }

    openModal(userId: number): void {
        this.dialog.open(ProfileBaseModalComponent, {
            data: { 
                userId, 
                'users': this.users, 
                'dictionary': this.dictionary, 
                'questions': this.questions 
            }
        });
    }
    
    changeQuestionsSortOrder(event: any): void {
        this.sortOrder = event.target.innerText;
        this.sortQuestions();
    }
    
    sortQuestions(): void {
        if (this.sortOrder === 'recent') {
            this.questions = _.sortBy(this.questions, 'lastTimeDiscusedDays');
        } else {
            this.questions = _.sortByOrder(this.questions, 'peersInvolved', 'desc');
        }
    }
    
    getComment(id: number): any {
        const index = _.findIndex(this.comments, comment => comment.id === id);
        return this.comments[index];
    }
    
    showMoreQuestions(): void {
        this.visableQuestions += 3;
    }
    
    getDictionary(): void {
        this.dataService.getDictionary().then(dictionary => {
                    this.dictionary = dictionary;
                    this.appSettings.setLoadedStatus('dictionary');
                }
            );
    }
    
    getQuestions(): void {
        this.dataService.getQuestions().then(questions => {
                    this.questions = questions;
                    let author = {name: ''};
                    _.forEach(this.questions, (question, index, questions) => {
                        author = this.findUser(question.authorId);
                        question.author = author.name;
                        questions[index] = question;
                    });
                    this.sortQuestions();
                    this.appSettings.setLoadedStatus('questions');
                });
    }
    
    getComments(): void {
        this.dataService.getCommments().then(comments => {
                    this.comments = comments;
                    this.appSettings.setLoadedStatus('comments');
                });
    }
    
    getAvatars(): void {
        this.dataService.getAvatars().then(avatars => {
                        let avatar = {};
                        _.forEach(this.users, (user, index, users) => {
                            avatar = _.find(avatars, avatar => avatar.id === user.avatarId);
                            // Remove needless keys and merge the objects
                            users[index] = _.assign(_.omit(user, 'avatarId'), _.omit(avatar, 'id'));
                        });
                        this.appSettings.setLoadedStatus('users');
                    });
    }
    
    findUser(userId: number): any {
        return _.find(this.users, 'id', userId);
    }
    
    getAvatar(userId: number): string {
        let src = this.findUser(userId) || this.appSettings.DEFAULT_AVATAR;
        _.isObject(src) ? src = src.avatarSrc : src;
        return this.appSettings.PORTRAITS_DIRECTORY + src;
    }
    
    getUsers(): void {
        this.dataService.getUsers().then(users => {
                        this.users = users;
                        this.getAvatars();
                        this.getQuestions();
                    });
    }
    
    getUserName(userId: number): string {
        return this.findUser(userId).name;
    }

    searchQuestions(): void {
        this.searchQuery = this.searchQueryBuffor;
    }
}
