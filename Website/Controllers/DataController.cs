using MapVisualization.Models;
using MapVisualization.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MapVisualization.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataController : ControllerBase
    {
        private readonly ILogger<DataController> logger;

        private readonly ICosmosDbService cosmosDbService;

        private readonly IConfiguration configuration;

        public DataController(ILogger<DataController> logger, ICosmosDbService cosmosDbService, IConfiguration configuration)
        {
            this.logger = logger;
            this.cosmosDbService = cosmosDbService;
            this.configuration = configuration;
        }

        [HttpGet("resources")]
        public async Task<ActionResult<List<Resource>>> GetResources()
        {
            var users = await cosmosDbService.GetUsersAsync($"SELECT * FROM c");
            var resources = await cosmosDbService.GetResourcesAsync("SELECT c.CreatedById, c.Category, c.Name, c.Quantity, c.IsUnopened,c.CanShip, c.id FROM c");

            var lookup = users.ToDictionary(u => u.Id);
            var result = new List<Resource>();
            foreach (Resource resource in resources)
            {
                if (lookup.TryGetValue(resource.CreatedById, out User user))
                {
                    resource.Location = user.Location;
                    resource.LocationCoordinates = user.LocationCoordinates;

                    result.Add(resource);
                }
                continue;
            }
            return result;
        }

        [HttpGet("needs")]
        public async Task<ActionResult<List<Need>>> GetNeeds()
        {
            var users = await cosmosDbService.GetUsersAsync("SELECT c.id, c.Location, c.LocationCoordinates FROM c");
            var needs = await cosmosDbService.GetNeedsAsync("SELECT c.CreatedById, c.Category, c.Name, c.Quantity, c.UnopenedOnly, c.Instructions, c.id FROM c");

            var lookup = users.ToDictionary(u => u.Id);
            var result = new List<Need>();
            foreach (Need need in needs)
            {
                if (lookup.TryGetValue(need.CreatedById, out User user))
                {
                    need.Location = user.Location;
                    need.LocationCoordinates = user.LocationCoordinates;

                    result.Add(need);
                }
                continue;
            }
            return result;
        }

        [HttpGet("locations")]
        public async Task<ActionResult<List<User>>> GetLocations()
        {
            return await cosmosDbService.GetUsersAsync("SELECT c.id, c.Location, c.LocationCoordinates FROM c");
        }

        [HttpGet("totals")]
        public async Task<ActionResult<Dictionary<string, int>>> GetTotals()
        {

            int resourcesTotal = await cosmosDbService.GetResourceTotalAsync("SELECT * FROM c");
            int needsTotal = await cosmosDbService.GetNeedTotalAsync("SELECT * FROM c");
            return new Dictionary<string, int>() { { "resources", resourcesTotal }, { "needs", needsTotal } };
        }

        [HttpGet("bingmapsapikey")]
        public ActionResult<Dictionary<string, string>> GetBingMapsApiKey()
        {
            return new Dictionary<string, string>() { { "key", configuration.GetSection("bingMapsAPI").GetSection("key").Value } };
        }
    }
}
