using Microsoft.Azure.Cosmos.Spatial;

namespace MapVisualization.Models
{
    public class User : Model
    {
        public bool IsGreyshirt { get; set; }

        public string Location { get; set; }

        public Point LocationCoordinates { get; set; }
    }
}
