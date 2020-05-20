using Microsoft.Azure.Cosmos.Spatial;

namespace MapVisualization.Models
{
    public class Need : Model
    {
        public string CreatedById { get; set; }

        public string Description { get; set; }

        public string Location { get; set; }

        public Point LocationCoordinates { get; set; }
    }
}
