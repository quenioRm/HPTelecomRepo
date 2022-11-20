using HPTelecom.Domain.Interfaces.Repository;
using HPTelecom.Infra.Context;
using HPTelecom.Infra.Implementations;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace HPTelecom.CrossCutting.DependencyInjection
{
    public class ConfigureRepository
    {
        public static void ConfigureDependenciesRepository(WebApplicationBuilder builder)
        {
            var ip = builder.Configuration["DatabaseConnection:Server:Ip"];
            var user = builder.Configuration["DatabaseConnection:Server:User"];
            var password = builder.Configuration["DatabaseConnection:Server:Password"];

            #region Web
            builder.Services.AddScoped<ICepAvailableRepository, CepAvailableImplementation>();
            builder.Services.AddScoped<IPlanPriceRepository, PlanPriceImplementation>();
            builder.Services.AddScoped<IPromotionsRepository, PromotionsImplementation>();
            builder.Services.AddScoped<ICheckAvailabilityRepository, CheckAvailabilityImplementation>();
            builder.Services.AddScoped<IPlanPriceNewRepository, PlanPriceNewImplementation>();
            builder.Services.AddScoped<IPlanPriceNewAddRepository, PlanPriceNewAddImplementation>();
            #endregion

            builder.Services.AddDbContext<HPTelecomContext>(
                options => options.UseSqlServer($"Server={ip};Database=HP_Database;User Id={user};password={password};Trusted_Connection=False;MultipleActiveResultSets=true;")
            );
        }
    }
}
