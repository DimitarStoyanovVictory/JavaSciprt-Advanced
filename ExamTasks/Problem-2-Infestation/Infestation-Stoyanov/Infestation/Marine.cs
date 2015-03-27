using System.Collections.Generic;
using Infestation.Supplements;

namespace Infestation
{
    public class Marine : Human
    {
        private ICollection<ISupplement> supplements;

        public Marine(string id)
            : base(id)
        {
            UnitType = UnitClassification.Biological;
            Health = Human.HumanHealth;
            Power = Human.HumanPower;
            Aggression = Human.HumanAggression;

            supplements = new List<ISupplement>() { new WeaponrySkill() };
        }

        public UnitClassification UnitType { get; set; }

        public int Health { get; set; }

        public int Power { get; set; }

        public int Aggression { get; set; }

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
