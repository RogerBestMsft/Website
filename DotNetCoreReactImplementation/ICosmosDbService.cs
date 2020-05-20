using MapVisualization.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MapVisualization.Services
{
    public interface ICosmosDbService
    {
        Task<List<User>> GetUsersAsync(string query);

        Task<User> GetUserAsync(string id);

        Task<List<Need>> GetNeedsAsync(string query);

        Task<int> GetNeedTotalAsync(string id);
    }
}
