using Comments.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Comments.Controllers
{
    [Route("api/comments")]
    public class CommentController : Controller
    {
        private readonly CommentContext _context;

        public CommentController(CommentContext context)
        {
            _context = context;
        }

        // GET api/comments
        [HttpGet]
        public IEnumerable<Comment> GetAll()
        {
            return _context.Comments.ToList();
        }

        // GET api/comments/5
        [HttpGet("{id}", Name = "GetComment")]
        public IActionResult Get(Guid id)
        {
            Comment existingComment = FindCommentById(id);
            if (existingComment == null)
            {
                return NotFound();
            }
            return new ObjectResult(existingComment);
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
        public IActionResult Update(Guid id, [FromBody] Comment comment)
        {
            if (comment == null || comment.Id != id)
            {
                return BadRequest();
            }

            Comment existingComment = FindCommentById(id);
            if (existingComment == null)
            {
                return NotFound();
            }

            _context.Comments.Update(existingComment);
            _context.SaveChanges();
            return new NoContentResult();
        }

        // DELETE api/comments/5
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            Comment existingComment = FindCommentById(id);
            if (existingComment == null)
            {
                return NotFound();
            }

            existingComment.Delete();

            _context.Comments.Remove(existingComment);
            _context.SaveChanges();
            return new NoContentResult();
        }

        private Comment FindCommentById(Guid id)
        {
            return _context.Comments.FirstOrDefault(t => t.Id == id);
        }

        //[HttpPost("{id}/up")]
        //public IActionResult VoteUp(Guid id)
        //{
        //}

        //[HttpPost("{id}/down")]
        //public IActionResult VoteDown(Guid id)
        //{
        //}

        //[HttpPost("{id}/reply")]
        //public IActionResult Reply(Guid id)
        //{
        //}

        //[HttpPost("{id}/report")]
        //public IActionResult Report(Guid id)
        //{
        //}
    }
}