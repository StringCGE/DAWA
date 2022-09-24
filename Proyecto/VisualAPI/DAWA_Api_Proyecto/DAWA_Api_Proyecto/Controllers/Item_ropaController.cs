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
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json.Linq;

namespace DAWA_Api_Proyecto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Item_ropaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public Item_ropaController(ApplicationDbContext context)
        {
            _context = context;
        }
        public delegate void mifuncion();
        // GET: api/Item_ropa
        [HttpGet]
        [EnableQuery]
        public async Task<ActionResult<IEnumerable<Item_ropa>>> GetItem_ropas()
        {
            //List<Item_ropa> l = new List<Item_ropa>();
            ////l.Add(new Item_ropa(20,new Grupo(),"_AA",20,20,"_image",20,"_veinte",20,"_detalle",0));
            //return await TaskMiValor<Item_ropa>.Valor(l,this);

            //Este return es el original
            if (_context.Item_ropas == null)
            {
                return NotFound();
            }
            return await _context.Item_ropas.ToListAsync();


            //.Where(b => b.Enabled)
            //.OrderBy(b => b.Name)
            //.Select(b => new SelectListItem
            //{
            //    Value = b.Id,
            //    Text = b.Name
            //})
            //.ToListAsync();
            //return await _context.Item_ropas.ToListAsync();
        }

        // GET: api/Item_ropa/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Item_ropa>> GetItem_ropa(int id)
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

            return item_ropa;
        }

        // GET: api/Item_ropa/5
        [HttpGet("porGrupo/{grupo}")]
        public async Task<ActionResult<IEnumerable<Item_ropa>>> GetItem_ropa_PorGrupo(int grupo)
        {
            //if (_context.Item_ropas == null)
            //{
            //    return NotFound();
            //}
            //var item_ropa = await _context.Item_ropas.FindAsync(id);

            //if (item_ropa == null)
            //{
            //    return NotFound();
            //}
            //_context.Item_ropas.Where<Item_ropa>(x => x.GrupoId == grupo)

            //var v = _context.Item_ropas.FromSqlRaw("");
            //var v2 = _context
            //var _Usu = await _context.Item_ropas.Select(value => value.GrupoId == grupo);

            //var _Usu = await _context.Item_ropas
            //            .Where(value => value.GrupoId == grupo)
            //            .ToListAsync<Item_ropa>()
            //            .AnyAsync<Item_ropa>();
            
            return await _context.Item_ropas
                        .Where(value => value.Grupoid == grupo)
                        .ToListAsync<Item_ropa>();
            
            
        }

        //[HttpGet("algo/{id}")]
        //public async Task<ActionResult<Item_ropa>> GetAlgo(int id,string cedula)
        //{
        //    /*busqueda anidada*/

        //    if (_context.Item_ropas == null)
        //    {
        //        return NotFound();
        //    }

        //    IQueryable<Item_ropa> query = _context.Item_ropas;
        //    //query = query.Where(x => x.Id == id);
        //    query = query.Where(x => x.Nombre.Contains("nombre"));
        //    //query = query.Where(x => x.Nombre.StartsWith("nombre") || true);
        //    if (query == null)
        //    {
        //        return NotFound();
        //    }


        //    var item_ropa = await _context.Item_ropas.FindAsync(id);

        //    if (item_ropa == null)
        //    {
        //        return NotFound();
        //    }

        //    return item_ropa;
        //}


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
        [HttpPost]
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
        [HttpDelete("{id}")]
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
