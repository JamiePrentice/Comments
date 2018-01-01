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
		
		// GET api/comments/5
		[HttpGet("{domain}/{url}", Name = "GetComments")]
		public IEnumerable<Comment> GetByUrl(string domain, string url)
		{
			return FindByUrl(domain, url).ToList();
		}
		
		[HttpPost("{id}/up")]
		public Comment VoteUp(int id)
		{
			Comment selected = _context.Comments.FirstOrDefault(t => t.Id == id);
			selected?.PlusOne();
			_context.SaveChanges();

			return selected;
		}

		[HttpPost("{id}/down")]
		public Comment VoteDown(int id)
		{
			Comment selected = _context.Comments.FirstOrDefault(t => t.Id == id);
			selected?.MinusOne();
			_context.SaveChanges();

			return selected;
		}

		#region Helpers

		private IEnumerable<Comment> FindByUrl(string domain, string url)                               
		{                                                                                               
			return _context.Comments.Where(comment => comment.Domain == domain)                         
									.Where(comment => comment.Url == url);                                                  
		}                                                                                               
                                                                                                  
		private Comment FindCommentById(int id)                                                         
		{                                                                                               
			return _context.Comments.FirstOrDefault(comment => comment.Id == id);                       
		}                                                                                               

		#endregion Helpers
	

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