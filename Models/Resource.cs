using Microsoft.Azure.Cosmos.Spatial;

namespace MapVisualization.Models
{
    public class Resource : Model
    {
        public string CreatedById { get; set; }

        public string Category { get; set; }

        public string Name { get; set; }

        public int Quantity { get; set; }

        public bool IsUnopened { get; set; }

        public bool CanShip { get; set; }

        public Point LocationCoordinates { get; set; }
    }
}
