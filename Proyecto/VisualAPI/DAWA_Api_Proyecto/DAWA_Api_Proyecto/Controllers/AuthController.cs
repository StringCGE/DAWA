using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DAWA_Api_Proyecto.Data;
using DAWA_Api_Proyecto.Models;
using Microsoft.AspNet.OData;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Mvc.Rendering;

using System.Text;
//using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace DAWA_Api_Proyecto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private static string Llave { get; set; } = "EstaEsMillaveGeneradaAleatoriamente_SeSupone";
        public AuthController(ApplicationDbContext context, IConfiguration config)
        {
            _context = context;
            Llave = config.GetSection("settings").GetSection("secretkey").Value;
        }

        [HttpGet, Authorize]
        [EnableQuery]
        public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios()
        {
            if (_context.Usuarios == null)
            {
                return NotFound();
            }
            return await _context.Usuarios.ToListAsync();
        }

        // GET: api/Usuarioss/5
        [HttpGet("{id}"), Authorize]
        public async Task<ActionResult<Usuario>> GetUsuarios(int id)
        {
            try
            {
                if (_context.Usuarios == null)
                {
                    return BadRequest("No se encontraron entidades.");
                }

                var result = await _context.Usuarios.FindAsync(id);
                if (result != null)
                {
                    return result;
                }
                else
                {
                    return BadRequest("No existe usuario con ese id");
                }

            }
            catch (Exception ex)
            {
                return BadRequest("Error interno: " + ex);
            }
        }




        [HttpPost("login")]
        public async Task<ActionResult<Token>> Login(/*[FromBody]*/ UsuarioLogin ulog)
        {
            try
            {
                if (ulog is not null)
                {
                    if (string.IsNullOrWhiteSpace(ulog.Email))
                    {
                        return Errror("Email vacio");
                    }
                    string usuario = ulog.Email.Trim().ToUpper();

                    //busca por email del usuarios;
                    var _Usu = await _context.Usuarios
                        .Where(u1 =>
                        u1.Email.Trim().ToUpper().Equals(usuario
                        ))
                        .FirstOrDefaultAsync();
                    //var _Usu = await _context.Usuarios
                    //    .Where(u1 => WhereAlgo(u1, usuario))
                    //    .FirstOrDefaultAsync();
                    //
                   if (string.IsNullOrWhiteSpace(ulog.Psw))
                    {
                        return Errror("Psw vacio");
                    }
                    if (_Usu != null) {
                        return ValidarPassword(_Usu, ulog.Psw); 
                    }
                    else { 
                        return BadRequest("Credenciales inválidas!"); 
                    }
                }
                else
                {
                    return BadRequest("Variable Login fue null");
                }
                    
            }
            catch (Exception ex)
            {
                return Exception(ex);
            }
        }

        //[HttpPost("generar_hash/{valor}")]
        //[AllowAnonymous]
        //public ActionResult<string> GetHASh____(string valor)
        //{
        //    return null;//APIParameters.Encript(valor, APIParameters.Salt);
        //}

        private Boolean ComparePsw(string DBPsw, String PSW)
        {
            return DBPsw == PSW;
        }

        

        private ActionResult<Token> ValidarPassword(Usuario usuario, String psw)
        {
            if (usuario is not null)
            {
                if (string.IsNullOrWhiteSpace(usuario.Psw))
                {
                    return Errror("Psw vacio");
                }
                if (ComparePsw(usuario.Psw, psw))
                {
                    if (string.IsNullOrWhiteSpace(usuario.Email))
                    {
                        return Errror("Email vacio");
                    }
                    if (string.IsNullOrWhiteSpace(usuario.Roll))
                    {
                        return Errror("Roll vacio");
                    }
                    if (string.IsNullOrWhiteSpace(usuario.Nombres))
                    {
                        return Errror("Nombres vacio");
                    }
                    // Construimos el token y retornamos Claims
                    var arrayClaims = new Claim[] {
                        //new Claim(ClaimTypes.Email, usuario.Email),
                        //new Claim(ClaimTypes.Role, usuario.Roll),
                        //new Claim(ClaimTypes.Name, usuario.Nombres),
                        //new Claim(ClaimTypes.NameIdentifier, usuario.Id.ToString())
                        new Claim("email", usuario.Email),
                        new Claim("role", usuario.Roll),
                        new Claim("name", usuario.Nombres),
                        new Claim("id", usuario.Id.ToString())
                    };
                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Llave));
                    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                    var expiration = DateTime.UtcNow.AddHours(1);
                    JwtSecurityToken token = new(
                       issuer: usuario.Nombres,
                       audience: null,
                       expires: expiration,
                       claims: arrayClaims,
                       signingCredentials: creds
                    );
                    //Acciones_de_login(usuario, _context);
                    return Ok(new Token(new JwtSecurityTokenHandler().WriteToken(token)));
                }
                else
                {
                    return Nologin();
                }
            }
            else
            {
                return Nologin();
            }
        }
        

        //public async Task<ActionResult<Factura>> PostFactura(Factura Factura)
        //{
        //    if (_context.Facturas == null)
        //    {
        //        return Problem("Entity set 'ApplicationDbContext.Facturas'  is null.");
        //    }
        //    _context.Facturas.Add(Factura);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetFactura", new { id = Factura.Id }, Factura);
        //}

        protected BadRequestObjectResult Errror(string msg)
        {
            return BadRequest("Error al iniciar sesion Debug " + msg);
        }
        protected BadRequestObjectResult Nologin()
        {
            return BadRequest("Error al iniciar sesion");
        }
        protected BadRequestObjectResult Exception(Exception ex)
        {
            return BadRequest("Error en el servidor: " + ex);
        }

        protected Boolean WhereAlgo(Usuario ulog, string usuario)
        {
            if (ulog is not null)
            {
                if (string.IsNullOrWhiteSpace(ulog.Email))
                {
                    return false;
                }
                return ulog.Email.Trim().ToUpper().Equals(usuario);
            }
            else
            {
                return false;
            }
        }
    }
}
