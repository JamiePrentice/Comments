using Comments.Contexts;
using Comments.Models;

namespace Comments.Commands
{
	public class CommentCommand
	{
		public Comment Create(CommentContext context, Comment comment)
		{
			context.Comments.Add(comment);
			context.SaveChanges();

			return comment;
		}
	}
}