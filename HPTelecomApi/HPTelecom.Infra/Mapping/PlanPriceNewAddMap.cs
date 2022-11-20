using HPTelecom.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HPTelecom.Infra.Mapping
{
    public class PlanPriceNewAddMap : IEntityTypeConfiguration<PlanPriceNewAddEntity>
    {
        public void Configure(EntityTypeBuilder<PlanPriceNewAddEntity> builder)
        {
            builder.ToTable("Table_Plan_Price_New_Add");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .IsRequired();

            builder.Property(e => e.name)
                .IsRequired()
                .HasMaxLength(150);

            builder.Property(e => e.price)
                .HasColumnType("decimal(10, 2)")
                .IsRequired();

            builder.Property(e => e.downSpeedBonus)
                .HasColumnType("int")
                .IsRequired();

            builder.Property(e => e.upSpeedBonus)
                .HasColumnType("int")
                .IsRequired();

            builder.Property(e => e.createdAt)
                .HasColumnType("datetime")
                .HasDefaultValueSql("(getdate())")
                .IsRequired();

            builder.Property(e => e.updatedAt)
                .HasColumnType("datetime");
        }
    }
}
