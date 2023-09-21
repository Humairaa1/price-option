import PriceOption from "./PriceOption";

const PriceOptions = () => {

    
      const priceOptions= [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "Fitness assessment",
              "Group fitness classes (limited)",
              "Free Wi-Fi",
              "Nutritional guidance",
              "Discounts at the gym shop"
            ],
            "price": 50
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "features": [
              "Full access to gym and equipment",
              "Locker room access",
              "Personal trainer consultation",
              "Unlimited group fitness classes",
              "Sauna and steam room access",
              "Towel service",
              "Complimentary smoothies",
              "Access to exclusive member events"
            ],
            "price": 80
          },
          {
            "id": 3,
            "name": "Student Membership",
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "Valid student ID required",
              "Discounted rates for students",
              "Access to study area",
              "Monthly fitness challenges",
              "Student-only fitness classes"
            ],
            "price": 90
          }
        ]
      
    return (
        <div>
            <h3 className="text-5xl font-bold text-center my-8">Best Price in the world</h3>
            
            <div className="grid md:grid-cols-3 gap-10">
            {
                priceOptions.map(priceOption => <PriceOption key={priceOption.id} option={priceOption}></PriceOption>)
            }
            </div>
            
        </div>
    );
};

export default PriceOptions;