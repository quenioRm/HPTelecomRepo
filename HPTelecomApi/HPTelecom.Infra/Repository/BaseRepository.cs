using HPTelecom.Domain.Entities;
using HPTelecom.Domain.Interfaces;
using HPTelecom.Infra.Context;
using Microsoft.EntityFrameworkCore;

namespace HPTelecom.Infra.Repository
{
    public class BaseRepository<T> : IRepository<T> where T : BaseEntity
    {

        protected readonly HPTelecomContext _context;
        private DbSet<T> _dataset;
        public BaseRepository(HPTelecomContext context)
        {
            _context = context;
            _dataset = _context.Set<T>();
        }
        public async Task<bool> DeleteAsync(Guid id)
        {
            var result = await _dataset.SingleOrDefaultAsync(p => p.Id.Equals(id));
            if (result == null)
                return false;

            _dataset.Remove(result);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<T> InsertAsync(T item)
        {
            if (item.Id == Guid.Empty)
                item.Id = Guid.NewGuid();

            item.created_At = DateTime.UtcNow;
            _dataset.Add(item);

            await _context.SaveChangesAsync();

            return item;
        }

        public async Task<bool> ExistAsync(Guid id)
        {
            return await _dataset.AnyAsync(p => p.Id.Equals(id));
        }

        public async Task<T> SelectAsync(Guid id)
        {
            return await _dataset.SingleOrDefaultAsync(p => p.Id.Equals(id));
        }

        public async Task<IEnumerable<T>> SelectAsync()
        {
            return await _dataset.ToListAsync();
        }

        public async Task<T> UpdateAsync(T item)
        {
            var result = await _dataset.SingleOrDefaultAsync(p => p.Id.Equals(item.Id));
            if (result == null)
                return null;

            item.updated_At = DateTime.UtcNow;
            item.created_At = result.created_At;

            _context.Entry(result).CurrentValues.SetValues(item);
            await _context.SaveChangesAsync();

            return item;
        }
    }
}
