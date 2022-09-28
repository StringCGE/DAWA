using DAWA_Api_Proyecto.Data;
using System.Text;

using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using DAWA_Api_Proyecto.Controllers;
using Microsoft.OpenApi.Models;
using DAWA_Api_Proyecto.Models;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.Filters;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("default", x =>
    {
        x.AllowAnyOrigin()
         .AllowAnyHeader()
         .AllowAnyMethod();
    });
});
builder.Configuration.AddJsonFile("appsettings.json");
var secketkey = builder.Configuration.GetSection("settings").GetSection("secretkey").Value;
var keybytes = Encoding.UTF8.GetBytes(secketkey);

builder.Services.AddAuthentication(config =>
{
    config.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    config.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(config =>
{
    config.RequireHttpsMetadata = false;
    config.SaveToken = true;
    config.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(keybytes),
        ValidateIssuer = false,
        ValidateAudience = false,
    };
});

//builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//    .AddJwtBearer(options =>
//    {
//        options.TokenValidationParameters = new TokenValidationParameters
//        {
//            ValidateIssuerSigningKey = true,
//            IssuerSigningKey = new SymmetricSecurityKey(
//                System.Text.Encoding.ASCII.GetBytes(
//                    builder.Configuration.GetSection("AppSettings:Token").Value
//                )
//            ),
//            ValidateIssuer = false,
//            ValidateAudience = false
//        };
//    });

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();
//Database=DAWA_Api_Proyecto;
builder.Services.AddDbContext<ApplicationDbContext>(
    options => {
        //appsettings.json
        options.UseSqlServer(builder.Configuration.GetConnectionString("ProyectoEXE"));
        //options.UseSqlServer(builder.Configuration.GetConnectionString("Docker"));
        options.EnableSensitiveDataLogging(true);
    }
);



builder.Services.AddSwaggerGen(option =>
{
    option.OperationFilter<SecurityRequirementsOperationFilter>();
    option.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });
    //option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    //{
    //    In = ParameterLocation.Header,
    //    Description = "Please enter a valid token",
    //    Name = "Authorization",
    //    Type = SecuritySchemeType.Http,
    //    BearerFormat = "JWT",
    //    Scheme = "Bearer"
    //});
});



//builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//      .AddJwtBearer(options => options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
//      {
//          ValidateIssuer = false,
//          ValidateAudience = false,
//          ValidateLifetime = true,
//          ValidateIssuerSigningKey = true,
//          IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(AuthController.Llave)),
//          ClockSkew = System.TimeSpan.Zero
//      });



//builder.Services.AddSwaggerGen(option =>
//{
//    option.SwaggerDoc("v1", new OpenApiInfo { Title = "Demo API", Version = "v1" });
//    option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
//    {
//        In = ParameterLocation.Header,
//        Description = "Please enter a valid token",
//        Name = "Authorization",
//        Type = SecuritySchemeType.Http,
//        BearerFormat = "JWT",
//        Scheme = "Bearer"
//    });
//    option.AddSecurityRequirement(new OpenApiSecurityRequirement
//    {
//        {
//            new OpenApiSecurityScheme
//            {
//                Reference = new OpenApiReference
//                {
//                    Type=ReferenceType.SecurityScheme,
//                    Id="Bearer"
//                }
//            },
//            new string[]{}
//        }
//    });
//});
//builder.Services.AddSwaggerGen(e =>
//    {
//        //Microsoft.OpenApi.Models.OpenApiSecurityRequirement

//        e.OperationFilter<SecurityRequirementOperationFlter>();
//        e.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
//            {
//                Description = "Aitorizacion: Usar Beare. Ejemplo \"bearer {Token}\"",
//                In = ParameterLocation.Header,
//                Name="Authorization",
//                Type = SecuritySchemeType.ApiKey,
//                Scheme = "Bearer"
//            }
//        );
//    }

//);
//builder.WebHost.ConfigureKestrel(
//    options => {
//        options.ListenAnyIP(2000);
//        options.ListenAnyIP(2010);
//    }
//);
//builder.WebHost.UseUrls("https://*:2080", "http://*:2443");
//builder.WebHost.UseUrls("http://*:2443");





/*
intente reproducir el error
    System.InvalidOperationException: There is already an open DataReader associated with this Connection which must be closed first

 y comence con esta ruta sin
builder.Services.AddDbContext<ApplicationDbContext>(
    options =>
        options.UseSqlServer("" +
        "Data Source=CGEPROGRAMADOR\\SQLEXPRESS; " +
        "Database=DAWA_Api_Proyecto; " +
        "Integrated Security=True;Connect " +
        "Timeout=30; " +
        "Encrypt=False;" +
        "TrustServerCertificate=False;" +
        "ApplicationIntent=ReadWrite;" +
        "MultiSubnetFailover=False"
        //builder.Configuration.GetConnectionString("DefaultConnection")
        )
);
*/
var app = builder.Build();

//using (var scope = app.Services.CreateScope())
//{
//    var dataContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
//    dataContext.Database.Migrate();
//}

    // Configure the HTTP request pipeline.
    //if (app.Environment.IsDevelopment())
    //{
    app.UseSwagger();
    app.UseSwaggerUI();
//}

app.UseStaticFiles();
app.UseHttpsRedirection();
app.UseCors("default");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();



//"Data Source=CGEPROGRAMADOR\\SQLEXPRESS; " +
//        //"Data Source=172.19.0.2:1433; " +
//        //"Data Source=192.168.35.150:2017; " +
//        "Database=DAWA_Api_Proyecto; " +
//        "Trusted_Connection=true;" + /*2*/
//        "MultipleActiveResultSets=True;" + /*1*/
//        "Integrated Security=True;" + /*3 Integrated_Security=True no existe eso*/
//        "Connect Timeout=30;" + /*4 mismo error anterior y la falta de punto y coma*/
//        "Encrypt=False;" +
//        "TrustServerCertificate=False;" +
//        "ApplicationIntent=ReadWrite;" +
//        "MultiSubnetFailover=False;"