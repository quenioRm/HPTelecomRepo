using HPTelecom.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HPTelecom.Infra.Mapping
{
    public class PromotionsMap : IEntityTypeConfiguration<PromotionsEntity>
    {
        public void Configure(EntityTypeBuilder<PromotionsEntity> builder)
        {
            builder.ToTable("Table_Promotions");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .IsRequired();

            builder.Property(e => e.promotionName)
                .IsRequired()
                .HasMaxLength(150);

            builder.Property(e => e.imageUrl)
                .IsRequired()
                .HasColumnType("text");

            builder.Property(e => e.startedAt)
                .HasColumnType("datetime")
                .HasDefaultValueSql("(getdate())")
                .IsRequired();

            builder.Property(e => e.finishedAt)
                .HasColumnType("datetime")
                .HasDefaultValueSql("(getdate())")
                .IsRequired();
        }
    }
}
