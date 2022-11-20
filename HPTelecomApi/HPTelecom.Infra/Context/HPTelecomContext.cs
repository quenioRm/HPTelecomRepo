using HPTelecom.Domain.Entities;
using HPTelecom.Infra.Mapping;
using Microsoft.EntityFrameworkCore;

namespace HPTelecom.Infra.Context
{
    public class HPTelecomContext : DbContext
    {
        public DbSet<CepAvailableEntity> cepAvailable { get; set; }
        public DbSet<PlanPriceEntity> planPrice { get; set; }
        public DbSet<PromotionsEntity> promotions { get; set; }
        public DbSet<CheckAvailabilityEntity> checkAvailability { get; set; }
        public DbSet<PlanPriceNewEntity> PriceNewEntities { get; set; }
        public DbSet<PlanPriceNewAddEntity> PlanPriceNewAdds { get; set; }

        public HPTelecomContext(DbContextOptions<HPTelecomContext> options) : base(options)
        {
            //Database.Migrate();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<CepAvailableEntity>(new CepAvailableMap().Configure);
            modelBuilder.Entity<PlanPriceEntity>(new PlanPriceMap().Configure);
            modelBuilder.Entity<PromotionsEntity>(new PromotionsMap().Configure);
            modelBuilder.Entity<CheckAvailabilityEntity>(new CheckAvailabilityMap().Configure);
            modelBuilder.Entity<PlanPriceNewEntity>(new PlanPriceNewMap().Configure);
            modelBuilder.Entity<PlanPriceNewAddEntity>(new PlanPriceNewAddMap().Configure);
        }
    }
}
