import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllQuestionsBaseComponent } from '../components/all-questions-base.component';
import { SingleQuestionBaseComponent } from '../components/single-question-base.component';

const routes: Routes = [
    { path: '', redirectTo: '/allqbase', pathMatch: 'full' },
    { path: 'allqbase', component: AllQuestionsBaseComponent },
    { path: 'question/:id', component: SingleQuestionBaseComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
