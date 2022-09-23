using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public int Cantidad { get; set; }
        protected Factura? factura;
        [ForeignKey("Facturaid"), Required]
        public Factura? Factura {
            get => factura; set
            {
                if (value != null)
                {
                    Facturaid = value.Id;
                }
                else
                {
                    Facturaid = 0;
                }
            }
        }
        [Required]
        public int? Facturaid { get; set; }
    }
}
