using HPTelecom.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HPTelecom.Infra.Mapping
{
    public class PlanPriceNewMap : IEntityTypeConfiguration<PlanPriceNewEntity>
    {
        public void Configure(EntityTypeBuilder<PlanPriceNewEntity> builder)
        {
            builder.ToTable("Table_Plan_Price_New");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .IsRequired();

            builder.Property(e => e.name)
                .IsRequired()
                .HasMaxLength(150);

            builder.Property(e => e.icon)
                .HasMaxLength(150);

            builder.Property(e => e.price)
                .HasColumnType("decimal(10, 2)")
                .IsRequired();

            builder.Property(e => e.discount)
                .HasColumnType("decimal(10, 2)");

            builder.Property(e => e.firstDescription)
                .HasMaxLength(250);

            builder.Property(e => e.secondDescription)
                .HasMaxLength(250);

            builder.Property(e => e.thirdDescription)
                .HasMaxLength(250);

            builder.Property(e => e.fourthDescription)
                .HasMaxLength(250);

            builder.Property(e => e.downSpeed)
                .HasColumnType("int")
                .IsRequired();

            builder.Property(e => e.upSpeed)
                .HasColumnType("int")
                .IsRequired();

            builder.Property(e => e.turboMessageShow)
                .HasColumnType("tinyint");

            builder.Property(e => e.createdAt)
                .HasColumnType("datetime")
                .HasDefaultValueSql("(getdate())")
                .IsRequired();

            builder.Property(e => e.updatedAt)
                .HasColumnType("datetime");
        }
    }
}
