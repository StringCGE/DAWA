using System.ComponentModel.DataAnnotations;
namespace DAWA_Api_Proyecto.Models
{
    public class ItemRopaCarrito
    {
        public ItemRopaCarrito()
        {
            Init();
        }

        public ItemRopaCarrito(int id, int cantidad, Factura? factura)
        {
            Id = id;
            Cantidad = cantidad;
            Factura = factura;
        }

        protected void Init()
        {

        }
        [Key]
        public int Id { get; set; }
        [Required]
        public int Cantidad { get; set; }
        [Required]
        public Factura? Factura { get; set; }
    }
}
