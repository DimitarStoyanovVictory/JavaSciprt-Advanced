using System.Collections.Generic;

namespace Infestation
{
    public class Tank : Unit
    {
        private ICollection<ISupplement> supplements;

        public Tank(string id)
            : base(id, UnitClassification.Mechanical, 20, 25, 25)
        {
        }

        public ICollection<ISupplement> Supplements
        {
            get
            {
                if (this.supplements == null)
                {
                    this.supplements = new List<ISupplement>();
                }

                return this.supplements;
            }

            private set
            {
                this.supplements = value;
            }
        }
    }
}
