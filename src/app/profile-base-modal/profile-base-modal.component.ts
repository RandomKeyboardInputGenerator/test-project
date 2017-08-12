import { Component, OnInit, Input, Inject, Optional } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

import _ from "lodash"

@Component({
    selector: 'app-profile-base-modal',
    templateUrl: './profile-base-modal.component.html',
    styleUrls: ['./profile-base-modal.component.css']
})
export class ProfileBaseModalComponent implements OnInit {
    data: string = '';
    
    staticDb = {
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
            "memberTime":           "MEMBER FOR",
            "lastLogTime":          "LAST SEEN",
            "activityLvl":          "ACTIVITY LEVEL",
            "modalTitles":          [
                                        "How it all started",
                                        "THAT'S WHERE WE HAVE BEEN",
                                        "THESE 5 MONTHS AGO",
                                        "WHO JOINED THE PLATFORM",
                                        "THAT SAME PERIOD",
                                        "THE HOTTEST DISCUSSION THESE DAYS",
                                    ],
            "peers":                "peers",
            "discussions":          "discussions",
            "findings":             "findings",
            "questions":            "questions",
        },
        "authors": [
            {
                "id": 0,
                "name": "Dr. Halima",
                "memberTime": "5 months",
                "lastLogTime": "Saturday afternoon",
                "peers": 46,
                "discussions": 29,
                "findings": 19,
                "questions": 10,
                "otherAutorsStatic": ["S.E.N Waveru","Patricia","Joseph Aluoch"]
                
            }
        ]
    };

    aId = 0;
    dic = {};
    author = {};
    
    staticFinding = {
        "id": 0,
        "author": "Andrew",
        "desc": "FOUND THE GUARDIAN ARTICLE",
        "title": "Vegan diet to stop diabetes progress",
        "relDis": 3,
        "peerInv": 6,
        "conv": 3,
        "content": "Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris.",
        "downvotes": 0, "upvotes": 19,
    };

    constructor(
        @Optional() @Inject(MD_DIALOG_DATA) private dialogData: any,
        public dialogRef: MdDialogRef<ProfileBaseModalComponent>
    ) { }

    ngOnInit() {
        // Write injected data to local variable
        this.data = this.dialogData;
        
        this.getDictionary();
        this.getAuthor(this.aId);
    }

    closeModal(): void {
        this.dialogRef.close();
    }
    
    // Get dictionary with static strings
    getDictionary() {
        this.dic = this.staticDb.dictionary;
    }
    
    // Get author data
    getAuthor(aId: number) {
        this.author = _.find(this.staticDb.authors, function(o) { return o.id === aId; });
    }
}
