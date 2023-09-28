using PizzaApp.Models;
using System.Collections.Generic;
using Xunit;

namespace PizzaApp.Tests
{
    public class PizzaOrderModelTests
    {
        [Fact]
        public void ToppingsSerialized_SerializesAndDeserializesCorrectly()
        {
            var pizzaOrder = new PizzaOrder();
            var toppings = new List<string> { "Mushrooms", "Pepperoni" };
            pizzaOrder.ToppingsList = toppings;
            var serialized = pizzaOrder.ToppingsSerialized;
            pizzaOrder.ToppingsSerialized = serialized;
            Xunit.Assert.Equal(toppings, pizzaOrder.ToppingsList);
        }
    }
}
