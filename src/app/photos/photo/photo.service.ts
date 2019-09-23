import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000';


//Decorator "Injectable" ele diz primeiro que "PhotoService" é injetável
//ele pode receber o HttpClient, etc...
//30 Componentes querendo usar o mesmo objeto -> usa o parâmetro providedIn: 'root'
//Será um serviço usado por todo o projeto
@Injectable({ providedIn: 'root' })
export class PhotoService {

    //Ao colocar um modificador de acesso dentro do construtor da classe,
    //voce consegue garantir que o objeto que sera passado como parametro 
    //para a classe, possa ser acessado em qualquer lugar dela.
    //Eh como se houvesse uma declaracao do objeto na classe
    constructor(private http: HttpClient) { }

    //Priorizar o uso de 'string' em minusculo por haver mais beneficios
    //e facilidades no seu uso do que usar 'String'
    listFromUser(userName: string){

        return this.http
            .get<Photo[]>(API + '/'+ userName +'/photos');

    }
    

}