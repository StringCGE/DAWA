using Microsoft.EntityFrameworkCore;
using DAWA_Api_Proyecto.Models;
using Microsoft.Extensions.Logging;


namespace DAWA_Api_Proyecto.Data
{
    public class ApplicationDbContext : DbContext
    {
        DbContextOptions<ApplicationDbContext> dbcontext;
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> dbcontext) : base(dbcontext)
        {
            this.dbcontext = dbcontext;
        }
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer("",
        //          options =>
        //          {

        //          }
        //    );
        //    //optionsBuilder.UseSqlServer("")
        //    //    .EnableSensitiveDataLogging(true);
        //    //.UseLoggerFactory(new LoggerFactory().AddConsole);
        //}

        public DbSet<Item_ropa> Item_ropas { get; set; } = null!;
        //public DbSet<Usuario>? Usuarios { get; set; }
        public DbSet<Usuario> Usuarios { get; set; } = null!;
        public DbSet<ItemRopaCarrito> ItemRopaCarritos { get; set; } = null!;

    }
}
