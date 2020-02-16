import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    visible = true;

    phrase: any = {
        message: 'Un gran poder conlleva una gran responsabilidad',
        author: 'Ben Parker'
    };

    people: string[] = ['IronMan', 'Hulk', 'Thor'];
}
