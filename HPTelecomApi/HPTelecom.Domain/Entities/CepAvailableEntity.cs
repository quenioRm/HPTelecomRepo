
namespace HPTelecom.Domain.Entities
{
    public class CepAvailableEntity : BaseEntity<Guid>
    {
        public string cep { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime updatedAt { get; set; }
    }
}
