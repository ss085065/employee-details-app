import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isObservable, Observable } from 'rxjs';

interface ItemsResponseObj {
    title: string,
    description: string,
    name: string
}

interface ItemsResponse {
    shows: Array<ItemsResponseObj>;
}

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    getData(): Observable<ItemsResponse> {
        return this.http.get<ItemsResponse>('api/api-data.json')
    }

}
