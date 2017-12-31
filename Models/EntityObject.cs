using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Comments.Models
{
	public abstract class EntityObject
	{
		#region Properties

		public int Id { get; set; }

		public DateTime CreatedTime { get; set; }
		public DateTime? UpdatedTime { get; set; }
		public DateTime? DeletedTime { get; set; }

		public bool IsDeleted { get; set; }

		#endregion Properties

		public void Delete()
		{
			IsDeleted = true;
			DeletedTime = DateTime.Now;
		}
	}
}