import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

  const priceOptions = [
    {
      "id": 1,
      "option_name": "Basic Membership",
      "features": [
        "Access to gym facilities during staffed hours",
        "Use of cardio and strength equipment",
        "Locker room access",
        "Free Wi-Fi",
        "1 guest pass per month"
      ],
      "price": 29.99,
      "billing_cycle": "monthly"
    },
    {
      "id": 2,
      "option_name": "Standard Membership",
      "features": [
        "Access to gym facilities 24/7",
        "Use of cardio, strength, and free weights area",
        "Locker room and shower access",
        "Free Wi-Fi",
        "5 guest passes per month",
        "2 group fitness classes per week",
        "Access to sauna and steam room"
      ],
      "price": 49.99,
      "billing_cycle": "monthly"
    },
    {
      "id": 3,
      "option_name": "Premium Membership",
      "features": [
        "All access pass to gym facilities 24/7",
        "Unlimited use of cardio, strength, free weights, and functional training areas",
        "Priority locker room and shower access",
        "Unlimited guest passes",
        "Unlimited group fitness classes",
        "Access to exclusive training areas",
        "Free towel service",
        "Personal training session discounts",
        "Access to sauna, steam room, and hot tub",
        "Priority customer support"
      ],
      "price": 79.99,
      "billing_cycle": "monthly"
    }
  ]
  
  return (
    <div className="mt-12">
      <h2 className="text-5xl">Best prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {
          priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
      </div>
    </div>
  );
};

export default PriceOptions;