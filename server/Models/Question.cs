using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace homework_helper_server.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTimeOffset Date { get; set; } = DateTimeOffset.Now;
        public string CreatorId { get; set; }

        public User Creator { get; set; }
    }
}
