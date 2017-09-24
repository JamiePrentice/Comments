using Comments.Models;
using Microsoft.AspNetCore.Mvc;
using Models.Comments;
using System.Collections.Generic;
using System.Linq;

namespace Comments.Controllers
{
    [Route("api/comment")]
    public class CommentController : Controller
    {
        private readonly CommentContext _context;

        public CommentController(CommentContext context)
        {
            _context = context;

            if (_context.Comments.Count() == 0)
            {
                _context.Comments.Add(new Comment { Name = "comment1" });
                _context.SaveChanges();
            }
        }

        // GET api/comment
        [HttpGet]
        public IEnumerable<Comment> GetAll()
        {
            return _context.Comments.ToList();
        }

        // GET api/comment/5
        [HttpGet("{id}", Name = "GetComment")]
        public IActionResult GetById(long id)
        {
            var comment = _context.Comments.FirstOrDefault(t => t.Id == id);
            if (comment == null)
            {
                return NotFound();
            }
            return new ObjectResult(comment);
        }

        // POST api/comments
        [HttpPost]
        public IActionResult Create([FromBody] Comment comment)
        {
            if (comment == null)
            {
                return BadRequest();
            }

            _context.Comments.Add(comment);
            _context.SaveChanges();

            return CreatedAtRoute("GetComment", new { id = comment.Id }, comment);
        }

        // PUT api/comments/5
        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Comment comment)
        {
            if (comment == null || comment.Id != id)
            {
                return BadRequest();
            }

            var existingComment = _context.Comments.FirstOrDefault(t => t.Id == id);
            if (existingComment == null)
            {
                return NotFound();
            }

            existingComment.IsComplete = comment.IsComplete;
            existingComment.Name = comment.Name;

            _context.Comments.Update(existingComment);
            _context.SaveChanges();
            return new NoContentResult();
        }

        // DELETE api/comments/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var comment = _context.Comments.FirstOrDefault(t => t.Id == id);
            if (comment == null)
            {
                return NotFound();
            }

            _context.Comments.Remove(comment);
            _context.SaveChanges();
            return new NoContentResult();
        }
    }
}