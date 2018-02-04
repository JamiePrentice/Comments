using System.Collections.Generic;
using System.Linq;
using Comments.Contexts;
using Comments.Models;
using Microsoft.EntityFrameworkCore;

namespace Comments.Queries
{
    public class CommentQuery
    {
        public IEnumerable<Comment> QueryAll(Context context)
        {
            return context.Comments.AsNoTracking()
                .OrderBy(q => q.ParentCommentId)
                .ThenByDescending(q => q.Score)
                .ThenBy(q => q.CreatedTime);
        }

        public Comment QueryById(Context context, int id)
        {
            return context.Comments.FirstOrDefault(comment => comment.Id == id);
        }

        public IEnumerable<Comment> QueryByUrl(Context context, string domain, string url)
        {
            return context.Comments.AsNoTracking()
                .Where(comment => comment.Domain == domain)
                .Where(comment => comment.Url == url)
                .OrderByDescending(q => q.Score)
                .ThenBy(q => q.CreatedTime);
        }
    }
}