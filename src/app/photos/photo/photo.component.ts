import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    
    //Inbound properties: elas aceitam receber valor através da
    //forma declarativa do componente
    @Input() url = "";
    @Input() description="leão";
}