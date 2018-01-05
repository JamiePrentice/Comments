using Comments.Contexts;
using Comments.Models;

namespace Comments.Commands
{
	public class ReportCommand
	{
		public Report Create(CommentContext context, Report report)
		{
			context.Reports.Add(report);
			context.SaveChanges();

			return report;
		}
	}
}