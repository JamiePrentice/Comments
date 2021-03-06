﻿using System.Collections.Generic;
using System.Linq;
using Comments.Contexts;
using Comments.Models;

namespace Comments.Queries
{
    public class ReportQuery
    {
        public IEnumerable<Report> QueryAll(Context context)
        {
            return context.Reports.ToList();
        }

        public Report QueryById(Context context, int id)
        {
            return context.Reports.FirstOrDefault(report => report.Id == id);
        }
    }
}