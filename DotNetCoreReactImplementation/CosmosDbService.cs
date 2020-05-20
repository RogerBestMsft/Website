using MapVisualization.Models;
using Microsoft.Azure.Cosmos;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MapVisualization.Services
{
    public class CosmosDbService : ICosmosDbService
    {


        private readonly Container userContainer;

        private readonly Container needContainer;

        public CosmosDbService(
            CosmosClient dbClient,
            string databaseName,
            string userContainerName, string needContainerName)
        {

            userContainer = dbClient.GetContainer(databaseName, userContainerName);
            needContainer = dbClient.GetContainer(databaseName, needContainerName);
        }


        public async Task<Models.User> GetUserAsync(string id)
        {
            try
            {
                var response = await userContainer.ReadItemAsync<Models.User>(id, new PartitionKey(id));
                return response.Resource;
            }
            catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.NotFound)
            {
                return null;
            }
        }

        public async Task<List<Models.User>> GetUsersAsync(string queryString)
        {
            var query = userContainer.GetItemQueryIterator<Models.User>(new QueryDefinition(queryString));
            var results = new List<Models.User>();
            while (query.HasMoreResults)
            {
                var response = await query.ReadNextAsync();

                results.AddRange(response.ToList());
            }

            return results;
        }

        public async Task<int> GetNeedTotalAsync(string queryString)
        {
            var query = needContainer.GetItemQueryIterator<Need>(new QueryDefinition(queryString));
            var results = new List<Need>();
            while (query.HasMoreResults)
            {
                var response = await query.ReadNextAsync();

                results.AddRange(response.ToList());
            }

            return results.Count;
        }

        public async Task<List<Need>> GetNeedsAsync(string queryString)
        {
            var query = needContainer.GetItemQueryIterator<Need>(new QueryDefinition(queryString));
            var results = new List<Need>();
            while (query.HasMoreResults)
            {
                var response = await query.ReadNextAsync();

                results.AddRange(response.ToList());
            }

            return results;
        }
    }
}
