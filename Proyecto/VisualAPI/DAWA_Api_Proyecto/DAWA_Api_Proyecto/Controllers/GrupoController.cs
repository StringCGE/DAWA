using DAWA_Api_Proyecto.Data;
using DAWA_Api_Proyecto.Models;
using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DAWA_Api_Proyecto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GrupoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public GrupoController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/Grupo
        [HttpGet]
        [EnableQuery]
        public async Task<ActionResult<IEnumerable<Grupo>>> GetGrupos()
        {
            if (_context.Grupos == null)
            {
                return NotFound();
            }
            return await _context.Grupos.ToListAsync();
        }

        // GET: api/Grupo/<id>
        [HttpGet("{id}")]
        public async Task<ActionResult<Grupo>> GetGrupo(int id)
        {
            if (_context.Grupos == null)
            {
                return NotFound();
            }
            var Grupo = await _context.Grupos.FindAsync(id);

            if (Grupo == null)
            {
                return NotFound();
            }

            return Grupo;
        }

        // PUT: api/Grupo/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGrupo(int id, Grupo Grupo)
        {
            if (id != Grupo.Id)
            {
                return BadRequest();
            }

            _context.Entry(Grupo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GrupoExists(id))
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

        // POST: api/Grupo
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Grupo>> PostGrupo(Grupo Grupo)
        {
            if (_context.Grupos == null)
            {
                return Problem("Entity set 'ApplicationDbContext.Grupos'  is null.");
            }
            _context.Grupos.Add(Grupo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGrupo", new { id = Grupo.Id }, Grupo);
        }

        // DELETE: api/Grupo/<id>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGrupo(int id)
        {
            if (_context.Grupos == null)
            {
                return NotFound();
            }
            var Grupo = await _context.Grupos.FindAsync(id);
            if (Grupo == null)
            {
                return NotFound();
            }

            _context.Grupos.Remove(Grupo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GrupoExists(int id)
        {
            return (_context.Grupos?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
