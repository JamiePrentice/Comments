﻿namespace Models.Comments
{
    public class Comment
    {
        public long Id { get; set; }

        public string Name { get; set; }

        public bool IsComplete { get; set; }

        // Comment
        // ? Username
        // ? User IP
        // ? User Fingerprint --- Need some kind of ID for banning.
        // DateTime
        // Domain
        // URL
        // ? Deleted
        // # Reports - Seperate table?

        // Seperate solution for models and mapping?
        // API Solution?

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