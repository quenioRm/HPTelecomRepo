namespace HPTelecom.Domain.Entities
{
    public class PlanPriceNewAddEntity : BaseEntity<int>
    {
        public string name { get; set; }
        public double price { get; set; }
        public int downSpeedBonus { get; set; }
        public int upSpeedBonus { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime? updatedAt { get; set; }
    }
}
