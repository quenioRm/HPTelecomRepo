namespace HPTelecom.Domain.Entities
{
    public class CheckAvailabilityEntity : BaseEntity<int>
    {
        public string name { get; set; }
        public string telephone { get; set; }
        public string cep { get; set; }
        public DateTime createdAt { get; set; }
    }
}
