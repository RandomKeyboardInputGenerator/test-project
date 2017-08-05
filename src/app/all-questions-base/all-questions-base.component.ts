import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-all-questions-base',
    templateUrl: './all-questions-base.component.html',
    styleUrls: ['./all-questions-base.component.css']
})
export class AllQuestionsBaseComponent implements OnInit {
    questions: string = 'my';
    selected:string = 'recent';

    constructor() { }

    ngOnInit() {
    }

    click(event: any): void {
        this.selected = event.target.innerText;
    }
}
