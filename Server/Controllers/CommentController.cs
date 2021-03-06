using System.Collections.Generic;
using System.Linq;
using Comments.Commands;
using Comments.Contexts;
using Comments.Models;
using Comments.Queries;
using Microsoft.AspNetCore.Mvc;

namespace Comments.Controllers
{
    [Route("api/comments")]
    public class CommentController : Controller
    {
        private readonly Context _context;

        public CommentController(Context context)
        {
            _context = context;
        }

        // GET api/comments
        [HttpGet]
        public IEnumerable<Comment> GetAll()
        {
            return new CommentQuery().QueryAll(_context);
        }

        // GET api/comments/5
        [HttpGet("{id}", Name = "GetComment")]
        public IActionResult Get(int id)
        {
            var existingComment = new CommentQuery().QueryById(_context, id);
            if (existingComment == null) return NotFound();

            return new ObjectResult(existingComment);
        }

        // POST api/comments
        [HttpPost]
        public IActionResult Create([FromBody] Comment comment)
        {
            if (comment == null) return BadRequest();

            var createdComment = new CommentCommand().Create(_context, comment);

            return CreatedAtRoute("GetComment", new {id = createdComment.Id}, createdComment);
        }

        // GET api/comments/5
        [HttpGet("{domain}/{url}", Name = "GetComments")]
        public IEnumerable<Comment> GetByUrl(string domain, string url)
        {
            return new CommentQuery().QueryByUrl(_context, domain, url).ToList();
        }

        [HttpPost("{id}/up")]
        public Comment VoteUp(int id)
        {
            var selected = new CommentQuery().QueryById(_context, id);
            selected?.IncrementScore();
            _context.SaveChanges();

            return selected;
        }

        [HttpPost("{id}/down")]
        public Comment VoteDown(int id)
        {
            var selected = new CommentQuery().QueryById(_context, id);
            selected?.DecrementScore();
            _context.SaveChanges();

            return selected;
        }
    }
}