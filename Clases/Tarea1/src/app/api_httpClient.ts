import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
export class api_httpClient{
    constructor(private http:HttpClient, private url:string){

    }
    public consultarGet(dir:string):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.token}`,
          'Accept':'application/json'
        })
      }
        httpOptions.headers.append('Access-Control-Allow-Origin', '*');
        return this.http.get<any>(this.url + dir, httpOptions);
    }


    getEstaLogueado(token:string): Observable<any>{
        console.log("getEstaogueado: " + token)
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-type': 'application/json',
            'Authorization': `Bearer ${this.token}`,
            'Accept':'application/json'
          })
        }
        //httpOptions.headers = httpOptions.headers.append('Authorization', `Bearer ${token}`);//esto no funciona ya que ese headers es inmutable, efe en el httpclient
        const fd= new FormData;
        return this.http
          .get<any>(this.url + "api/tokenvalido", {
            headers:httpOptions.headers
          }
        );
      }
}
