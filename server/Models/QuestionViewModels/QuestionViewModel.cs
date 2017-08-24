using System.Collections.Generic;

namespace homework_helper_server.Models.QuestionViewModels
{
    public class QuestionViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }

        public UserViewModel Creator { get; set; }
        public List<AnswerViewModel> Answers { get; set; }
    }
}