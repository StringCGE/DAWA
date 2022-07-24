export class ItemRopa {
    constructor(id?:number, nombre?:string, precio?:number, stock?:number, srcimg?:string, cantidad?: number, codigo?:string, preciooferta?:number){
        this.id = id || 0;
        this.nombre = nombre || "";
        this.precio = precio || 0;
        this.stock = stock || 0;
        this.srcimg = srcimg || "";
        this.cantidad = cantidad || 0;
        this.codigo = codigo || "";
        this.preciooferta = preciooferta || 0;
    }
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    srcimg: string;
    cantidad: number;
    codigo: string;
    preciooferta: number;
}
