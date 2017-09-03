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
using Z.EntityFramework.Plus;

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
            var questions = _context.Questions.Include(q => q.Creator).Include(q => q.Category).Select(q => new QuestionViewModel {
                Creator = new UserViewModel {
                    Email = q.Creator.Email,
                    Id = q.Creator.Id,
                    UserName = q.Creator.UserName
                },
                Category = q.Category.Name,
                Date = q.Date,
                Description = q.Description,
                Id = q.Id,
                Title = q.Title
            }).ToList();

            return Ok(questions);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var question = _context.Questions.Include(q => q.Creator).Include(q => q.Category).Where(q => q.Id == id).Select(q => new QuestionViewModel {
                Creator = new UserViewModel {
                    Email = q.Creator.Email,
                    Id = q.Creator.Id,
                    UserName = q.Creator.UserName
                },
                Category = q.Category.Name,
                Date = q.Date,
                Description = q.Description,
                Id = q.Id,
                Title = q.Title
            }).SingleOrDefault();
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

        [HttpGet("answers/{id}")]
        public IActionResult Answers(int id)
        {
            var answers = _context.Answers.Include(a => a.Creator).Where(a => a.QuestionId == id)
                            .Select(a => new AnswerViewModel {
                                Creator = new UserViewModel {
                                    Email = a.Creator.Email,
                                    Id = a.Creator.Id,
                                    UserName = a.Creator.UserName
                                },
                                CreatorId = a.CreatorId,
                                Date = a.Date,
                                Id = a.Id,
                                Text = a.Text,
                                QuestionId = a.QuestionId
                            }).ToList();

            return Ok(answers);
        }

        [HttpPost("answer/{id}")]
        public async Task<IActionResult> Answer(int id, [FromBody] CreateAnswerViewModel model)
        {
            if(!ModelState.IsValid){
                return BadRequest();
            }

            if(id != model.QuestionId) return NotFound();

            var currentUser = await GetCurrentUser();
            var answer = Mapper.Map<Answer>(model);
            answer.CreatorId = currentUser.Id;
            answer.QuestionId = id;

            _context.Answers.Add(answer);
            _context.SaveChanges();
            
            return Ok(answer);
        }

        [HttpGet("/api/answers/{id}")]
        public async Task<IActionResult> GetSingleAnswer(int id)
        {
            var answer = _context.Answers.Include(a => a.Creator).Where(a => a.Id == id)
                            .Select(a => new AnswerViewModel {
                                Creator = new UserViewModel {
                                    Email = a.Creator.Email,
                                    Id = a.Creator.Id,
                                    UserName = a.Creator.UserName
                                },
                                CreatorId = a.CreatorId,
                                Date = a.Date,
                                Id = a.Id,
                                Text = a.Text,
                                QuestionId = a.QuestionId
                            }).SingleOrDefault();
            if(answer == null) return NotFound();
            return Ok(answer);
        }

        [HttpPost("upvote/{id}")]
        public async Task<IActionResult> Upvote(int id)
        {
            var currentUser = await GetCurrentUser();
            if(_context.Votes.Any(v => v.UserId == currentUser.Id && v.AnswerId == id))
            {
                _context.Votes.Where(v => v.UserId == currentUser.Id && v.AnswerId == id).Update(v => new Vote { Like = true});
            }
            else
            {
                var vote = new Vote 
                {
                    AnswerId = id,
                    Like = true,
                    UserId = currentUser.Id
                };
                _context.Votes.Add(vote);
                _context.SaveChanges();
            }
            return Ok();
        }

        [HttpPost("downvote/{id}")]
        public async Task<IActionResult> Downvote(int id)
        {
            var currentUser = await GetCurrentUser();
            if(_context.Votes.Any(v => v.UserId == currentUser.Id && v.AnswerId == id))
            {
                _context.Votes.Where(v => v.UserId == currentUser.Id && v.AnswerId == id).Update(v => new Vote { Like = false});
            }
            else
            {
                var vote = new Vote 
                {
                    AnswerId = id,
                    Like = false,
                    UserId = currentUser.Id
                };
                _context.Votes.Add(vote);
                _context.SaveChanges();
            }
            return Ok();
        }

        [HttpGet("/api/categories")]
        public async Task<IActionResult> Categories()
        {
            return Ok(_context.Categories.Include(c => c.Children).ToList());
        }

        private Task<User> GetCurrentUser()
        {
            return _userManager.FindByIdAsync(HttpContext.User.Claims.FirstOrDefault(c => c.Type == "id")?.Value);
        }
    }
}
