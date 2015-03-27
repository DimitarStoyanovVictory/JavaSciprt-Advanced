using FurnitureManufacturer.Interfaces;

namespace FurnitureManufacturer.Models
{
    public class AdjustableChair : Furniture, IAdjustableChair
    {
        public AdjustableChair(string model, string material, decimal price, decimal height, int numberOfLegs) 
            : base(model, material, price, height)
        {
            NumberOfLegs = numberOfLegs;
        }

        public int NumberOfLegs { get; set; }

        public void SetHeight(decimal height)
        {
            Height = height;
        }

        public override string ToString()
        {
            return base.ToString() + string.Format
                (", Legs: {0}", this.NumberOfLegs);
        }
    }
}
