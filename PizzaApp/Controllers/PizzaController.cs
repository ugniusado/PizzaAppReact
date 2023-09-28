using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PizzaApp.Data;
using PizzaApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace PizzaApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaController : ControllerBase
    {
        private readonly PizzaDbContext _context;

        public PizzaController(PizzaDbContext context)
        {
            _context = context;
        }

        // GET: api/Pizza
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PizzaOrder>>> GetPizzaOrders()
        {
            return await _context.PizzaOrders.ToListAsync();
        }

        // POST: api/Pizza
        [HttpPost]
        public async Task<ActionResult<PizzaOrder>> PostPizzaOrder(PizzaOrder order)
        {
            var toppingsList = order.ToppingsList;
            order.ToppingsList = toppingsList;
            _context.PizzaOrders.Add(order);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPizzaOrder), new { id = order.Id }, order);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PizzaOrder>> GetPizzaOrder(int id)
        {
            var pizzaOrder = await _context.PizzaOrders.FindAsync(id);

            if (pizzaOrder == null)
            {
                return NotFound();
            }

            return pizzaOrder;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePizzaOrder(int id)
        {
            var pizzaOrder = await _context.PizzaOrders.FindAsync(id);
            if (pizzaOrder == null)
            {
                return NotFound();
            }

            _context.PizzaOrders.Remove(pizzaOrder);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
