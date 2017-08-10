using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace homework_helper_server.Models
{
    public class User : IdentityUser
    {
        public List<Question> QuestionsAsked { get; set; }
        public List<Answer> Answers { get; set; }
        public List<Vote> Votes { get; set; }
    }
}
