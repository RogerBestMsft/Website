﻿using Microsoft.Azure.Cosmos.Spatial;

namespace MapVisualization.Models
{
    public class Need : Model
    {
        public string CreatedById { get; set; }

        public string Category { get; set; }

        public string Name { get; set; }

        public int Quantity { get; set; }

        public bool UnopenedOnly { get; set; }

        public string Instructions { get; set; }
        
        public string Location { get; set; }

        public Point LocationCoordinates { get; set; }
    }
}
