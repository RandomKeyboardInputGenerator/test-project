import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ProfileBaseModalComponent } from './profile-base-modal.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { DbService }  from '../services/db.service';
import { AppSettings } from '../config/app-settings';

import { LimitCommentsByAnswerPipe } from '../pipes/limit-comments-by-answer.pipe';
import { AbsPipe } from '../pipes/abs.pipe';

import _ from 'lodash';

@Component({
    selector: 'app-single-question-base',
    templateUrl: '../templates/html/single-question-base.component.html',
    styleUrls: ['../styles/single-question-base.component.scss']
})
export class SingleQuestionBaseComponent implements OnInit {
    appSettings = new AppSettings();
    userId = 0;
    questionId = 0;
    user = {
        'votedComments': [],
        'votedQuestions': [],
    };
    users = [];
    question = {};
    relatedComments = [];
    subRelatedComments = [];
    dictionary = {};
    questions = {};
    voteEnable = true;

    constructor(
        public dialog: MdDialog,
        private dataService: DbService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
        this.appSettings = new AppSettings();
        this.userId = this.appSettings.DEFAULT_USER_ID;
        this.questionId = +this.route.snapshot.paramMap.get('id') || 0;

        this.getDictionary();
        this.getRelatedComments(this.questionId);
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

    getRelatedComments(questionId: number): void {
        this.dataService.getCommmentsOnTheQuestion(questionId).then(comments => {
                this.relatedComments = _.filter(comments, comment => comment.type === 'ANSWERED');
                this.subRelatedComments = _.filter(comments, comment => comment.type === 'COMMENTED');
                this.appSettings.setLoadedStatus('comments');
            });
    }

    getQuestions(questionId: number): void {
        this.dataService.getQuestions().then(questions => {
                this.questions = questions;
                this.question = _.find(this.questions, question => question.id === questionId);
                this.appSettings.setLoadedStatus('questions');
            });
    }

    getDictionary(): void {
        this.dataService.getDictionary().then(dictionary => {
                this.dictionary = dictionary;
                this.appSettings.setLoadedStatus('dictionary');
            });
    }

    isUserNotVoteOnComment(commentId: number): boolean {
        return _.indexOf(this.user.votedComments, commentId) === -1;
    }

    isCommentVotingEnabled(commentId: number): boolean {
        return this.voteEnable && this.isUserNotVoteOnComment(commentId);
    }

    isCommentVotingDisabled(commentId: number): boolean {
        return !this.isCommentVotingEnabled(commentId);
    }

    commentUpVote(comment: any): void {
        if (this.isCommentVotingEnabled(comment.id)) {
            this.voteEnable = false;
            this.dataService.commmentUpVote(comment).then(() => {
                    this.user.votedComments.push(comment.id);
                    this.saveUser();
                });
        }
    }

    commentDownVote(comment: any): void {
        if (this.isCommentVotingEnabled(comment.id)) {
            this.voteEnable = false;
            this.dataService.commentDownVote(comment).then(() => {
                    this.user.votedComments.push(comment.id);
                    this.saveUser();
                });
        }
    }

    isUserNotVoteOnQuestion(questionId: number): boolean {
        return _.indexOf(this.user.votedQuestions, questionId) === -1;
    }

    isQuestionVotingEnabled(questionId: number): boolean {
        return this.voteEnable && this.isUserNotVoteOnQuestion(questionId);
    }

    isQuestionVotingDisabled(questionId: number): boolean {
        return !this.isQuestionVotingEnabled(questionId);
    }

    questionUpVote(question: any): void {
        if (this.isQuestionVotingEnabled(question.id)) {
            this.voteEnable = false;
            this.dataService.questionUpVote(question).then(() => {
                    this.user.votedQuestions.push(question.id);
                    this.saveUser();
                });
        }
    }

    questionDownVote(question: any): void {
        if (this.isQuestionVotingEnabled(question.id)) {
            this.voteEnable = false;
            this.dataService.questionDownVote(question).then(() => {
                    this.user.votedQuestions.push(question.id);
                    this.saveUser();
                });
        }
    }

    countVotes(target: any): number {
        return target.upvotes - target.downvotes;
    }

    getUser(userId: number): void {
        this.user = this.findUser(userId);
        this.appSettings.setLoadedStatus('users');
    }

    saveUser(): void {
        this.dataService.saveUser(this.user).then(() => this.voteEnable = true);
    }

    getAvatars(): void {
        this.dataService.getAvatars().then(avatars => {
                let avatar = {};
                _.forEach(this.users, (user, iindex, users) => {
                    avatar = _.find(avatars, avatar => avatar.id === user.avatarId);
                    // Remove needless keys and merge the objects
                    users[iindex] = _.assign(_.omit(user, 'avatarId'), _.omit(avatar, 'id'));
                });
                this.getUser(this.userId);
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
                this.getQuestions(this.questionId);
            });
    }

    getUserName(userId: number): string {
        return this.findUser(userId).name;
    }

    goBackButton(): void {
        this.location.back();
    }
}
