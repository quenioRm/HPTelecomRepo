using HPTelecom.Domain.Entities;

namespace HPTelecom.Domain.Interfaces.Services
{
    public interface IRepository<T, T2>
        where T : BaseEntity<T2>
    {
        Task<T> InsertAsync(T item);
        Task<T> UpdateAsync(T item);
        Task<bool> DeleteAsync(T2 Id);
        Task<T> SelectAsync(T2 Id);
        Task<IEnumerable<T>> SelectAsync();
        Task<bool> ExistAsync(T2 Id);
    }
}
