using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAWA_Api_Proyecto.Models
{
    public class Item_ropa
    {
        public Item_ropa()
        {
            Init();
        }

        public Item_ropa(int id, Grupo? grupo, string? nombre, double precio, int stock, string? srcImg, int cantidad, string? codigo, double preciooferta, string? detalle, int eliminado)
        {
            Id = id;
            Grupo = grupo;
            Nombre = nombre;
            Precio = precio;
            Stock = stock;
            Srcimg = srcImg;
            Cantidad = cantidad;
            Codigo = codigo;
            Preciooferta = preciooferta;
            Detalle = detalle;
            Eliminado = eliminado;

            Init();
        }

        protected void Init()
        {

        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        protected Grupo? grupo;
        [ForeignKey("Grupoid"), Required]
        public virtual Grupo? Grupo { get => grupo; set {
                if (value != null) {
                    Grupoid = value.Id;
                }
                else
                {
                    Grupoid = 0;
                }
            }
        }
        public int Grupoid { get; set; } = 0;
        [Required]
        public string? Nombre { get; set; }
        [Required]
        public double Precio { get; set; }
        [Required]
        public int Stock { get; set; }
        [Required]
        public string? Srcimg { get; set; }
        [Required]
        public int Cantidad { get; set; }
        [Required]
        public string? Codigo { get; set; }
        [Required]
        public double Preciooferta { get; set; }
        [Required]
        public string? Detalle { get; set; }
        [Required]
        public int Eliminado { get; set; }



    }
}
