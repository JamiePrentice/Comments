using Microsoft.EntityFrameworkCore;

namespace Comments.Models
{
    public class CommentContext : DbContext
    {
        public CommentContext(DbContextOptions<CommentContext> options)
            : base(options)
        {
        }

        public DbSet<Comment> Comments { get; set; }
    }
}