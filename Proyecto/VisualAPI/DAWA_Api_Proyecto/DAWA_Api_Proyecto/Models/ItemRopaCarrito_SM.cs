using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAWA_Api_Proyecto.Models
{
    public class ItemRopaCarrito_SM
    {
        public ItemRopaCarrito_SM()
        {
            Init();
        }

        public ItemRopaCarrito_SM(int id, int cantidad, int facturaid, int itemid)
        {
            Id = id;
            Cantidad = cantidad;
            Facturaid = facturaid;
            Itemid = itemid;
        }

        protected void Init()
        {

        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public int Cantidad { get; set; }

        [Required]
        public int Facturaid { get; set; }

        [Required]
        public int Itemid { get; set; }
    }
}
