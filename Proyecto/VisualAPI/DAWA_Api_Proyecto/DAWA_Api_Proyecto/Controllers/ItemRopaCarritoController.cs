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

using System.IdentityModel.Tokens.Jwt;
using System.Text;
//using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;

using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace DAWA_Api_Proyecto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ItemRopaCarritoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ItemRopaCarritoController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Item_ropa
        [HttpGet]
        [EnableQuery]
        public async Task<ActionResult<IEnumerable<ItemRopaCarrito>>> GetItemRopaCarritos()
        {
            if (_context.ItemRopaCarritos == null)
            {
                return NotFound();
            }
            return await _context.ItemRopaCarritos.ToListAsync();
        }
    }
}
