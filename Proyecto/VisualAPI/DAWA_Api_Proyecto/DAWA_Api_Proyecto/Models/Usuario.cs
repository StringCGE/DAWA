using System.ComponentModel.DataAnnotations;
namespace DAWA_Api_Proyecto.Models
{
    public class Usuario
    {
        public Usuario()
        {

        }

        public Usuario(int id, string? cedula, string? nombres, string? apellidos, string? direccion, int edad, string? email, string? psw, string? roll, int eliminado)
        {
            Id = id;
            Cedula = cedula;
            Nombres = nombres;
            Apellidos = apellidos;
            Direccion = direccion;
            Edad = edad;
            Email = email;
            Psw = psw;
            Roll = roll;
            Eliminado = eliminado;
        }

        protected void Init()
        {

        }
        [Key]
        public int Id { get; set; }
        [Required]
        public string? Cedula { get; set; }
        [Required]
        public string? Nombres { get; set; }
        [Required]
        public string? Apellidos { get; set; }
        [Required]
        public string? Direccion { get; set; }
        [Required]
        public int Edad { get; set; }
        [Required]
        public string? Email { get; set; }
        [Required]
        public string? Psw { get; set; }
        [Required]
        public string? Roll { get; set; }
        [Required]
        public int Eliminado { get; set; }

    }
}
