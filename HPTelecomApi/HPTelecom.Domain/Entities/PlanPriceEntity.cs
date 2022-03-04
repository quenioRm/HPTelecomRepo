namespace HPTelecom.Domain.Entities
{
    public class PlanPriceEntity : BaseEntity<int>
    {
        public string name { get; set; }
        public string icon { get; set; }
        public double price { get; set; }
        public string description1 { get; set; }
        public string description2 { get; set; }
        public string description3 { get; set; }
        public string description4 { get; set; }
        public int downSpeed { get; set; }
        public int upSpeed { get; set; }
        public string addTex { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime? updatedAt { get; set; }
    }
}
