using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Infestation
{
    public class Queen : Unit
    {
        private ICollection<ISupplement> supplements;

        public Queen(string id)
            : base(id, UnitClassification.Psionic, 30, 1, 1)
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
