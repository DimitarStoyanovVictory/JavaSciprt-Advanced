using FurnitureManufacturer.Interfaces;

namespace FurnitureManufacturer.Models
{
    public abstract class Furniture : IFurniture
    {
        public Furniture(string model, string material, decimal price, decimal height)
        {
            Model = model;
            Material = material;
            Price = price;
            Height = height;
        }

        public string Model { get; set; }
        
        public string Material { get; set; }

        public decimal Price { get; set; }

        public decimal Height { get; set; }

        public override string ToString()
        {
            return string.Format
                ("Type: {0}, Model: {1}, Material: {2}, Price: {3}, Height: {4}", GetType().Name, Model, Material, Price, Height);
        }
    }
}
