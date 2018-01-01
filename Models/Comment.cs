namespace Comments.Models
{
    public class Comment : EntityObject
    {
        #region Properties
        
        public string Text { get; set; }
        public string Username { get; set; }
        public string IPAddress { get; set; }
        public string Domain { get; set; }
        public string Url { get; set; }
        public int? ParentCommentId { get; set; }

        #endregion Properties

        #region Constructors

        public Comment()
        {
        }

        public Comment(string text, string username, string ipAddress, string domain, string url, int parentCommentId)
        {
            Text = text;
            Username = username;
            IPAddress = ipAddress;
            Domain = domain;
            Url = url;
	        ParentCommentId = parentCommentId;
        }

        #endregion Constructors
    }
}