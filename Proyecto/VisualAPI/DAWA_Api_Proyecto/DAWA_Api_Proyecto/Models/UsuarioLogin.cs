namespace DAWA_Api_Proyecto.Models
{
    public class UsuarioLogin
    {
        public UsuarioLogin()
        {

        }
        public UsuarioLogin(string? email, string? psw)
        {
            Email = email;
            Psw = psw;
        }
        protected void Init()
        {

        }
        public string? Email { get; set; }
        public string? Psw { get; set; }
    }
}
