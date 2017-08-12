import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ProfileBaseModalComponent } from '../profile-base-modal/profile-base-modal.component';

import { LimitComToPipe } from '../limit-com-to.pipe';
import { AbsPipe } from '../abs.pipe';

import _ from "lodash"

@Component({
    selector: 'app-single-question-base',
    templateUrl: './single-question-base.component.html',
    styleUrls: ['./single-question-base.component.css']
})
export class SingleQuestionBaseComponent implements OnInit {

    // Simulated Db
    data = {
        "dictionary": {
            "peerAnsw":             "peers already answered",
            "newAnswBtn":           "GIVE new answer",
            "comBtn":               "COMMENT",
            "contDisBtn":           "CONTINUE discussion",
            "upVote":               "upvotes",
            "downVote":             "downvotes",
            "comDesc":              "COMMENTED IT",
            "unfollowBtn":          "unfollow",
            "lastDisTime":          "Last time discussed",
            "lastDisTimeStatic":    "1 day ago", // To do...
            "questionTitle":        "QUESTION",
            "questionsTitle":       "QUESTIONS",
            "countComDesc":         "more activities",
            "sortByRecent":         "recent",
            "sortByHot":            "hot",
            "sortByDesc":           ["Sort by:","or"],
            "searchBtn":            "SEARCH",
            "radioMyself":          "My shelf",
            "radioAll":             "All questions",
            "relDis":               "related discusion",
            "peerInv":              "peers involved",
            "conv":                 "conversations",
            "loadMoreBtn":          "load more questions",
        },
        "questions": [
            {
                "id": 0,
                "author": "Eva",
                "desc": ["ASKED","IS ASKING:"],
                "title": "Will insulin make my patient gain weight?",
                "relDis": 2,
                "peerInv": 7,
                "conv": 3,
                "comments": [0,1,2,3,4,5,6],
                "content": "Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris.",
                "downvotes": 0, "upvotes": 19,
                "peerAnsw": 3,
            },
            {
                "id": 1,
                "author": "Andrew",
                "desc": ["ASKED","IS ASKING:"],
                "title": "Vegan diet in diabetes treatment?",
                "relDis": 2,
                "peerInv": 9,
                "conv": 5,
                "comments": [7,8,9,10,11,12,13,14,15,16],
            },
            {
                "id": 2,
                "author": "Joseph",
                "desc": ["ASKED","IS ASKING:"],
                "title": "Vegan diet to stop diabetes progress",
                "relDis": 5,
                "peerInv": 4,
                "conv": 0,
                "comments": [17,18,19],
            },
        ],
        "comments": [
            {   "id": 0,  "qId": 0, "author": "Tom Hanks",                  "time": "yesterday",    "downvotes": 0, "upvotes": 19,     "type": "ANSWERED",  "relDis": true,
                "content": "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.", },
            {   "id": 1,  "qId": 0, "author": "Bill Gates",                  "time": "yesterday",    "downvotes": 2, "upvotes": 5,      "type": "COMMENTED",    "answerId": 0,
                "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", },
            {   "id": 2,  "qId": 0, "author": "Frank",                      "time": "yesterday",    "downvotes": 1, "upvotes": 3,      "type": "COMMENTED",    "answerId": 0,
                "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", },
            {   "id": 3,  "qId": 0, "author": "Paulina",                    "time": "two days",     "downvotes": 0, "upvotes": 6,      "type": "ANSWERED",  "relDis": false,
                "content": "Quisque tincidunt purus ipsum, at elementum arcu consectetur vitae. Fusce nec arcu arcu.", },
            {   "id": 4,  "qId": 0, "author": "Tom Cruise",                 "time": "three days",   "downvotes": 9, "upvotes": 7,      "type": "ANSWERED",  "relDis": true,
                "content": "Quisque dapibus convallis metus. Praesent at dui ac tellus facilisis pulvinar vitae non ex. Vestibulum facilisis, massa vel aliquet ultrices, erat tellus pellentesque sapien, a consequat erat sem sit amet lacus.", },
            {   "id": 5,  "qId": 0, "author": "Brad Pitt",                  "time": "two days",     "downvotes": 1, "upvotes": 8,      "type": "COMMENTED",    "answerId": 4,
                "content": "Nam non erat sed purus ultrices rutrum quis ut arcu. Nulla facilisi. Duis nunc tellus, pulvinar ornare est ut, euismod sollicitudin lectus. Nunc eget elit sit amet nulla dignissim volutpat non sed libero.", },
            {   "id": 6,  "qId": 0, "author": "John Depp",                  "time": "yesterday",    "downvotes": 0, "upvotes": 12,     "type": "COMMENTED",    "answerId": 4,
                "content": "Praesent eget commodo nibh, vitae vehicula mauris. Morbi id arcu lacinia, congue est nec, posuere orci.", },
            {   "id": 7,  "qId": 1, "author": "Ed",                         "time": "yesterday",    "downvotes": 0, "upvotes": 2,      "type": "ANSWERED",  "relDis": true,
                "content": "Donec elementum, justo at sagittis dignissim, est metus blandit neque, et maximus tortor diam sit amet massa.", },
            {   "id": 8,  "qId": 1, "author": "Bruce Willis",               "time": "yesterday",    "downvotes": 0, "upvotes": 3,      "type": "COMMENTED",    "answerId": 7,
                "content": "In ullamcorper venenatis dolor, in malesuada augue. Curabitur convallis dui elit, ut egestas erat consequat non. Praesent non dolor nec augue dapibus mollis.", },
            {   "id": 9,  "qId": 1, "author": "Arnold Schwarzenegger",      "time": "yesterday",    "downvotes": 6, "upvotes": 12,     "type": "COMMENTED",    "answerId": 7,
                "content": "Sed euismod lorem dolor, sed ornare sapien consectetur ut. Proin dui dui, lobortis sed felis id, condimentum ultricies velit.", },
            {   "id": 10,  "qId": 1, "author": "Sylvia",                     "time": "three days",   "downvotes": 1, "upvotes": 8,      "type": "ANSWERED",  "relDis": true,
                "content": "Maecenas quis mauris vel nisi faucibus eleifend sit amet nec orci. Donec vulputate, sapien ac ornare efficitur, dui lectus molestie odio, nec gravida mauris eros in purus.", },
            {   "id": 11,  "qId": 1, "author": "Patricia",                   "time": "two days",     "downvotes": 2, "upvotes": 9,      "type": "COMMENTED",    "answerId": 10,
                "content": "Curabitur sollicitudin semper eros id egestas. Ut ullamcorper, justo vitae ullamcorper interdum, magna lorem dictum odio, sit amet ultricies risus massa in dui.", },
            {   "id": 12,  "qId": 1, "author": "David",                      "time": "yesterday",    "downvotes": 2, "upvotes": 11,     "type": "COMMENTED",    "answerId": 10,
                "content": "Praesent posuere enim eget tortor molestie, eget dignissim elit lobortis.", },
            {   "id": 13,  "qId": 1, "author": "Joseph",                     "time": "yesterday",    "downvotes": 5, "upvotes": 1,      "type": "COMMENTED",    "answerId": 10,
                "content": "Curabitur id odio nunc. Sed rhoncus magna sollicitudin justo pharetra, sed tincidunt magna semper. Vivamus ut mollis tortor. ", },
            {   "id": 14,  "qId": 1, "author": "Uma Thurman",                "time": "yesterday",    "downvotes": 1, "upvotes": 13,     "type": "COMMENTED",    "answerId": 10,
                "content": "Suspendisse tincidunt massa justo, sed tincidunt neque accumsan et. Fusce venenatis dolor sed blandit vestibulum.", },
            {   "id": 15,  "qId": 1, "author": "Triss Merigold",             "time": "two days",     "downvotes": 11, "upvotes": 15,    "type": "ANSWERED",  "relDis": false,
                "content": "Suspendisse finibus, odio non varius feugiat, diam nisi lacinia lacus, et tempus orci est sed ex.", },
            {   "id": 16,  "qId": 1, "author": "James T. Kirk",              "time": "yesterday",    "downvotes": 0, "upvotes": 6,      "type": "ANSWERED",  "relDis": true,
                "content": "Vivamus malesuada erat lacinia, eleifend enim non, faucibus nibh. Donec porta, magna quis finibus varius, orci justo dapibus orci, vel dapibus risus nulla at elit.", },
            {   "id": 17,  "qId": 2, "author": "Drizzt Do'Urden",            "time": "two days",     "downvotes": 8, "upvotes": 4,      "type": "ANSWERED",  "relDis": false,
                "content": "Nullam lacinia dolor nunc. Mauris dignissim nisl viverra tellus fermentum molestie. Duis maximus in odio vel posuere.", },
            {   "id": 18,  "qId": 2, "author": "Geralt",                     "time": "yesterday",    "downvotes": 4, "upvotes": 18,     "type": "ANSWERED",  "relDis": true,
                "content": "In consequat metus eros, a ullamcorper nibh ultrices vitae. Praesent et ligula arcu. Aliquam tincidunt dapibus lacus eu mollis.", },
            {   "id": 19,  "qId": 2, "author": "Vladimir Putin",             "time": "yesterday",    "downvotes": 10, "upvotes": 16,    "type": "COMMENTED",    "answerId": 18,
                "content": "Aenean faucibus orci elit, at pellentesque tortor consequat in.", },
            {   "id": 20,  "qId": 3, "author": "Barack Obama",               "time": "yesterday",    "downvotes": 0, "upvotes": 12,     "type": "ANSWERED",  "relDis": false,
                "content": "Vestibulum eros nibh, semper id ante vitae, ultrices cursus tellus. Nulla in ante quis ante elementum pulvinar at sit amet ante.", },
        ]
    };
    
    qId = 0;
    relComments = [];
    question = {};
    dic = {};

    constructor(public dialog: MdDialog) { }

    ngOnInit() {
        this.getDictionary();
        this.getQData(this.qId);
        this.findRelComm(this.qId);
    }

    // Show modal dialog with injected data
    openModal(name: string) {
        this.dialog.open(ProfileBaseModalComponent, {
            data: name
        });
    }
    
    // Find related comments
    findRelComm(qId: number) {
        this.relComments = _.filter(this.data.comments, function(o) { return o.qId === qId; });
    }
    // Get question data
    getQData(qId: number) {
        this.question = _.find(this.data.questions, function(o) { return o.id === qId; });
    }
    // Get dictionary with static strings
    getDictionary() {
        this.dic = this.data.dictionary;
    }
}
