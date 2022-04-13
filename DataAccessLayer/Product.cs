﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class Product
    {
        public int id { get; set; }
        public string? name { get; set; }
        public string? image { get; set; }
        public string? description { get; set; }
        public int stockCount { get; set; }
        public int price { get; set; }
    }
}
