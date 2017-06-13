import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { AllPhian } from "../models/allphians.model";

const URL_Allphians = 'api/allphians';

@Injectable()
export class AllPhianService {

    constructor(private _http: Http) { }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    getAllPhians(): Observable<AllPhian[]> {
        return this._http.get(URL_Allphians)
            .do((response: Response) => console.log(response))
            .map(this.extractData)
            .catch(this._handleError);
    }

    getAllPhian(allphianID: number): Observable<AllPhian> {
        return this._http.get(URL_Allphians+"/"+allphianID)
            .do((response: Response) => console.log(response))
            .map(this.extractData)
            .catch(this._handleError);
    }

      _handleError(err: any) {
        console.log(err);
        return Observable.throw(err);
    }
}