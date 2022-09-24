using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAWA_Api_Proyecto.Models
{
    public class Grupo
    {
        public Grupo()
        {
            Id = -1;
            Nombre = "";
            Eliminado = 0;
        }
        public Grupo(int id, string? nombre, int eliminado)
        {
            Id = id;
            Nombre = nombre;
            Eliminado = eliminado;
        }
        
        [System.ComponentModel.DataAnnotations.Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string? Nombre { get; set; }
        [Required]
        public int Eliminado { get; set; }

        //public virtual ICollection<Item_ropa>? Item_ropa { get; set; }
    }
}
