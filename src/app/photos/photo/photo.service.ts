import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    //Ao colocar um modificador de acesso dentro do construtor da classe,
    //voce consegue garantir que o objeto que sera passado como parametro 
    //para a classe, possa ser acessado em qualquer lugar dela.
    //Eh como se houvesse uma declaracao do objeto na classe
    constructor(private http: HttpClient) { }

    listFromUser(userName: string){

        return this.http
            .get<Object[]>(API + '/flavio/photos');

    }
    

}