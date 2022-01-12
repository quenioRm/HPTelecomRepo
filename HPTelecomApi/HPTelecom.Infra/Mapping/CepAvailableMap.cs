using HPTelecom.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HPTelecom.Infra.Mapping
{
    public class CepAvailableMap : IEntityTypeConfiguration<CepAvailableEntity>
    {
        public void Configure(EntityTypeBuilder<CepAvailableEntity> builder)
        {
            builder.ToTable("Table_Cep_Available");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .IsRequired();

            builder.Property(e => e.cep)
                .IsRequired()
                .HasMaxLength(150);

            builder.Property(e => e.createdAt)
                .HasColumnType("datetime")
                .HasDefaultValueSql("(getdate())")
                .IsRequired();

            builder.Property(e => e.updatedAt)
                .HasColumnType("datetime");
        }
    }
}
