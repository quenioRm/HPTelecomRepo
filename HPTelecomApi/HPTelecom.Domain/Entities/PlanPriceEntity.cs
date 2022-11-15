namespace HPTelecom.Domain.Entities
{
    public class PlanPriceEntity : BaseEntity<int>
    {
        public string name { get; set; }
        public string icon { get; set; }
        public double price { get; set; }
        public double? discount { get; set; }
        public string? description1 { get; set; }
        public string? description2 { get; set; }
        public string? description3 { get; set; }
        public string? description4 { get; set; }
        public string? InternetDescription { get; set; }
        public int downSpeed { get; set; }
        public int upSpeed { get; set; }
        public string? addTex { get; set; }
        public int? relevant { get; set; }
        public byte? isInternetOnly { get; set; }
        public byte? isPhoneUnlimited { get; set; }
        public byte? isTvOnly { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime? updatedAt { get; set; }
    }
}
