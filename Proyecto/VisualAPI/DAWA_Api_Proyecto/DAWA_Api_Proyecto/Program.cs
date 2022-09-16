using DAWA_Api_Proyecto.Data;
using System.Text;

using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//Database=DAWA_Api_Proyecto;
builder.Services.AddDbContext<ApplicationDbContext>(
    options =>
        options.UseSqlServer("" +
        "Data Source=CGEPROGRAMADOR\\SQLEXPRESS; " +
        "Database=DAWA_Api_Proyecto; " +
        "Trusted_Connection=true;" + /*2*/
        "MultipleActiveResultSets=True;" + /*1*/
        "Integrated Security=True;" + /*3 Integrated_Security=True no existe eso*/
        "Connect Timeout=30;" + /*4 mismo error anterior y la falta de punto y coma*/
        "Encrypt=False;" +
        "TrustServerCertificate=False;" +
        "ApplicationIntent=ReadWrite;" +
        "MultiSubnetFailover=False;"
        /*builder.Configuration.GetConnectionString("DefaultConnection")*/
        )
);

builder.Services.AddCors(options =>
{
    options.AddPolicy("default", x =>
    {
        x.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

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

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
