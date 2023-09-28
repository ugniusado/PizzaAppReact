using System.Collections.Generic;
using System.Text.Json;
using System.ComponentModel.DataAnnotations.Schema;

namespace PizzaApp.Models
{
    public class PizzaOrder
    {
        public int Id { get; set; }
        public string Size { get; set; }

        [NotMapped]
        public List<string> ToppingsList { get; set; } = new List<string>();

        public string ToppingsSerialized
        {
            get => ToppingsList == null ? null : JsonSerializer.Serialize(ToppingsList);
            set => ToppingsList = value == null ? new List<string>() : JsonSerializer.Deserialize<List<string>>(value);
        }

        public decimal TotalCost { get; set; }
    }
}
