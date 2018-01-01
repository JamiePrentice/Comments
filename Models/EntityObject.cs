using System;

namespace Comments.Models
{
	public abstract class EntityObject
	{
		#region Properties

		public int Id { get; set; }
		public DateTime CreatedTime
		{
			get => CreatedTime;
			set => CreatedTime = DateTime.Now;
		}

		#endregion Properties
	}
}