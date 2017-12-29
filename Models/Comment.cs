using System;

namespace Comments.Models
{
    public class Comment : EntityObject
    {
        #region Properties

        public string Username { get; set; }

        public string IPAddress { get; set; }

        public DateTime Date { get; set; }

        public string Doamin { get; set; }

        public string Url { get; set; }

		public Guid? ParentCommentId { get; set; }

        // ? User Fingerprint --- Need some kind of ID for banning.
        // # Reports - Seperate table?

        // Seperate solution for models and mapping?
        // API Solution?

        #endregion Properties

        #region Constructors

        public Comment()
        {
        }

        public Comment(string username, string ipAddress, DateTime date, string domain, string url, Guid parentCommentId)
        {
            Username = username;
            IPAddress = ipAddress;
            Date = date;
            Doamin = domain;
            Url = url;
	        ParentCommentId = parentCommentId;
        }

        #endregion Constructors
    }
}