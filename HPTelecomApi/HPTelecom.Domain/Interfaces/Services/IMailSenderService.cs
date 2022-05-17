
namespace HPTelecom.Domain.Interfaces.Services
{
    public interface IMailSenderService
    {
        Task SendMail(string subject, string body);
        Task SendPurchaseRequestMail(string recipientName, string subject,
            string text, string? message);
    }
}
