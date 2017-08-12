import { Component, OnInit, HostListener  } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ProfileBaseModalComponent } from '../profile-base-modal/profile-base-modal.component';

import { InMemoryDataService }  from '../in-memory-data.service';

import _ from "lodash"

@Component({
    selector: 'app-all-questions-base',
    templateUrl: './all-questions-base.component.html',
    styleUrls: ['./all-questions-base.component.css']
})
export class AllQuestionsBaseComponent implements OnInit {
    questions: string = 'my';
    selected: string = 'recent';
    
    // Simulated Db
    data = {
        "countDesc": "more activities",
        "questions": [
            {
                "id": 0,
                "author": "Eva",
                "desc": ["ASKED","IS ASKING:"],
                "title": "Will insulin make my patient gain weight?",
                "relDis": 1,
                "peerInv": 6,
                "conv": 3,
                "comments": [0,1,2,3,4,5,6],
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
            { "id": 0,  "author": "Tom Hanks",                  "type": "COMMENTED" },
            { "id": 1,  "author": "Bil Gates",                  "type": "COMMENTED" },
            { "id": 2,  "author": "Frank",                      "type": "COMMENTED" },
            { "id": 3,  "author": "Paulina",                    "type": "ANSWERED" },
            { "id": 4,  "author": "Tom Cruise",                 "type": "COMMENTED" },
            { "id": 5,  "author": "Brad Pitt",                  "type": "COMMENTED" },
            { "id": 6,  "author": "John Depp",                  "type": "COMMENTED" },
            { "id": 7,  "author": "Ed",                         "type": "ANSWERED" },
            { "id": 8,  "author": "Bruce Willis",               "type": "COMMENTED" },
            { "id": 9,  "author": "Arnold Schwarzenegger",      "type": "COMMENTED" },
            { "id": 10, "author": "Sylvia",                     "type": "ANSWERED" },
            { "id": 11, "author": "Patricia",                   "type": "COMMENTED" },
            { "id": 12, "author": "David",                      "type": "COMMENTED" },
            { "id": 13, "author": "Joseph",                     "type": "COMMENTED" },
            { "id": 14, "author": "Uma Thurman",                "type": "COMMENTED" },
            { "id": 15, "author": "Triss Merigold",             "type": "COMMENTED" },
            { "id": 16, "author": "James T. Kirk",              "type": "COMMENTED" },
            { "id": 17, "author": "Drizzt Do'Urden",            "type": "COMMENTED" },
            { "id": 18, "author": "Geralt",                     "type": "ANSWERED" },
            { "id": 19, "author": "Vladimir Putin",             "type": "COMMENTED" },
            { "id": 20, "author": "Barack Obama",               "type": "COMMENTED" }
        ]
    };
    
    // Counted answers and comments not visiable by default
    questionComCount: number[] = [];
    // Limit of visable comments
    visCom = 4;
    // Limit of displayed questions
    maxQ = 3;
    
    // Listen for resizing window
    @HostListener('window:resize', ['$event']) onResize(event: any) {
        // phone and tablet mode (<830px)
        if (event.target.innerWidth < 830) {
            this.visCom = 1;
            this.countItForMe();
        }
        // Full view mode
        else {
            this.visCom = 4;
            this.countItForMe();
        }
    }
    constructor(
        public dialog: MdDialog,
        private dataService: InMemoryDataService
    ) { }

    ngOnInit() {
        this.countItForMe();
    }

    // Show modal dialog with injected data
    openModal(name: string) {
        this.dialog.open(ProfileBaseModalComponent, {
            data: name
        });
    }
    
    // Sort trigger: recent or hot
    click(event: any): void {
        this.selected = event.target.innerText;
    }
    
    // count comments and answers
    countItForMe(): void {
        // Lets clean first
        this.questionComCount= [];
        // lets do the magic
        for (let q of this.data.questions) {
            let buf = q.comments.length - this.visCom;
            (buf >= 0) ? this.questionComCount.push(buf) : this.questionComCount.push(0);
        }
    }
    
    // Needs optimisation... but later
    getComment(id: number): any {
        let index = _.findIndex(this.data.comments, function(o) { return o.id === id; });
        return this.data.comments[index];
    }
    
    // Increase the max number of displayed questions
    showMoreQ(): void {
        this.maxQ += 3;
    }
}
