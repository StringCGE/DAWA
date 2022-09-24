using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAWA_Api_Proyecto.Models
{
    public class TokenDB
    {
        public TokenDB(string? value)
        {
            this.value = value;
        }
        public TokenDB(int id, string? value, int eliminado)
        {
            Id = id;
            this.value = value;
            Eliminado = eliminado;
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string? value { get; set; }
        [Required]
        public int Eliminado { get; set; }
    }
}
