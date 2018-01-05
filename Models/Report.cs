using Newtonsoft.Json;

namespace Comments.Models
{
	public class Report : EntityObject
	{
		#region Properties

		public int CommentId { get; set; }
		public string Text { get; set; }
		public string IPAddress { get; set; }

		#endregion Properties
	}
}