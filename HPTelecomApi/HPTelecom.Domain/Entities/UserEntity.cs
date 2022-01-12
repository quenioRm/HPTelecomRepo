
namespace HPTelecom.Domain.Entities
{
    public class UserEntity : BaseEntity
    {
        public string name { get; set; }
        public string password { get; set; }
        public string email { get; set; }
    }
}
