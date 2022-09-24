using System.ComponentModel.DataAnnotations;
namespace DAWA_Api_Proyecto.Models
{
    public class Token
    {
        public Token(string? value)
        {
            this.value = value;
        }
        public string? value { get; set; }
    }
}
