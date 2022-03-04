using FluentValidation.AspNetCore;
using HPTelecom.Domain.Interfaces.Services;
using HPTelecom.Domain.Validator;
using HPTelecom.Service.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace HPTelecom.CrossCutting.DependencyInjection
{
    public class ConfigureService
    {
        public static void ConfigureDependenciesService(WebApplicationBuilder builder)
        {
            #region Web
            builder.Services.AddTransient<ICepAvailableService, CepAvailableService>();
            builder.Services.AddTransient<IWebService, WebService>();
            #endregion
        }

        public static void ConfigureControllerService(WebApplicationBuilder builder)
        {
            builder.Services.AddControllers()
                .AddNewtonsoftJson(opts =>
                {
                    opts.SerializerSettings.ContractResolver = new DefaultContractResolver();
                    opts.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                });

            builder.Services.AddFluentValidation(x =>
            {
                x.DisableDataAnnotationsValidation = true;
                x.ImplicitlyValidateChildProperties = true;
                x.RegisterValidatorsFromAssemblyContaining<CepAvailableValidator>();
            });
        }
    }
}
