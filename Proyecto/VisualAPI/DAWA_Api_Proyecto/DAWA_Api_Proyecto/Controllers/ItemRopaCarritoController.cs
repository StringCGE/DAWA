using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using DAWA_Api_Proyecto.Data;
using DAWA_Api_Proyecto.Models;
using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Mvc.Rendering;

using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;

using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Security.Claims;

namespace DAWA_Api_Proyecto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ItemRopaCarritoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ItemRopaCarritoController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/ItemRopaCarrito
        [HttpGet ("proforma/{idproforma}")]
        [EnableQuery]
        public async Task<ActionResult<IEnumerable<ItemRopaCarrito>>> GetItemRopaCarritoByProforma(int idproforma)
        {
            if (_context.ItemRopaCarritos == null)
            {
                return NotFound();
            }
            List<ItemRopaCarrito> l = await _context.ItemRopaCarritos
                .Where(c => c.Facturaid == idproforma)
                .ToListAsync();
            
            foreach(ItemRopaCarrito irc in l)
            {
                irc.Item = _context.Item_ropas.Find(irc.Itemid);
            }
            return await _context.ItemRopaCarritos
                .Where(c => c.Facturaid == idproforma)
                .ToListAsync();
        }

        // GET: api/ItemRopaCarrito/<id>
        [HttpGet("{id}")]
        public async Task<ActionResult<ItemRopaCarrito>> GetItemRopaCarrito(int id)
        {
            if (_context.ItemRopaCarritos == null)
            {
                return NotFound();
            }
            var ItemRopaCarrito = await _context.ItemRopaCarritos.FindAsync(id);

            if (ItemRopaCarrito == null)
            {
                return NotFound();
            }

            return ItemRopaCarrito;
        }

        // PUT: api/ItemRopaCarrito/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItemRopaCarrito(int id, ItemRopaCarrito ItemRopaCarrito)
        {
            if (id != ItemRopaCarrito.Id)
            {
                return BadRequest();
            }

            _context.Entry(ItemRopaCarrito).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemRopaCarritoExists(id))
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

        // POST: api/ItemRopaCarrito
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ItemRopaCarrito>> PostItemRopaCarrito(ItemRopaCarrito_SM irc)
        {
            var v = new ItemRopaCarrito();
            v.Id = 0;
            v.Itemid = irc.Itemid;
            v.Facturaid = irc.Facturaid;
            v.Cantidad = irc.Cantidad;
            if (_context.ItemRopaCarritos == null)
            {
                return Problem("Entity set 'ApplicationDbContext.ItemRopaCarritos'  is null.");
            }
            _context.ItemRopaCarritos.Add(v);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetItemRopaCarrito", new { id = v.Id }, v);
        }

        // DELETE: api/ItemRopaCarrito/<id>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItemRopaCarrito(int id)
        {
            if (_context.ItemRopaCarritos == null)
            {
                return NotFound();
            }
            var ItemRopaCarrito = await _context.ItemRopaCarritos.FindAsync(id);
            if (ItemRopaCarrito == null)
            {
                return NotFound();
            }

            _context.ItemRopaCarritos.Remove(ItemRopaCarrito);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ItemRopaCarritoExists(int id)
        {
            return (_context.ItemRopaCarritos?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
