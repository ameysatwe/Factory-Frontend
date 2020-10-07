import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HelperService {
    readonly rootUrl: string;

    constructor(private http: HttpClient) {
        this.rootUrl = 'http://127.0.0.1:8000/';
    }
    getQueue(url: string): Observable<any> {
        return this.http.get(`${this.rootUrl}${url}/`);
    }
}
