using Comments.Commands;
using Comments.Contexts;
using Comments.Models;
using Comments.Queries;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Comments.Controllers
{
	[Route("api/reports")]
	public class ReportController : Controller
	{
		private readonly Context _context;

		public ReportController(Context context)
		{
			_context = context;
		}

		// GET api/reports
		[HttpGet]
		public IEnumerable<Report> GetAll()
		{
			return new ReportQuery().QueryAll(_context);
		}

		// GET api/report/5
		[HttpGet("{id}", Name = "GetReport")]
		public IActionResult Get(int id)
		{
			Report existingReport = new ReportQuery().QueryById(_context, id);
			if (existingReport == null)
			{
				return NotFound();
			}

			return new ObjectResult(existingReport);
		}

		// POST api/reports
		[HttpPost]
		public IActionResult Create([FromBody] Report report)
		{
			if (report == null)
			{
				return BadRequest();
			}

			Report createdReport = new ReportCommand().Create(_context, report);

			return CreatedAtRoute("GetReport", new { id = createdReport.Id }, createdReport);
		}
	}
}