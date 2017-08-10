using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace homework_helper_server.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public string CreatorId { get; set; }
        public DateTimeOffset Date { get; set; } = DateTimeOffset.Now;
        public string Text { get; set; }

        public Question Question { get; set; }
        public User Creator { get; set; }
        public List<Vote> Votes { get; set; }
    }
}
