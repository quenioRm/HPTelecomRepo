namespace HPTelecom.Domain.Interfaces.Dtos
{
    public class SendPurchaseRequestDto
    {
        public string Name { get; set; }
        public string Telephone { get; set; }
        public string Cep { get; set; }
        public int PlanId { get; set; }
        public string? Text { get; set; }
    }
}
