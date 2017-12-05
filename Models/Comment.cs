using System;

namespace Models.Comments
{
    public class Comment
    {
        #region Properties

        public long Id { get; set; }

        public string Username { get; set; }

        public string IPAddress { get; set; }

        public DateTime Date { get; set; }

        public string Doamin { get; set; }

        public string Url { get; set; }

		public int ParentCommentId { get; set; }

	    private bool IsDeleted { get; set; } = false;

        // ? User Fingerprint --- Need some kind of ID for banning.
        // # Reports - Seperate table?

        // Seperate solution for models and mapping?
        // API Solution?

        #endregion Properties

        #region Constructors

        public Comment()
        {
        }

        public Comment(string username, string ipAddress, DateTime date, string domain, string url, int parentCommentId)
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