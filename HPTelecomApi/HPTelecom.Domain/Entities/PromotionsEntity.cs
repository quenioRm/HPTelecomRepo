namespace HPTelecom.Domain.Entities
{
    public class PromotionsEntity : BaseEntity<int>
    {
        public string promotionName { get; set; }
        public string imageUrl { get; set; }
        public DateTime startedAt { get; set; }
        public DateTime finishedAt { get; set; }
    }
}
