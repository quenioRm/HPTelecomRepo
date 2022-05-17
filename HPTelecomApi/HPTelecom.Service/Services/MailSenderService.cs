using FluentEmail.Core;
using HPTelecom.Domain.Interfaces.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HPTelecom.Service.Services
{
    public class MailSenderService : IMailSenderService
    {
        private readonly IServiceProvider _serviceProvider;
        private readonly IHostingEnvironment _hostEnvironment;
        private IConfiguration _configuration;

        public MailSenderService(
        IServiceProvider serviceProvider,
        IHostingEnvironment hostingEnvironment,
        IConfiguration configuration
        )
        {
            _serviceProvider = serviceProvider;
            _hostEnvironment = hostingEnvironment;
            _configuration = configuration;
        }

        public async Task SendMail(string subject, string body)
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                var mailer = scope.ServiceProvider.GetRequiredService<IFluentEmail>();
                var email = mailer
                    .To(_configuration["SmptMail:Email"], "HP Telecom")
                    .Subject(subject)
                    .Body(body);

                await email.SendAsync();
            }
        }

        public async Task SendPurchaseRequestMail(string recipientName, string subject,
            string text,  string? message)
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                //var file = _rootFolder + @"\emails\SendAccountActivationCode.cshtml";
                var file = $"{Directory.GetCurrentDirectory()}/wwwroot/emails/RequestEmail.cshtml";
                var mailer = scope.ServiceProvider.GetRequiredService<IFluentEmail>();
                var email = mailer
                    .To(_configuration["SmptMail:Email"], "HP Telecom")
                    .Subject(subject)
                    .UsingTemplateFromFile(file,
                    new
                    {
                        Name = recipientName,
                        Message = message,
                        Text = text
                    });

                await email.SendAsync();
            }
        }
    }
}
