using HPTelecom.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HPTelecom.Infra.Mapping
{
    public class PlanPriceMap : IEntityTypeConfiguration<PlanPriceEntity>
    {
        public void Configure(EntityTypeBuilder<PlanPriceEntity> builder)
        {
            builder.ToTable("Table_Plan_Prices");

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

            builder.Property(e => e.description1)
                .IsRequired()
                .HasMaxLength(250);

            builder.Property(e => e.description2)
                .IsRequired()
                .HasMaxLength(250);

            builder.Property(e => e.description3)
                .IsRequired()
                .HasMaxLength(250);

            builder.Property(e => e.description4)
                .IsRequired()
                .HasMaxLength(250);

            builder.Property(e => e.downSpeed)
                .IsRequired();

            builder.Property(e => e.upSpeed)
                .IsRequired();

            builder.Property(e => e.addTex)
                .HasColumnType("text");

            builder.Property(e => e.relevant)
                .HasColumnType("int");

            builder.Property(e => e.createdAt)
                .HasColumnType("datetime")
                .HasDefaultValueSql("(getdate())")
                .IsRequired();

            builder.Property(e => e.updatedAt)
                .HasColumnType("datetime");
        }
    }
}
