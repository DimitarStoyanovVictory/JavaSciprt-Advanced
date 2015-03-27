using FurnitureManufacturer.Interfaces;

namespace FurnitureManufacturer.Models
{
    public class ConvertibleChair : Furniture, IConvertibleChair
    {
        private const decimal ConvertedHeight = 0.10m;
        private decimal normalHeight;

        public ConvertibleChair(string model, string material, decimal price, decimal height, int numberOfLegs)
           : base(model, material, price, height)
        {
            NumberOfLegs = numberOfLegs;
            normalHeight = Height;
        }

        public int NumberOfLegs { get; set; }

        public bool IsConverted { get; set; }

        public void Convert()
        {
            switch (IsConverted)
            {
                case true: Height = ConvertedHeight; break;
                case false: Height = normalHeight; break;
            }
        }

        public override string ToString()
        {
            return base.ToString() + string.Format(", Legs: {0}, State: {1}", this.NumberOfLegs, this.IsConverted ? "Converted" : "Normal");
        }
    }
}
