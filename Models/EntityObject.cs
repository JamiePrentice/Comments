﻿using System;

namespace Comments.Models
{
    public abstract class EntityObject
    {
	    #region Properties

		public Guid Id { get; set; }
		public DateTime CreatedTime { get; set; }
		public DateTime? UpdatedTime { get; set; }
		public DateTime? DeletedTime { get; set; }

		public bool IsDeleted { get; set; }

		#endregion

		public void Delete()
	    {
		    IsDeleted = true;
	    }
	}
}
