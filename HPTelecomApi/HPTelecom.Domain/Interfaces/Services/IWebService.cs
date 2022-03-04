namespace HPTelecom.Domain.Interfaces.Services
{
    public interface IWebService
    {
        Task<object> GetPlans(int takeCount);
    }
}
