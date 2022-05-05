using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System.Net;
using System.Net.Mail;

namespace HPTelecom.CrossCutting.DependencyInjection
{
    public class ConfigureEmailService
    {
        public static void ConfigureSmtpClient(WebApplicationBuilder builder)
        {
            var server = builder.Configuration.GetSection("SmptMail:Server").Value;
            int port = Convert.ToInt32(builder.Configuration.GetSection("SmptMail:Port").Value);
            var email = builder.Configuration.GetSection("SmptMail:Email").Value;
            var password = builder.Configuration.GetSection("SmptMail:Password").Value;
            var serverName = builder.Configuration.GetSection("ServerName").Value;

            builder.Services
                .AddFluentEmail(email, serverName)
                .AddRazorRenderer()
                .AddSmtpSender(new SmtpClient(server)
                {
                    UseDefaultCredentials = false,
                    Port = port,
                    Credentials = new NetworkCredential(email, password),
                    EnableSsl = true,
                });
        }
    }
}
