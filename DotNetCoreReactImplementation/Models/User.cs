using Microsoft.Azure.Cosmos.Spatial;

namespace MapVisualization.Models
{
    public class User : Model
    {
        public string Location { get; set; }

        public Point LocationCoordinates { get; set; }
    }
}
