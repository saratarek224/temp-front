import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ITemperature } from './interfaces/ITemperature';
import { ITemperatureItem } from './interfaces/ITemperatureItem';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  _url:string= "localhost:8084/temperatures"
  constructor(private http : HttpClient) { }

  getAllTemps():Observable<ITemperature[]>
  {
    return this.http.get<ITemperature[]>(this._url).pipe(catchError((err)=>
    {
      return throwError(()=>err.message || "Server error")
    }))
  }

  addTemperature(temp:String)
  {
    return this.http.post(this._url,temp).pipe(catchError((err)=>
    {
      return throwError(()=>err.message || "Server error")
    }))
  }

  getTemperature(deviceId:Number):Observable<ITemperatureItem[]>
  {
    return this.http.get(this._url+`/${deviceId}`).pipe(catchError((err)=>
    {
      return throwError(()=>err.message || "Server error")
    }))
  }

}

