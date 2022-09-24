export class ItemRopa {
    constructor(id?:number, grupo?:number, nombre?:string, precio?:number, stock?:number, _srcimg?:string, cantidad?: number, codigo?:string, preciooferta?:number, detalle?:string, eliminado?:number){
        this.id = id || 0;
        this.grupo = grupo || 0;
        this.nombre = nombre || "";
        this.precio = precio || 0;
        this.stock = stock || 0;
        this.srcimg = _srcimg || "";
        this.cantidad = cantidad || 0;
        this.codigo = codigo || "";
        this.preciooferta = preciooferta || 0;
        this.detalle = detalle || "";
        this.eliminado = eliminado || 0;
    }
    id: number;
    grupo: number;
    nombre: string;
    precio: number;
    stock: number;
    srcimg: string;
    cantidad: number;
    codigo: string;
    preciooferta: number;
    detalle: string;
    eliminado: number;
}
