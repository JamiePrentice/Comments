using System;

namespace Comments.Models
{
	public abstract class EntityObject
	{
		#region Properties

		public int Id { get; set; }
		public DateTime CreatedTime { get; set; } = DateTime.Now;

		#endregion Properties
	}
}