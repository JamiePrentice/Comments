using System.Collections.Generic;
using System.Linq;
using Comments.Models;
using Microsoft.AspNetCore.Mvc;

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
		public IActionResult Get(int id)
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

		private Comment FindCommentById(int id)
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