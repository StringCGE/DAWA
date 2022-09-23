using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;

namespace DAWA_Api_Proyecto.Models
{
    public class Factura
    {
        public Factura(int id, Usuario? usuario, string? tipo, int eliminado)
        {
            Id = id;
            Usuario = usuario;
            Tipo = tipo;
            Eliminado = eliminado;
        }

        public Factura(int id, int? usuarioid, string? tipo, int eliminado)
        {
            Id = id;
            Usuarioid = usuarioid;
            Tipo = tipo;
            Eliminado = eliminado;
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [ForeignKey("Usuarioid"), Required]
        public Usuario? Usuario {
            get => usuario; set
            {
                if (value != null)
                {
                    Usuarioid = value.Id;
                }
                else
                {
                    Usuarioid = 0;
                }
            }
        }
        protected Usuario? usuario;
        [Required]
        public string? Tipo { get; set; }
        [Required]
        public int? Usuarioid { get; set; }
        [Required]
        public int Eliminado { get; set; }
    }
}
