using System.ComponentModel.DataAnnotations;
namespace DAWA_Api_Proyecto.Models
{
    public class ItemRopaCarrito
    {
        public ItemRopaCarrito()
        {
            Init();
        }
        public ItemRopaCarrito(int Id, int Cantidad)
        {
            this.Id = Id;
            this.Cantidad = Cantidad;
            Init();
        }
        protected void Init()
        {

        }
        [Key]
        public int Id { get; set; }
        [Required]
        public int Cantidad { get; set; }
    }
}
