using System.ComponentModel.DataAnnotations;
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

        [Key]
        public int Id { get; set; }
        [Required]
        public string? Nombre { get; set; }
        [Required]
        public int Eliminado { get; set; }
    }
}
