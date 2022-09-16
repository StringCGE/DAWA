using System.ComponentModel.DataAnnotations;

namespace DAWA_Api_Proyecto.Models
{
    public class Item_ropa
    {
        public Item_ropa()
        {
            Init();
        }
        public Item_ropa(int id, string? nombre, int precio, int stock, string? srcImg, int cantidad, string? codigo, int preciooferta, string? detalle)
        {
            Id = id;
            Nombre = nombre;
            Precio = precio;
            Stock = stock;
            SrcImg = srcImg;
            Cantidad = cantidad;
            Codigo = codigo;
            Preciooferta = preciooferta;
            Detalle = detalle;
            Init();
        }
        protected void Init()
        {
            
        }
        [Key]
        public int Id { get; set; }
        [Required]
        public string? Nombre { get; set; }
        [Required]
        public int Precio { get; set; }
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



    }
}
