using HPTelecom.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HPTelecom.Infra.Mapping
{
    public class CheckAvailabilityMap : IEntityTypeConfiguration<CheckAvailabilityEntity>
    {
        public void Configure(EntityTypeBuilder<CheckAvailabilityEntity> builder)
        {
            builder.ToTable("Table_Check_Availability");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .IsRequired();

            builder.Property(e => e.name)
                .IsRequired()
                .HasMaxLength(150);

            builder.Property(e => e.telephone)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(e => e.cep)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(e => e.createdAt)
                .HasColumnType("datetime")
                .HasDefaultValueSql("(getdate())")
                .IsRequired();
        }
    }
}
