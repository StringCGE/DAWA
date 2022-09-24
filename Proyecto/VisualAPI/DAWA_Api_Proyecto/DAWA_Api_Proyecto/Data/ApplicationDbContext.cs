using Microsoft.EntityFrameworkCore;
using DAWA_Api_Proyecto.Models;
using Microsoft.Extensions.Logging;
using System.Reflection.Emit;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;


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

        public DbSet<Factura> Facturas { get; set; } = null!;
        public DbSet<Grupo> Grupos { get; set; } = null!;
        public DbSet<Item_ropa> Item_ropas { get; set; } = null!;
        public DbSet<ItemRopaCarrito> ItemRopaCarritos { get; set; } = null!;
        public DbSet<TokenDB> TokenDBs { get; set; } = null!;
        public DbSet<Usuario> Usuarios { get; set; } = null!;
        //public DbSet<Usuario>? Usuarios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuild)
        {
            base.OnModelCreating(modelBuild);
            //El geneador de codigo algo no hace bien porque algono estoy haciendo ien aqui pero no logro saber que
            //modelBuild.Entity<Usuario>().ToTable("Usuario");//Para cambiar a antojo el nombre de mi tabla
            //modelBuild.Entity<Book>().HasData(new Book { Id = 1, Author = "J. R. R. Tolkien", Description = "The Fellowship of the Ring, the first volume in the trilogy, tells of the fateful power of the One Ring. It begins a magnificent tale of adventure that will plunge the members of the Fellowship of the Ring into a perilous quest and set the stage for the ultimate clash between the powers of good and evil.", Title = "The Fellowship of the Ring" });

            //modelBuild.Entity<Usuario>().HasData(new Usuario(1, "0909090901", "Christian Eduardo", "Gonzalez", "La calle y la que cruza", 27, "eduardo.gonzaleze@ug.edu.ec", "Christian", "cliente", 0));
            //modelBuild.Entity<Usuario>().HasData(new Usuario(2, "0909090902", "Johann Donato", "Lucio Vera", "La calle y la que cruza", 23, "johann.luciov@ug.edu.ec", "Johann", "cliente", 0));
            //modelBuild.Entity<Usuario>().HasData(new Usuario(3, "0909090903", "Dennis Orlando", "Gutiérrez León", "La calle y la que cruza", 22, "dennis.gutierrezl@ug.edu.ec", "Dennis", "cliente", 0));
            //modelBuild.Entity<Usuario>().HasData(new Usuario(4, "0909090904", "James Douglas", "Cantos Pinto", "La calle y la que cruza", 21, "james.cantosp@ug.edu.ec", "James", "cliente", 0));
            //modelBuild.Entity<Usuario>().HasData(new Usuario(5, "0909090905", "Victor Ivan", "Espinoza de los Monteros", "La calle y la que cruza", 20, "victor.espinozam@ug.edu.ec", "Victor", "cliente", 0));
            //modelBuild.Entity<Usuario>().HasData(new Usuario(6, "0909090901", "Christian Eduardo", "Gonzalez", "La calle y la que cruza", 27, "eduardogonzaleze@ug.edu.ec", "Eduardo", "administrador", 0));
            //modelBuild.Entity<Usuario>().HasData(new Usuario(7, "0909090902", "Johann Donato", "Lucio Vera", "La calle y la que cruza", 23, "johann.luciov@ug.edu.ec", "Donato", "administrador", 0));
            //modelBuild.Entity<Usuario>().HasData(new Usuario(8, "0909090903", "Dennis Orlando", "Gutiérrez León", "La calle y la que cruza", 22, "dennis.gutierrezl@ug.edu.ec", "Orlando", "administrador", 0));
            //modelBuild.Entity<Usuario>().HasData(new Usuario(9, "0909090904", "James Douglas", "Cantos Pinto", "La calle y la que cruza", 21, "james.cantosp@ug.edu.ec", "Douglas", "administrador", 0));
            //modelBuild.Entity<Usuario>().HasData(new Usuario(10, "0909090905", "Victor Ivan", "Espinoza de los Monteros", "La calle y la que cruza", 20, "victor.espinozam@ug.edu.ec", "Ivan", "administrador", 0));

            //modelBuild.Entity<Grupo>().HasData(new Grupo(1, "generico", 0));
            //modelBuild.Entity<Grupo>().HasData(new Grupo(2, "mujer", 0));
            //modelBuild.Entity<Grupo>().HasData(new Grupo(3, "oferta", 0));
            //modelBuild.Entity<Grupo>().HasData(new Grupo(4, "coleccion", 0));

            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(1,  new Grupo(1, "generico", 0), "Alpha Industries Chaqueta", 29.00, 13, "assets/img/seccion-hombre/item_01.jpg", 13, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(2,  new Grupo(1, "generico", 0), "Chaqueta Vaquera Slim", 35.50, 22, "assets/img/seccion-hombre/item_02.jpg", 22, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(3,  new Grupo(1, "generico", 0), "Chaqueta de cuero para hombre", 59.99, 145, "assets/img/seccion-hombre/item_03.jpg", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(4,  new Grupo(1, "generico", 0), "Camiseta deportiva Vans", 45.00, 48, "assets/img/seccion-hombre/item_04.jpg", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(5,  new Grupo(1, "generico", 0), "Buzo deportiva para caballero", 35.99, 74, "assets/img/seccion-hombre/item_05.jpg", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(6,  new Grupo(1, "generico", 0), "Camiseta Jogger para hombres", 25.99, 62, "assets/img/seccion-hombre/item_06.jpg", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(7,  new Grupo(1, "generico", 0), "Chaqueta Street Style", 15.99, 50, "assets/img/seccion-hombre/item_07.jpg", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(8,  new Grupo(1, "generico", 0), "Camiseta Vans Casual para hombre", 5.99, 70, "assets/img/seccion-hombre/item_08.jpg", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(9,  new Grupo(1, "generico", 0), "Jeans Vaqueros", 0.99, 28, "assets/img/seccion-hombre/item_09.jpg", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(10, new Grupo(1, "generico", 0), "Next Level camisa mangas cortas", 0.09, 80, "assets/img/seccion-hombre/item_10.jpg", 0, "", 0, "", 0));

            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(11, new Grupo(2, "mujer", 0), "Calentador", 23.00, 20, "assets/img/seccion-mujer/item_01.png", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(12, new Grupo(2, "mujer", 0), "Chompa", 40.99, 10, "assets/img/seccion-mujer/item_02.png", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(13, new Grupo(2, "mujer", 0), "Calentador", 30.00, 20, "assets/img/seccion-mujer/item_03.png", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(14, new Grupo(2, "mujer", 0), "Abrigo", 50.00, 48, "assets/img/seccion-mujer/item_04.png", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(15, new Grupo(2, "mujer", 0), "Camisa de la seleccion", 60.99, 120, "assets/img/seccion-mujer/item_05.png", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(16, new Grupo(2, "mujer", 0), "Chompa", 30.00, 24, "assets/img/seccion-mujer/item_06.png", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(17, new Grupo(2, "mujer", 0), "Camisa Barcelona", 15.99, 35, "assets/img/seccion-mujer/item_07.png", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(18, new Grupo(2, "mujer", 0), "Camisa", 15.99, 60, "assets/img/seccion-mujer/item_08.png", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(19, new Grupo(2, "mujer", 0), "Calentador", 25.50, 10, "assets/img/seccion-mujer/item_09.png", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(20, new Grupo(2, "mujer", 0), "Chompa", 35.99, 12, "assets/img/seccion-mujer/item_10.png", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(21, new Grupo(2, "mujer", 0), "Chompa", 25.50, 10, "assets/img/seccion-mujer/item_11.png", 0, "", 0, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(22, new Grupo(2, "mujer", 0), "Short", 35.99, 12, "assets/img/seccion-mujer/item_12.png", 0, "", 0, "", 0));

            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(23, new Grupo(3, "oferta", 0), "Real Madrid C.F. adidas Camiseta de entrenamiento para Hombres", 41.00, 30, "assets/img/camisa-rm.jpg", 0, "GR4324", 29, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(24, new Grupo(3, "oferta", 0), "Condivo 21 Hombre Pantalones cortos", 35.00, 45, "assets/img/adidas-pants.jpg", 0, "GJ6804", 19.99, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(25, new Grupo(3, "oferta", 0), "HEAD Performance Calcetines tobilleros 2 pares", 9.99, 82, "assets/img/calcetines.jpg", 0, "791019001-870", 3.50, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(26, new Grupo(3, "oferta", 0), "Bayern de Múnich Adidas Hombre Pantalones cortos", 35.99, 156, "assets/img/bayern-pants.jpg", 0, "GM5324", 22.99, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(27, new Grupo(3, "oferta", 0), "Adidas Originals Classics Primeblue SST Hombre Chaqueta", 45, 124, "assets/img/adidas-buzo.jpg", 0, "GF0198", 30.00, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(28, new Grupo(3, "oferta", 0), "Adidas Stadium Niño Chaqueta con capucha", 45.00, 45, "assets/img/adidas-chaqueta-ninio.jpg", 0, "H10163", 30.00, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(29, new Grupo(3, "oferta", 0), "PUMA LIGA 1/4 Zip Hombre Sudadera de entrenamiento", 45.00, 70, "assets/img/puma-sudadera.jpg", 0, "655606-03", 20.00, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(30, new Grupo(3, "oferta", 0), "Jako Striker Mujer Chaqueta de presentación", 35.00, 152, "assets/img/jako-chaqueta.jpg", 0, "D9816-23", 21.00, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(31, new Grupo(3, "oferta", 0), "SportSpar.de \"DEALMAKER ONE\"", 25, 38, "assets/img/sneakers.jpg", 0, "Sneakers", 12.00, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(32, new Grupo(3, "oferta", 0), "Zeus Mida Pantalones cortos de entrenamiento Marino", 35.00, 29, "assets/img/zeus-pants.jpg", 0, "", 30.00, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(33, new Grupo(3, "oferta", 0), "PUMA LIGA 1/4 Zip Hombre Sudadera de entrenamiento", 27.00, 94, "assets/img/puma-sudadera2.jpg", 0, "", 16.00, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(34, new Grupo(3, "oferta", 0), "HEAD Hiking Unisex Calcetines tobilleros 2 pares", 7.50, 45, "assets/img/calcetines-tobilleros.jpg", 0, "781001001-857", 3.50, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(35, new Grupo(3, "oferta", 0), "Olympique de Marsella PUMA Niño Camiseta", 25.00, 23, "assets/img/marsella-shirt.jpg", 0, "757046-01", 16.00, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(36, new Grupo(3, "oferta", 0), "Bayer 04 Leverkusen Jako Camiseta", 29.00, 18, "assets/img/leverkusen-shirt.jpg", 0, "BA4221H-681", 19.99, "", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(37, new Grupo(3, "oferta", 0), "Mizuno Visera J2GW0R05Z-29", 15.00, 52, "assets/img/visera.jpg", 0, "J2GW0R05Z-29", 7.00, "", 0));

            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(38, new Grupo(4, "coleccion", 0), "Conjunto deportivo Adidas: Color negro", 50, 20, "assets/img/Conjunto1.png", 0, "cl32165", 30, "La colección de esta temporada de ADIDAS es oscura, sombría y poderosa. Con bolsillos laterales para guardar cosas, tecnología de absorción de la humedad para un mejor control de la temperatura, esta Chamarra de fútbol vistosa es perfecta para ti.", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(39, new Grupo(4, "coleccion", 0), "Conjunto deportivo Adidas: Color negro y blanco", 50, 35, "assets/img/Conjunto2.png", 0, "cl54453", 30, "Este conjunto se inspira en la combinación del diseño romántico y vanguardista de Kahlo. Tiene bordados magníficos y bordes fruncidos yuxtapuestos con materiales deportivos de alto performance.", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(40, new Grupo(4, "coleccion", 0), "Conjunto deportivo Jordan: Color negro y rojo", 50, 94, "assets/img/Conjunto10.png", 0, "cl68572", 30, "Este modelo cómodo y acogedor incluye un logotipo llamativo en el pecho que es toda una declaración. Está equipado con puños elasticados para mantener el calor en la pista de skate o en la calle. Para que vistas con estilo sin ningún esfuerzo.", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(41, new Grupo(4, "coleccion", 0), "Conjunto deportivo Jordan PSG: Color purpura", 50, 12, "assets/img/Conjunto4.png", 0, "cl15812", 30, "Recopilamos nuestros diseños más queridos para nuestra colección,que presenta accesorios modernos con un estilo incomparable,presenta llamativos bloques de color, una fabricación suave y gráficos que seguramente llamarán la atención.", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(42, new Grupo(4, "coleccion", 0), "Conjunto deportivo Nike: Color azul", 50, 54, "assets/img/Conjunto5.png", 0, "cl56465", 30, "Nike se asoció con la marca de ropa de BUTTER para crear este cortaviento ligero, diseñado para mantenerte cómodo y con estilo en cualquier situación.Crea un look que resalta, y un diseño con un cuello y abrigadores.", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(43, new Grupo(4, "coleccion", 0), "Conjunto deportivo Nike: Color azul marino", 50, 92, "assets/img/Conjunto7.png", 0, "cl98463", 30, "Nuestro cojunto estampado con gorra está hecho 100% de algodón y con detalles llamativos de marca NIKE. Tiene un práctico bolsillo estilo canguro y una gorra ajustable. Es el Sudadera con el diseño perfecto para los que están atentos a la moda. ", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(44, new Grupo(4, "coleccion", 0), "Conjunto deportivo Adidas: Color negro y blanco", 50, 32, "assets/img/Conjunto8.png", 0, "cl64278", 30, "Cuando se trata de jugar, nada es tan importante como tu equipo. Enfréntate a tus rivales con la comodidad y estilo insuperables de nuestro conjunto. Este conjunto con gorra refinado está diseñado pensando en los gamers.", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(45, new Grupo(4, "coleccion", 0), "Conjunto deportivo Jordan: Color negro y purpura", 50, 19, "assets/img/Conjunto9.png", 0, "cl32175", 30, "Todo guardarropa necesita una conjunto con gorra clásica, y esta edición de JORDAN de un básico de ropa informal es absolutamente imprescindible.Con un amplio bolsillo canguro para almacenamiento y una práctica gorra ajustable para mayor comodidad. ", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(46, new Grupo(4, "coleccion", 0), "Indumentaria Lakers", 60, 72, "assets/img/Basquet1.png", 0, "cl12484", 40, "Equipo completo de colección de Angeles Lakers, número 24 de Kobe Byrant.", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(47, new Grupo(4, "coleccion", 0), "Indumentaria Suns", 60, 25, "assets/img/Basquet2.png", 0, "cl47854", 40, "Diseño personalizado equipos Suns alterno, año 2017.", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(48, new Grupo(4, "coleccion", 0), "Indumentaria Porlant", 60, 29, "assets/img/Basquet3.png", 0, "cl65746", 40, "Camiseta retro de los Porlant, usada actualmente por el jugador Damian Lillard.", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(49, new Grupo(4, "coleccion", 0), "Leggins Adidas color celeste", 25, 14, "assets/img/Mas.png", 0, "cl54423", 20, "Feroces amantes de la moda, esta es para ti. Diseñados para aquellos que se atreven a sobresalir entre la multitud,Un atrevido estampado integral compuesto con materiales reciclados, una moda de la que puedes estar realmente orgulloso de lucir.", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(50, new Grupo(4, "coleccion", 0), "Leggins Jordan color plomo", 25, 2, "assets/img/Mas1.png", 0, "cl87483", 20, "Estos leggings impactantes tienen estampados gráficos sofisticados inspirados en el arte floral. Están confeccionados con un material flexible en las cuatro direcciones y tecnología de absorción de la humedad.", 0));
            //modelBuild.Entity<Item_ropa>().HasData(new Item_ropa(51, new Grupo(4, "coleccion", 0), "Leggins nike color azul", 25, 50, "assets/img/Mas2.png", 0, "cl65575", 20, "Lleva tu estilo personal a otro nivel con nuestros leggings de training estampados de largo 7/8 y cintura alta. Estos leggings de alto performance están diseñados para ser duraderos, cómodos y para brindarte una elasticidad multidireccional.", 0));

        }
    }
}
