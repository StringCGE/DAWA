import { EventEmitter, Injectable, Output } from '@angular/core';
import { ItemRopaInterface } from './interfaces/item-ropa-interface';
import { ItemRopaCarritoInterface } from './interfaces/item-ropa-carrito-interface'
import { ItemRopaCarrito } from './clase/item-ropa-carrito'
import { ItemRopa } from './clase/item-ropa'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  @Output() cambioHombre: EventEmitter<ApiService> = new EventEmitter();
  @Output() cambioMujer: EventEmitter<ApiService> = new EventEmitter();
  @Output() cambioOferta: EventEmitter<ApiService> = new EventEmitter();
  @Output() cambioColeccion: EventEmitter<ApiService> = new EventEmitter();
  @Output() cambioCarrito: EventEmitter<ApiService> = new EventEmitter();
  constructor() { }
  protected lItemRopaCarrito:ItemRopaCarrito[] = [];
  protected lItemRopa:ItemRopa[] = [
    new ItemRopa(1,"Gracias",29.00,13,"../../assets/img/seccion-hombre/item_01.jpg",13),
    new ItemRopa(2,"Roopa",35.50,22,"../../assets/img/seccion-hombre/item_02.jpg",22),
    new ItemRopa(3,"Roopa",59.99,145,"../../assets/img/seccion-hombre/item_03.jpg",145),
    new ItemRopa(4,"Roopa",45.00,48,"../../assets/img/seccion-hombre/item_04.jpg",48),
    new ItemRopa(5,"Roopa",35.99,74,"../../assets/img/seccion-hombre/item_05.jpg",74),
    new ItemRopa(6,"Roopa",25.99,62,"../../assets/img/seccion-hombre/item_06.jpg",62),
    new ItemRopa(7,"Roopa",15.99,50,"../../assets/img/seccion-hombre/item_07.jpg",50),
    new ItemRopa(8,"Roopa",5.99,70,"../../assets/img/seccion-hombre/item_08.jpg",70),
    new ItemRopa(9,"Roopa",0.99,28,"../../assets/img/seccion-hombre/item_09.jpg",28),
    new ItemRopa(10,"Roopa",0.09,80,"../../assets/img/seccion-hombre/item_10.jpg",80)
  ];
  protected lItemRopaMujer:ItemRopa[] = [
    new ItemRopa(6001,"Calentador",23.00,20,"../../assets/img/seccion-mujer/item_01.png",13),
    new ItemRopa(6002,"Chompa",40.99,10,"../../assets/img/seccion-mujer/item_02.png",22),
    new ItemRopa(6003,"Calentador",30.00,20,"../../assets/img/seccion-mujer/item_03.png",145),
    new ItemRopa(6004,"Abrigo",50.00,48,"../../assets/img/seccion-mujer/item_04.png",48),
    new ItemRopa(6005,"Camisa de la seleccion",60.99,120,"../../assets/img/seccion-mujer/item_05.png",74),
    new ItemRopa(6006,"Chompa",30.00,24,"../../assets/img/seccion-mujer/item_06.png",62),
    new ItemRopa(6007,"Camisa Barcelona",15.99,35,"../../assets/img/seccion-mujer/item_07.png",50),
    new ItemRopa(6008,"Camisa",15.99,60,"../../assets/img/seccion-mujer/item_08.png",70),
    new ItemRopa(6009,"Calentador",25.50,10,"../../assets/img/seccion-mujer/item_09.png",28),
    new ItemRopa(6010,"Chompa",35.99,12,"../../assets/img/seccion-mujer/item_10.png",80),
    new ItemRopa(6011,"Chompa",25.50,10,"../../assets/img/seccion-mujer/item_11.png",28),
    new ItemRopa(6012,"Short",35.99,12,"../../assets/img/seccion-mujer/item_12.png",80)
  ];
  protected lItemRopaOferta:ItemRopa[] = [
    new ItemRopa(101,"Real Madrid C.F. adidas Camiseta de entrenamiento para Hombres",41.00,30,"assets/img/camisa-rm.jpg",0,"GR4324",29),
    new ItemRopa(102,"Condivo 21 Hombre Pantalones cortos",35.00,45,"assets/img/adidas-pants.jpg",0,"GJ6804",19.99),
    new ItemRopa(103,"HEAD Performance Calcetines tobilleros 2 pares",9.99,82,"assets/img/calcetines.jpg",0,"791019001-870",3.50),
    new ItemRopa(104,"Bayern de Múnich Adidas Hombre Pantalones cortos",35.99,156,"assets/img/bayern-pants.jpg",0,"GM5324",22.99),
    new ItemRopa(105,"Adidas Originals Classics Primeblue SST Hombre Chaqueta",45,124,"assets/img/adidas-buzo.jpg",0,"GF0198",30.00),
    new ItemRopa(106,"Adidas Stadium Niño Chaqueta con capucha",45.00,45,"assets/img/adidas-chaqueta-ninio.jpg",0,"H10163",30.00),
    new ItemRopa(107,"PUMA LIGA 1/4 Zip Hombre Sudadera de entrenamiento",45.00,70,"assets/img/puma-sudadera.jpg",0,"655606-03",20.00),
    new ItemRopa(108,"Jako Striker Mujer Chaqueta de presentación",35.00,152,"assets/img/jako-chaqueta.jpg",0,"D9816-23",21.00),
    new ItemRopa(109,'SportSpar.de "DEALMAKER ONE"',25,38,"assets/img/sneakers.jpg",0,"Sneakers",12.00),
    new ItemRopa(110,"Zeus Mida Pantalones cortos de entrenamiento Marino",35.00,29,"assets/img/zeus-pants.jpg",0,"",30.00),
    new ItemRopa(111,"PUMA LIGA 1/4 Zip Hombre Sudadera de entrenamiento",27.00,94,"assets/img/puma-sudadera2.jpg",0,"",16.00),
    new ItemRopa(112,"HEAD Hiking Unisex Calcetines tobilleros 2 pares",7.50,45,"assets/img/calcetines-tobilleros.jpg",0,"781001001-857",3.50),
    new ItemRopa(113,"Olympique de Marsella PUMA Niño Camiseta",25.00,23,"assets/img/marsella-shirt.jpg",0,"757046-01",16.00),
    new ItemRopa(114,"Bayer 04 Leverkusen Jako Camiseta",29.00,18,"assets/img/leverkusen-shirt.jpg",0,"BA4221H-681",19.99),
    new ItemRopa(115,"Mizuno Visera J2GW0R05Z-29",15.00,52,"assets/img/visera.jpg",0,"J2GW0R05Z-29",7.00)
  ];
  protected lItemRopaColeccion:ItemRopa[] = [
    new ItemRopa(3001, 'Conjunto deportivo Adidas: Color negro', 50, 20, 'assets/img/Conjunto1.png', 0, 'cl32165', 30, 'La colección de esta temporada de ADIDAS es oscura, sombría y poderosa. Con bolsillos laterales para guardar cosas, tecnología de absorción de la humedad para un mejor control de la temperatura, esta Chamarra de fútbol vistosa es perfecta para ti.'),
    new ItemRopa(3002, 'Conjunto deportivo Adidas: Color negro y blanco', 50, 35, 'assets/img/Conjunto2.png', 0, 'cl54453', 30, 'Este conjunto se inspira en la combinación del diseño romántico y vanguardista de Kahlo. Tiene bordados magníficos y bordes fruncidos yuxtapuestos con materiales deportivos de alto performance.'),
    new ItemRopa(3003, 'Conjunto deportivo Jordan: Color negro y rojo', 50, 94, 'assets/img/Conjunto10.png', 0, 'cl68572', 30, 'Este modelo cómodo y acogedor incluye un logotipo llamativo en el pecho que es toda una declaración. Está equipado con puños elasticados para mantener el calor en la pista de skate o en la calle. Para que vistas con estilo sin ningún esfuerzo.'),
    new ItemRopa(3004, 'Conjunto deportivo Jordan PSG: Color purpura', 50, 12, 'assets/img/Conjunto4.png', 0, 'cl15812', 30, 'Recopilamos nuestros diseños más queridos para nuestra colección,que presenta accesorios modernos con un estilo incomparable,presenta llamativos bloques de color, una fabricación suave y gráficos que seguramente llamarán la atención.'),
    new ItemRopa(3005, 'Conjunto deportivo Nike: Color azul', 50, 54, 'assets/img/Conjunto5.png', 0, 'cl56465', 30, 'Nike se asoció con la marca de ropa de BUTTER para crear este cortaviento ligero, diseñado para mantenerte cómodo y con estilo en cualquier situación.Crea un look que resalta, y un diseño con un cuello y abrigadores.'),
    new ItemRopa(3006, 'Conjunto deportivo Nike: Color azul marino', 50, 92, 'assets/img/Conjunto7.png', 0, 'cl98463', 30, 'Nuestro cojunto estampado con gorra está hecho 100% de algodón y con detalles llamativos de marca NIKE. Tiene un práctico bolsillo estilo canguro y una gorra ajustable. Es el Sudadera con el diseño perfecto para los que están atentos a la moda. '),
    new ItemRopa(3007, 'Conjunto deportivo Adidas: Color negro y blanco', 50, 32, 'assets/img/Conjunto8.png', 0, 'cl64278', 30, 'Cuando se trata de jugar, nada es tan importante como tu equipo. Enfréntate a tus rivales con la comodidad y estilo insuperables de nuestro conjunto. Este conjunto con gorra refinado está diseñado pensando en los gamers.'),
    new ItemRopa(3008, 'Conjunto deportivo Jordan: Color negro y purpura', 50, 19, 'assets/img/Conjunto9.png', 0, 'cl32175', 30, 'Todo guardarropa necesita una conjunto con gorra clásica, y esta edición de JORDAN de un básico de ropa informal es absolutamente imprescindible.Con un amplio bolsillo canguro para almacenamiento y una práctica gorra ajustable para mayor comodidad. '),
    new ItemRopa(3009, 'Indumentaria Lakers', 60, 72, 'assets/img/Basquet1.png', 0, 'cl12484', 40, 'Equipo completo de colección de Angeles Lakers, número 24 de Kobe Byrant.'),
    new ItemRopa(3010, 'Indumentaria Suns', 60, 25, 'assets/img/Basquet2.png', 0, 'cl47854', 40, 'Diseño personalizado equipos Suns alterno, año 2017.'),
    new ItemRopa(3011, 'Indumentaria Porlant', 60, 29, 'assets/img/Basquet3.png', 0, 'cl65746', 40, 'Camiseta retro de los Porlant, usada actualmente por el jugador Damian Lillard.'),
    new ItemRopa(3012, 'Leggins Adidas color celeste', 25, 14, 'assets/img/Mas.png', 0, 'cl54423', 20, 'Feroces amantes de la moda, esta es para ti. Diseñados para aquellos que se atreven a sobresalir entre la multitud,Un atrevido estampado integral compuesto con materiales reciclados, una moda de la que puedes estar realmente orgulloso de lucir.'),
    new ItemRopa(3013, 'Leggins Jordan color plomo', 25, 2, 'assets/img/Mas1.png', 0, 'cl87483', 20, 'Estos leggings impactantes tienen estampados gráficos sofisticados inspirados en el arte floral. Están confeccionados con un material flexible en las cuatro direcciones y tecnología de absorción de la humedad.'),
    new ItemRopa(3014, 'Leggins nike color azul', 25, 50, 'assets/img/Mas2.png', 0, 'cl65575', 20, 'Lleva tu estilo personal a otro nivel con nuestros leggings de training estampados de largo 7/8 y cintura alta. Estos leggings de alto performance están diseñados para ser duraderos, cómodos y para brindarte una elasticidad multidireccional.')
  ];

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
  public Hombre_GetItems() : ItemRopa[]{
    return this.lItemRopa;
  }
  public Mujer_GetItems() : ItemRopa[]{
    return this.lItemRopaMujer;
  }
  public Oferta_GetItems() : ItemRopa[]{
    return this.lItemRopaOferta;
  }
  public Coleccion_GetItems() : ItemRopa[]{
    return this.lItemRopaColeccion;
  }
  public CarritoItemRopa_GetItems() : ItemRopa[]{
    let l: ItemRopa[] = [];
    let laux: ItemRopa[] = [];
    laux = this.lItemRopa.concat(this.lItemRopaOferta, this.lItemRopaMujer, this.lItemRopaColeccion);
    console.log("laux");
    console.log(laux);
    this.lItemRopaCarrito.forEach((itemrc)=>{
      laux.forEach((itemr)=>{
        if(itemr.id == itemrc.id){
          l.push(new ItemRopa(
            itemr.id,
            itemr.nombre,
            itemr.precio,
            itemr.stock,
            itemr.srcimg,
            itemrc.cantidad,
            itemr.codigo
          ));
        }
      });
    });
    return l;
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
    let bo : boolean = false;
    for(let i = 0; i < this.lItemRopaCarrito.length; i++){
      if(this.lItemRopaCarrito[i].id == ir.id){
        bo = true;
        this.lItemRopaCarrito[i].cantidad = this.lItemRopaCarrito[i].cantidad + ir.cantidad;
      }
    };
    if(!bo){
      this.lItemRopaCarrito.push(ir);
    }
    alert("Añadido al carrito");
    this.eventoCarrito();
  }
  public EliminarItemCarrito(ir:ItemRopaCarritoInterface){
    this.remove(ir);
    this.eventoCarrito();
    console.log("Eliminar de carrito");
    console.log(this.lItemRopa);
  }
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
}
