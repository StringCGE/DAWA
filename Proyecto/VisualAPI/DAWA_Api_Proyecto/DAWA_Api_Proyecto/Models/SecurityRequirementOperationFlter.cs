using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace DAWA_Api_Proyecto.Models
{
    public class SecurityRequirementOperationFlter : Swashbuckle.AspNetCore.SwaggerGen.IOperationFilter
    {
        private readonly IHttpContextAccessor httpContextAccessor;

        public SecurityRequirementOperationFlter(IHttpContextAccessor httpContextAccessor)
        {
            this.httpContextAccessor = httpContextAccessor;
        }

        public void Apply(OpenApiOperation operation, OperationFilterContext context)
        {

        //    var authAttributes = context.MethodInfo.DeclaringType.GetCustomAttributes(true)
        //.Union(context.MethodInfo.GetCustomAttributes(true))
        //.OfType<AuthorizeAttribute>();

        //    var allowAnonymousAttributes = context.MethodInfo.DeclaringType.GetCustomAttributes(true)
        //        .Union(context.MethodInfo.GetCustomAttributes(true))
        //        .OfType<AllowAnonymousAttribute>();


        //    if (authAttributes.Any() && !allowAnonymousAttributes.Any())
        //    {
        //        operation.Responses.Add("401", new OpenApiResponse { Description = "Unauthorized" });
        //        operation.Responses.Add("403", new OpenApiResponse { Description = "Forbidden" });
        //    }


            //var filterDescriptor = context.ApiDescription.ActionDescriptor.FilterDescriptors;
            //var isAuthorized = filterDescriptor.Select(filterInfo => filterInfo.Filter).Any(filter => filter is AuthorizeFilter);
            //var allowAnonymous = filterDescriptor.Select(filterInfo => filterInfo.Filter).Any(filter => filter is IAllowAnonymousFilter);


            //if (/*isAuthorized && */!allowAnonymous)
            //{
            //    operation.Responses.Add("401", new OpenApiResponse { Description = "Unauthorized" });
            //    operation.Responses.Add("403", new OpenApiResponse { Description = "Forbidden" });
            //    //Add JWT bearer type
            //    operation.Security.Add(new OpenApiSecurityRequirement
            //    {
            //        {
            //            new OpenApiSecurityScheme
            //            {
            //                Reference = new OpenApiReference
            //                {
            //                    Type = ReferenceType.SecurityScheme,
            //                    Id = "Bearer"
            //                },
            //                Scheme = "Bearer",
            //                Name = "Bearer",
            //                In = ParameterLocation.Header,

            //            },
            //            new List<string>()
            //        }
            //    });
            //}
        }
    }
}
