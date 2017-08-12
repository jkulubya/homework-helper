using System.ComponentModel.DataAnnotations;

namespace homework_helper_server.Models.QuestionViewModels
{
    public class CreateAnswerViewModel
    {
        [Required]
        public int QuestionId { get; set; }

        [Required]
        public string Text { get; set; }
    }
}