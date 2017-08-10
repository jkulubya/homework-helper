using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace homework_helper_server.Models
{
    public class Vote
    {
        public string UserId { get; set; }
        public int AnswerId { get; set; }
        public bool Like { get; set; }

        public User User { get; set; }
        public Answer Answer { get; set; }
    }
}
