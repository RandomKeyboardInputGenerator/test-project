import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllQuestionsBaseComponent } from './all-questions-base/all-questions-base.component';
import { SingleQuestionBaseComponent } from './single-question-base/single-question-base.component';
import { ProfileBaseComponent } from './profile-base/profile-base.component';

const routes: Routes = [
    { path: '', redirectTo: '/allqbase', pathMatch: 'full' },
    { path: 'allqbase', component: AllQuestionsBaseComponent },
    { path: 'singleqbase', component: SingleQuestionBaseComponent },
    { path: 'question/:id', component: SingleQuestionBaseComponent },
    { path: 'profilebase', component: ProfileBaseComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
