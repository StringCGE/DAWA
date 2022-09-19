using System.ComponentModel.DataAnnotations;
namespace DAWA_Api_Proyecto.Models
{
    public class Factura
    {
        //public Factura(int id, Usuario? usuario, int eliminado)
        //{
        //    Id = id;
        //    Usuario = usuario;
        //    Eliminado = eliminado;
        //}

        [Key]
        public int Id { get; set; }
        [Required]
        public Usuario? Usuario { get; set; }
        [Required]
        public int Eliminado { get; set; }
    }
}
