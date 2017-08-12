using System;
using System.Collections.Generic;

namespace homework_helper_server.Models.QuestionViewModels
{
    public class AnswerViewModel
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public string CreatorId { get; set; }
        public DateTimeOffset Date { get; set; }
        public string Text { get; set; }

        public QuestionViewModel Question { get; set; }
        public UserViewModel Creator { get; set; }
        public List<Vote> Votes { get; set; }
    }
}