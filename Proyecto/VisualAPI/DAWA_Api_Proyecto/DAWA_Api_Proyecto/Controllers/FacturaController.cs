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
    public class FacturaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public FacturaController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/Factura
        [HttpGet]
        [EnableQuery]
        public async Task<ActionResult<IEnumerable<Factura>>> GetFacturas()
        {
            if (_context.Facturas == null)
            {
                return NotFound();
            }
            return await _context.Facturas.ToListAsync();
        }

        // GET: api/Factura/<id>
        [HttpGet("{id}")]
        public async Task<ActionResult<Factura>> GetFactura(int id)
        {
            if (_context.Facturas == null)
            {
                return NotFound();
            }
            var Factura = await _context.Facturas.FindAsync(id);

            if (Factura == null)
            {
                return NotFound();
            }

            return Factura;
        }

        // PUT: api/Factura/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFactura(int id, Factura Factura)
        {
            if (id != Factura.Id)
            {
                return BadRequest();
            }

            _context.Entry(Factura).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FacturaExists(id))
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

        // POST: api/Factura
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Factura>> PostFactura(Factura Factura)
        {
            if (_context.Facturas == null)
            {
                return Problem("Entity set 'ApplicationDbContext.Facturas'  is null.");
            }
            _context.Facturas.Add(Factura);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFactura", new { id = Factura.Id }, Factura);
        }

        // DELETE: api/Factura/<id>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFactura(int id)
        {
            if (_context.Facturas == null)
            {
                return NotFound();
            }
            var Factura = await _context.Facturas.FindAsync(id);
            if (Factura == null)
            {
                return NotFound();
            }

            _context.Facturas.Remove(Factura);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FacturaExists(int id)
        {
            return (_context.Facturas?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
