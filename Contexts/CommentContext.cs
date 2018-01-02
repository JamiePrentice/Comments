using Comments.Models;
using Microsoft.EntityFrameworkCore;

namespace Comments.Contexts
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