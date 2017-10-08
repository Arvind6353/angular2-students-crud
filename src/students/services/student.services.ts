import { Injectable } from '@angular/core';

import {Http, Response} from '@angular/http' 

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Student} from '../interfaces/Student'


@Injectable()
export class StudentService {

apiUrl : string = 'http://localhost:3000';
constructor( private http :Http) {
}
   getStudentsList() :Observable<Student[]> {

        return this.http.get(this.apiUrl+'/students')
                  .map((response : Response ) => response.json())
                  .catch( (error : any) => Observable.throw(error.json().error || 'server error')) 

   } 

    createStudent(student) :Observable<Student> {

        return this.http.post(this.apiUrl+'/students',student)
                  .map((response : Response ) => response.json())
                  .catch( (error : any) => Observable.throw(error.json().error || 'server error')) 

   } 

}