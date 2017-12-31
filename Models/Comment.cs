using System;

namespace Comments.Models
{
    public class Comment : EntityObject
    {
        #region Properties

        private string _Text;
        private string _Username;
        private string _IPAddress;
        private string _Domain;
        private string _Url;
        private int? _ParentCommentId;

        #endregion Properties
        
        #region Getters & Setters
        
        public string Text
        {
            get => _Text;
            set => _Text = value;
        }
        
        public string Username
        {
            get => _Username;
            set => _Username = value;
        }

        public string IPAddress
        {
            get => _IPAddress;
            set => _IPAddress = value;
        }

        public string Domain
        {
            get => _Domain;
            set => _Domain = value;
        }

        public string Url
        {
            get => _Url;
            set => _Url = value;
        }
        
        public int? ParentCommentId
        {
            get => _ParentCommentId;
            set => _ParentCommentId = value;
        }

        #endregion


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