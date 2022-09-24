import { EventEmitter, Injectable, Output } from '@angular/core';
import { ItemRopaInterface } from './interfaces/item-ropa-interface';
import { ItemRopaCarritoInterface } from './interfaces/item-ropa-carrito-interface'
import { ItemRopaCarrito } from './clase/item-ropa-carrito'
import { ItemRopa } from './clase/item-ropa'
//import { api_httpClient } from './api_httpClient'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';
import { LoginI } from './interfaces/LoginI';
import { EstalogueadoService } from './estalogueado.service';
import { Usuario } from './clase/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  @Output() cambioHombre: EventEmitter<ApiService> = new EventEmitter();
  @Output() cambioMujer: EventEmitter<ApiService> = new EventEmitter();
  @Output() cambioOferta: EventEmitter<ApiService> = new EventEmitter();
  @Output() cambioColeccion: EventEmitter<ApiService> = new EventEmitter();
  @Output() cambioCarrito: EventEmitter<ApiService> = new EventEmitter();

  @Output() cambio_login: EventEmitter<ApiService> = new EventEmitter();

  //private http_cli:api_httpClient;
  url:string
  public token:string = "";
  public proforma:number = -1;
  public usuario:Usuario;

  SetUsuario(value:any){
    console.log("Desde getUsuario");
    this.usuario = value;
    this.estalog.SetUsuario(value);
    this.cambio_login.emit(this);
  }
  constructor(private http:HttpClient, private estalog:EstalogueadoService) {
    //this.http_cli = new api_httpClient(http,"http://192.168.35.150:2500/");
    //this.url = "http://192.168.35.150:2500/";
    this.url = "http://ugelo.ddns.net:2500/";
    console.log("ApiService.constructor");
    
  }
  EstaLogueado():boolean{
    return this.estalog.estado();
  }
  protected lItemRopaCarrito:ItemRopaCarrito[] = [];
  protected lItemRopa:ItemRopa[] = [];
  protected lItemRopaMujer:ItemRopa[] = [];
  protected lItemRopaOferta:ItemRopa[] = [];
  protected lItemRopaColeccion:ItemRopa[] = [];

  public Hombre_GetItem(id:number) : ItemRopa{
    let l:ItemRopa;
    l = new ItemRopa();
    this.lItemRopa.forEach(function (value) {
      if(value.id == id){
        l = value;
      }
    });
    return l;
  }
  public Hombre_GetItems():Observable<any>{
    return this.consultarGet("api/Item_ropa/porGrupo/1");
    //return this.http_cli.consultarGet("api/Item_ropa/porGrupo/1"); //Esta cosa me dio errror NG0200 Circular dependency in DI
  }
  public Mujer_GetItems():Observable<any>{
    return this.consultarGet("api/Item_ropa/porGrupo/2");
  }
  public Oferta_GetItems():Observable<any>{
    return this.consultarGet("api/Item_ropa/porGrupo/3");
  }
  public Coleccion_GetItems():Observable<any>{
    return this.consultarGet("api/Item_ropa/porGrupo/4");
  }
  // public Coleccion_GetItems() : ItemRopa[]{
  //   return this.lItemRopaColeccion;
  // }
  public GetUsuarioByToken():Observable<any>{
    var dir:string = `api/Usuario/GetUsuarioByToken`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    console.log("this.token");
    console.log(this.token);
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(this.url + dir, httpOptions);
  }

  public GetProforma():Observable<any>{
    var dir:string = `api/Factura/getProforma/${this.usuario.id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Autorization': `Bearer ${this.token}`
      })
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post<any>(this.url + dir, httpOptions)
      .pipe(
        filter((value:any) => {
          console.log("Guardando token");
          this.token = value.value;
          console.log(this.token);
          this.proforma = value;
          this.estalog.proformaid = value;
          console.log("this.proforma");
          console.log(this.proforma);
            return true;
          }
        )/*,
        map((value:any)=>{
          
          if ((typeof value) == "undefined"){
            return false;
          }
          return true;
        })*/
      );
  }

  public GetItemsPorProforma():Observable<any>{
    var dir:string = `api/ItemRopaCarrito/proforma/${this.proforma}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Autorization': `Bearer ${this.token}`
      })
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(this.url + dir, httpOptions);
  }

  public CarritoItemRopa_GetItems() : Observable<any>{
    // let l: ItemRopa[] = [];
    // let laux: ItemRopa[] = [];
    // laux = this.lItemRopa.concat(this.lItemRopaOferta, this.lItemRopaMujer, this.lItemRopaColeccion);
    // console.log("laux");
    // console.log(laux);
    // this.lItemRopaCarrito.forEach((itemrc)=>{
    //   laux.forEach((itemr)=>{
    //     if(itemr.id == itemrc.id){
    //       l.push(new ItemRopa(
    //         itemr.id,
    //         itemr.grupo,
    //         itemr.nombre,
    //         itemr.precio,
    //         itemr.stock,
    //         itemr.srcimg,
    //         itemrc.cantidad,
    //         itemr.codigo
    //       ));
    //     }
    //   });
    // });
    //eturn l;

    var dir:string = "api/Item_ropa";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
        'Accept':'application/json'
      })
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(this.url + dir, httpOptions)
    .pipe(
      map((value:any)=>{
        return value;
      })
    )

    //return this.http.post<any>(this.url + dir, "", httpOptions);

    
  }
  public Carrito_GetItems() : ItemRopaCarrito[]{
    return this.lItemRopaCarrito;
  }
  private eventoHombre(){
    this.cambioHombre.emit(this);
  }
  private eventoMujer(){
    this.cambioMujer.emit(this);
  }
  private eventoOferta(){
    this.cambioOferta.emit(this);
  }
  private eventoColeccion(){
    this.cambioColeccion.emit(this);
  }
  private eventoCarrito(){
    this.cambioCarrito.emit(this);
  }

  public AñadirItemCarrito(ir:ItemRopaCarritoInterface){
    console.log("AñadirItemCarrito");
    var dir:string = `api/ItemRopaCarrito`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
        'Accept':'application/json'
      })
    }
    let obj:Observable<any> = this.http.post<any>(this.url + dir, {
      id:0,
      cantidad:ir.cantidad,
      facturaid:this.estalog.proformaid,
      itemid:ir.id
    }, httpOptions);
    obj.subscribe(
      {
        next: (dato:any)=>{
          console.log("Añadir carrito");
          console.log(dato);
        },
        error: (e) => {
          console.log("Añadir carrito failure");
          console.log(e);
        },
        complete: () => {
    
        } 
      }
    );
    alert("Añadido al carrito");
    this.eventoCarrito();
  }
  public EliminarItemCarrito(ir:ItemRopaCarritoInterface){
    
    console.log("Eliminaritem,mCarrito");
    var dir:string = `api/ItemRopaCarrito/${ir.id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
        'Accept':'application/json'
      })
    }
    let obj:Observable<any> = this.http.delete<any>(this.url + dir, httpOptions);
    obj.subscribe(
      {
        next: (dato:any)=>{
          console.log("Eliminar carrito OK");
          console.log(dato);
        },
        error: (e) => {
          console.log("Añadir carrito failure");
          console.log(e);
        },
        complete: () => {
    
        } 
      }
    );

    this.eventoCarrito();
    console.log("Eliminar de carrito");
    console.log(this.lItemRopa);
  }

  // public AñadirItemCarrito(ir:ItemRopaCarritoInterface){
  //   let bo : boolean = false;
  //   for(let i = 0; i < this.lItemRopaCarrito.length; i++){
  //     if(this.lItemRopaCarrito[i].id == ir.id){
  //       bo = true;
  //       this.lItemRopaCarrito[i].cantidad = this.lItemRopaCarrito[i].cantidad + ir.cantidad;
  //     }
  //   };
  //   if(!bo){
  //     //this.lItemRopaCarrito.push(ir);
  //   }
  //   alert("Añadido al carrito");
  //   this.eventoCarrito();
  // }
  // public EliminarItemCarrito(ir:ItemRopaCarritoInterface){
  //   this.remove(ir);
  //   this.eventoCarrito();
  //   console.log("Eliminar de carrito");
  //   console.log(this.lItemRopa);
  // }
  protected remove(ir:ItemRopaCarritoInterface){
    this.lItemRopaCarrito =
      this.lItemRopaCarrito.filter(function(value_ir) { 
        return value_ir.id !== ir.id 
      });
    /*var arreglo = [1,2,3,4,5];
    var indice = arreglo.indexOf(3); // obtenemos el indice
    arreglo.splice(indice, 1); // 1 es la cantidad de elemento a eliminar
    
    console.log( arreglo );
    var arreglo = [1,2,3,4,5];
    arreglo = arreglo.filter(function(i) { return i !== 3 }); // filtramos
    console.log( arreglo );*/
  }



  public consultarGet(dir:string):Observable<any>{
    const httpOptions = {
        headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(this.url + dir, httpOptions);
  }
  
  private post(dir:string, value:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
        'Accept':'application/json'
      })
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    //  httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post<any>(this.url + dir, value, httpOptions);
  }
  

  login(form:LoginI):Observable<any>{
    console.log("login");
    var dir:string = "api/Auth/login";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
        'Accept':'application/json'
      })
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    //  httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post<any>(this.url + dir, {
      email:form.usuario,
      psw:form.password
    }, httpOptions)
    .pipe(
      filter((value:any) => {
        console.log("Guardando token");
        this.token = value.value;
        console.log(this.token);
          return true;
        }
      ),
      map((value:any)=>{
        
        if ((typeof value) == "undefined"){
          return false;
        }
        return true;
      })
    )
    /*return this.api.getEstaLogueado(this.pers.getUsuario().token).pipe(
        
      );*/;

    //return this.http.post<any>(this.url + dir, "", httpOptions);
  }
  private consultarPost(dir:string, value:any):Observable<any>{
    console.log("Consultar post");
    var token:string  = "";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
        'Accept':'application/json'
      })
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    //  httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post<any>(this.url + dir, value, httpOptions);
  }
  // public loguear(usuario : string, psw: string):Observable<any> {
  //   // let bo:boolean = false;
  //   // this.lUsuarios.forEach((value)=>{
  //   //   if(value.email == usuario){
  //   //     if(value.psw == psw){
  //   //       bo = true;
  //   //     }
  //   //   }
  //   // })
  //   // if (bo){
  //   //   this.usuario = usuario;
  //   //   this.estalogueado = true;
  //   //   this.evento();
  //   //   return true;
  //   // }
  //   //return null;
  // }
}
