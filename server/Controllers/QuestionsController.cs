using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using homework_helper_server.Data;
using Microsoft.AspNetCore.Mvc;

namespace homework_helper_server.Controllers
{
    [Route("api/[controller]")]
    public class QuestionsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public QuestionsController(ApplicationDbContext context) 
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var result = _context.Questions.ToList();
            return new OkObjectResult(result);
        }
    }
}
