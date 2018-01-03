using System;
using Newtonsoft.Json;

namespace Comments.Models
{
	public abstract class EntityObject
	{
		#region Properties
		
		[JsonIgnore]
		public int Id { get; protected set; }
		[JsonIgnore]
		public DateTime CreatedTime { get; protected set; } = DateTime.Now;

		#endregion Properties
	}
}