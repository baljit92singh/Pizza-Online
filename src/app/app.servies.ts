import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppServices {
    private jsonUrl = '/assets/server/save-data.php';
    handleError(arg0: any): any {
        throw new Error("Method not implemented.");
    }
    constructor(private http: Http, private newHttp: HttpClient) {
    }
    my_data: any;
    public getResponseData(): Promise<any> {
        if (typeof (this.my_data) === "undefined") {
            return this.http.get('assets/server/pizza.json')
                .toPromise().then(res => {
                    this.my_data = res.json().response;
                    return this.my_data;
                }).catch(this.handleError);
        } else {
            return Promise.resolve(this.my_data);
        }

    }
    sendJson(form): Observable<any> {
        return this.newHttp.post('/assets/server/save-data.php', form);
    }

}




