using System.ComponentModel.DataAnnotations;

namespace DAWA_Api_Proyecto.Models
{
    public class Item_ropa
    {
        public Item_ropa()
        {
            Init();
        }

        //public Item_ropa(int id, Grupo? grupo, string? nombre, double precio, int stock, string? srcImg, int cantidad, string? codigo, int preciooferta, string? detalle, int eliminado)
        //{
        //    Id = id;
        //    Grupo = grupo;
        //    Nombre = nombre;
        //    Precio = precio;
        //    Stock = stock;
        //    SrcImg = srcImg;
        //    Cantidad = cantidad;
        //    Codigo = codigo;
        //    Preciooferta = preciooferta;
        //    Detalle = detalle;
        //    Eliminado = eliminado;
        //}

        protected void Init()
        {
            
        }
        [Key]
        public int Id { get; set; }
        [Required]
        public Grupo? Grupo { get; set; }
        [Required]
        public string? Nombre { get; set; }
        [Required]
        public double Precio { get; set; }
        [Required]
        public int Stock { get; set; }
        [Required]
        public string? SrcImg { get; set; }
        [Required]
        public int Cantidad { get; set; }
        [Required]
        public string? Codigo { get; set; }
        [Required]
        public int Preciooferta { get; set; }
        [Required]
        public string? Detalle { get; set; }
        [Required]
        public int Eliminado { get; set; }



    }
}
