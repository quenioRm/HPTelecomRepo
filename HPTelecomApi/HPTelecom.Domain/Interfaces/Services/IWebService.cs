﻿using HPTelecom.Domain.Interfaces.Dtos;
using HPTelecom.Domain.Interfaces.Dtos.Models;
using HPTelecom.Domain.Notification;

namespace HPTelecom.Domain.Interfaces.Services
{
    public interface IWebService
    {
        Task<object> FindPlan(int id);
        Task<object> GetNewPlans();
        Task<object> GetPlans(int takeCount);
        Task<object> GetRelevantPlans();
        Task<object> GetPromos();
        Task<Output<object>> SendMail(SendMailDto form);
        Task<GoogleMapsReview> GetGoogleComents();
        Task<Output<object>> SendPurchaseRequestMail(SendPurchaseRequestDto form);
    }
}
