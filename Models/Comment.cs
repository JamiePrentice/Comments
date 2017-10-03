namespace Models.Comments
{
    public class Comment
    {
        public long Id { get; protected set; }

        public string Name { get; protected set; }

        public bool IsComplete { get; protected set; }

        // Comment
        // ? Username
        // ? User IP
        // ? User Fingerprint --- Need some kind of ID for banning.
        // DateTime
        // Domain
        // URL
        // ? Deleted
        // # Reports - Seperate table?

        #region Constructors

        public Comment()
        {
        }

        public Comment(string name, bool isComplete)
        {
            Name = name;
            IsComplete = isComplete;
        }

        #endregion Constructors
    }
}