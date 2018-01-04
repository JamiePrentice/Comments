using Comments.Contexts;
using Comments.Models;
using System.Collections.Generic;
using System.Linq;

namespace Comments.Queries
{
	public class CommentQuery
	{
		public IEnumerable<Comment> QueryAll(CommentContext context)
		{
			return context.Comments.ToList();
		}

		public Comment QueryById(CommentContext context, int id)
		{
			return context.Comments.FirstOrDefault(comment => comment.Id == id);
		}

		public IEnumerable<Comment> QueryByUrl(CommentContext context, string domain, string url)
		{
			return context.Comments.Where(comment => comment.Domain == domain)
				.Where(comment => comment.Url == url);
		}
	}
}