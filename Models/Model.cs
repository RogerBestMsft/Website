using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace MapVisualization.Models
{
    public abstract class Model
    {
        [Key]
        [JsonProperty("id")]
        public string Id { get; set; }

        public Model()
        {
            Id = Guid.NewGuid().ToString();
        }
    }
}
