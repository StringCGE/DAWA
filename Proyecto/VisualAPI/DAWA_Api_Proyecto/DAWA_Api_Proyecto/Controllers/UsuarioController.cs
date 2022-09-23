using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using DAWA_Api_Proyecto.Data;
using DAWA_Api_Proyecto.Models;
using Microsoft.AspNet.OData;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Mvc.Rendering;

using System.IdentityModel.Tokens.Jwt;
using System.Text;
//using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Configuration;

namespace DAWA_Api_Proyecto.Controllers
{

    //Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9

    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsuarioController(ApplicationDbContext context)
        {
            _context = context;
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

        // GET: api/Usuarioss/5 //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("{id}"), Authorize]
        public async Task<ActionResult<Usuario>> GetUsuarios(int id)
        {
            //var id_cli = User.Claims.FirstOrDefault(x => x.Type.ToString().Equals("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/id", StringComparison.InvariantCultureIgnoreCase));
            Claim id_cli;
            foreach (Claim cl in User.Claims){
                if(cl.Type.ToString() == "id")
                {
                    id_cli = cl; break;
                }
            }
           // var id_cli = User.Claims.FirstOrDefault(x =>
           //x.Type.ToString().Equals()"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/" + "id");
           // var id_cli = User.Claims.FirstOrDefault(x =>
           //     true
           // );
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

        // GET: api/Usuarioss/5
        [HttpGet("GetUsuarioByToken"), Authorize]
        public async Task<ActionResult<Usuario>> GetUsuarioByToken()
        {
            //JsonContent.
            //JwtPayload.Deserialize()
            try
            {
                if (_context.Usuarios == null)
                {
                    return BadRequest("No se encontraron entidades.");
                }
                Claim? id_cli = null;
                foreach (Claim cl in User.Claims)
                {
                    if (cl.Type.ToString() == "id")
                    {
                        id_cli = cl; break;
                    }
                }
                if (id_cli is null) return BadRequest("No existe usuario con ese id");
                int _id = Int32.Parse(id_cli.Value);
                var result = await _context.Usuarios.FindAsync(_id);
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


        // PUT: api/Item_ropa/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItem_ropa(int id, Item_ropa item_ropa)
        {
            if (id != item_ropa.Id)
            {
                return BadRequest();
            }

            _context.Entry(item_ropa).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Item_ropaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Item_ropa
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost, Authorize]
        public async Task<ActionResult<Item_ropa>> PostItem_ropa(Item_ropa item_ropa)
        {
            if (_context.Item_ropas == null)
            {
                return Problem("Entity set 'ApplicationDbContext.Item_ropas'  is null.");
            }
            _context.Item_ropas.Add(item_ropa);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetItem_ropa", new { id = item_ropa.Id }, item_ropa);
        }

        // DELETE: api/Item_ropa/5
        [HttpDelete("{id}"), Authorize]
        public async Task<IActionResult> DeleteItem_ropa(int id)
        {
            if (_context.Item_ropas == null)
            {
                return NotFound();
            }
            var item_ropa = await _context.Item_ropas.FindAsync(id);
            if (item_ropa == null)
            {
                return NotFound();
            }

            _context.Item_ropas.Remove(item_ropa);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Item_ropaExists(int id)
        {
            return (_context.Item_ropas?.Any(e => e.Id == id)).GetValueOrDefault();
        }

    }
}
