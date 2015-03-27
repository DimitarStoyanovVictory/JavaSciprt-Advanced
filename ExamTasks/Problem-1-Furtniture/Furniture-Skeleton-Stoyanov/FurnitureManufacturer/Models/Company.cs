using System.Collections.Generic;
using System.Linq;
using System.Text;
using FurnitureManufacturer.Interfaces;

namespace FurnitureManufacturer.Models
{
    public class Company : ICompany
    {
        private string name;
        private string registrationNumber;
        private ICollection<IFurniture> furnitures = new List<IFurniture>();

        public Company(string name, string registrationNumber)
        {
            this.name = name;
            this.registrationNumber = registrationNumber;
        }

        public string Name
        {
            get { return name; }
        }

        public string RegistrationNumber
        {
            get { return registrationNumber; }
        }

        public ICollection<IFurniture> Furnitures
        {
            get { return furnitures; }
        }

        public void Add(IFurniture furniture)
        {
            furnitures.Add(furniture);
        }

        public void Remove(IFurniture furniture)
        {
            furnitures.Add(furniture);
        }

        public IFurniture Find(string model)
        {
            return furnitures.Where
                (furniture => furniture.Model.ToLowerInvariant() == model.ToLowerInvariant()).FirstOrDefault();
        }

        public string Catalog()
        {
            List<IFurniture> sortedFurnituresByPrice = Furnitures.OrderBy(furniture => furniture.Price).OrderBy(furniture => furniture.GetType().Name).ToList();
            StringBuilder furnitureInfo = new StringBuilder();
            
            furnitureInfo.Append(string.Format("{0} - {1} - {2} {3}",
                Name, RegistrationNumber,
                Furnitures.Count != 0 ? Furnitures.Count.ToString() : "no",
                Furnitures.Count != 1 ? "furnitures" : "furniture"));

            foreach (var furniture in sortedFurnituresByPrice)
            {
                furnitureInfo.AppendLine();
                furnitureInfo.Append(furniture);
            }

            return furnitureInfo.ToString();
        }
    }
}
