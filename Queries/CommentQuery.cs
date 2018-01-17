using System.Collections.Generic;
using System.Linq;
using Comments.Contexts;
using Comments.Models;

namespace Comments.Queries
{
    public class CommentQuery
    {
        public IEnumerable<Comment> QueryAll(Context context)
        {
            return context.Comments.ToList();
        }

        public Comment QueryById(Context context, int id)
        {
            return context.Comments.FirstOrDefault(comment => comment.Id == id);
        }

        public IEnumerable<Comment> QueryByUrl(Context context, string domain, string url)
        {
            return context.Comments.Where(comment => comment.Domain == domain)
                .Where(comment => comment.Url == url);
        }
    }
}