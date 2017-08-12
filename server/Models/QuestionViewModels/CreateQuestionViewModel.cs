using System.ComponentModel.DataAnnotations;

namespace homework_helper_server.Models.QuestionViewModels
{
    public class CreateQuestionViewModel
    {
        [Required]
        public string Title { get; set; }
        
        [Required]
        public string Description { get; set; }
        
        [Required]
        public int CategoryId { get; set; }
    }
}