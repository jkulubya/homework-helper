using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using homework_helper_server.Data;
using homework_helper_server.Models;
using homework_helper_server.Models.QuestionViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Omu.ValueInjecter;

namespace homework_helper_server.Controllers
{
    [Route("api/[controller]")]
    public class QuestionsController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<User> _userManager;

        public QuestionsController(ApplicationDbContext context, UserManager<User> userManager) 
        {
            _context = context;
            _userManager = userManager;
        }

        public IActionResult Index()
        {
            var result = _context.Questions.ToList();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var question = _context.Questions.Include(q => q.Creator).SingleOrDefault(q => q.Id == id);
            if(question == null) return NotFound();

            return Ok(question);
        }

        [HttpPost("")]
        public async Task<IActionResult> Create([FromBody] CreateQuestionViewModel model)
        {
            if(!ModelState.IsValid){
                return BadRequest();
            }
            var currentUser = await GetCurrentUser();
            if(currentUser == null) return Unauthorized();

            var question = Mapper.Map<Question>(model);
            question.CreatorId = currentUser.Id;
            _context.Questions.Add(question);
            await _context.SaveChangesAsync();
            return Ok(question);
        }

        private Task<User> GetCurrentUser()
        {
            return _userManager.FindByIdAsync(HttpContext.User.Claims.FirstOrDefault(c => c.Type == "id")?.Value);
        }
    }
}
