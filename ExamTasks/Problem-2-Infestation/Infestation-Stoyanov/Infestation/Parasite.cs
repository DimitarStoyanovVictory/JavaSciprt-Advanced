using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Infestation
{
    public class Parasite : Unit
    {
        private ICollection<ISupplement> supplements;

        public Parasite(string id)
            : base(id, UnitClassification.Biological, 1, 1, 1)
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
