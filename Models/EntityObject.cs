using Newtonsoft.Json;
using System;

namespace Comments.Models
{
	public abstract class EntityObject
	{
		#region Properties

		public int Id { get; protected set; }
		public DateTime CreatedTime { get; protected set; } = DateTime.Now;

		#endregion Properties
	}
}