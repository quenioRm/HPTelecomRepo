using HPTelecom.Domain.Entities;
using HPTelecom.Domain.Interfaces.Services;
using Microsoft.EntityFrameworkCore;

namespace HPTelecom.Infra.Repository
{
    public class BaseRepository<T, T2> : IRepository<T, T2>
        where T : BaseEntity<T2>
    {
        protected readonly DbContext _context;
        protected readonly DbSet<T> _dbset;

        public BaseRepository(DbContext context, DbSet<T> dbset)
        {
            _context = context;
            _dbset = dbset;
        }

        public async Task<bool> DeleteAsync(T2 Id)
        {
            var result = await _dbset.SingleOrDefaultAsync(p => p.Id.Equals(Id));
            if (result == null)
                return false;

            _dbset.Remove(result);

            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<T> InsertAsync(T item)
        {
            item.createdAt = DateTime.Now;
            _dbset.Add(item);

            await _context.SaveChangesAsync();

            return item;
        }

        public async Task<bool> ExistAsync(T2 Id)
        {
            return await _dbset.AnyAsync(p => p.Id.Equals(Id));
        }

        public async Task<T> SelectAsync(T2 Id)
        {
            return await _dbset.SingleOrDefaultAsync(p => p.Id.Equals(Id));
        }

        public async Task<IEnumerable<T>> SelectAsync()
        {
            return await _dbset.ToListAsync();
        }

        public async Task<T> UpdateAsync(T item)
        {
            var result = await _dbset.SingleOrDefaultAsync(p => p.Id.Equals(item.Id));
            if (result == null)
                return null;

            item.updatedAt = DateTime.Now;
            _context.Entry(result).CurrentValues.SetValues(item);

            await _context.SaveChangesAsync();

            return item;
        }
    }
}
