using HPTelecom.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HPTelecom.Infra.Mapping
{
    public class CepAvailableMap : IEntityTypeConfiguration<CepAvailableEntity>
    {
        public void Configure(EntityTypeBuilder<CepAvailableEntity> builder)
        {
            builder.ToTable("cep_available");

            builder.Property(e => e.Id)
                   .HasMaxLength(40)
                   .IsRequired();

            builder.Property(e => e.cep)
                   .HasMaxLength(145)
                   .IsRequired();

            builder.Property(e => e.status)
                    .IsRequired();

            builder.Property(e => e.created_At)
                   .HasColumnType("timestamp")
                   .IsRequired();

            builder.Property(e => e.updated_At)
                   .HasColumnType("timestamp");
        }
    }
}
