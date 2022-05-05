
namespace HPTelecom.Domain.Interfaces.Services
{
    public interface IMailSenderService
    {
        Task SendMail(string subject, string body);
        Task SendAccountCode(string recipientEmail, string recipientName, int code, string subject, string message);
    }
}
