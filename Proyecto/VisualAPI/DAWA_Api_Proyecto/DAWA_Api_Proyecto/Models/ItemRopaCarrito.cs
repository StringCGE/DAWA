using System.ComponentModel.DataAnnotations;
namespace DAWA_Api_Proyecto.Models
{
    public class ItemRopaCarrito
    {
        public ItemRopaCarrito()
        {
            Init();
        }
        public ItemRopaCarrito(int id, int cantidad)
        {
            this.id = id;
            this.cantidad = cantidad;
            Init();
        }
        protected void Init()
        {

        }
        [Key]
        public int id { get; set; }
        [Required]
        public int cantidad { get; set; }
    }
}
