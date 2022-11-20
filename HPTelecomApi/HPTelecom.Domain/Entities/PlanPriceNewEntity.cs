namespace HPTelecom.Domain.Entities
{
    public class PlanPriceNewEntity : BaseEntity<int>
    {
        public string name { get; set; }
        public string icon { get; set; }
        public double price { get; set; }
        public double? discount { get; set; }
        public string? firstDescription { get; set; }
        public string? secondDescription { get; set; }
        public string? thirdDescription { get; set; }
        public string? fourthDescription { get; set; }
        public int downSpeed { get; set; }
        public int upSpeed { get; set; }
        public byte turboMessageShow { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime? updatedAt { get; set; }
    }
}
