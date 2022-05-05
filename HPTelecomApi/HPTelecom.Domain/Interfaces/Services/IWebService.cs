using HPTelecom.Domain.Interfaces.Dtos;
using HPTelecom.Domain.Notification;

namespace HPTelecom.Domain.Interfaces.Services
{
    public interface IWebService
    {
        Task<object> GetPlans(int takeCount);
        Task<object> GetRelevantPlans();
        Task<object> GetPromos();
        Task<Output<object>> SendMail(SendMailDto form);
    }
}
