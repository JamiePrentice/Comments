using Comments.Models;
using Microsoft.EntityFrameworkCore;

namespace Comments.Contexts
{
	public class Context : DbContext
	{
		public Context(DbContextOptions<Context> options)
			: base(options)
		{
		}

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			Database.EnsureCreated();
			Database.Migrate();
		}

		public DbSet<Comment> Comments { get; set; }
		public DbSet<Report> Reports { get; set; }
	}
}