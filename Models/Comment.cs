namespace Comments.Models
{
    public class Comment : EntityObject
    {
        public void IncrementScore()
        {
            Score++;
        }

        public void DecrementScore()
        {
            Score--;
        }

        #region Properties

        public string Text { get; set; }
        public string Username { get; set; }
        public string Domain { get; set; }
        public string Url { get; set; }
        public int? ParentCommentId { get; set; }
        public int Score { get; protected set; }

        #endregion Properties

        #region Constructors

        public Comment()
        {
        }

        public Comment(string text, string username, string ipAddress, string domain, string url, int score,
            int parentCommentId)
        {
            Text = text;
            Username = username;
            Domain = domain;
            Url = url;
            Score = score;
            ParentCommentId = parentCommentId;
        }

        #endregion Constructors
    }
}