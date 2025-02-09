import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const PriceOptions =
        [
            {
                "id": 1,
                "name": "Basic Membership",
                "img": "basic.jpg",
                "description": "Access to gym facilities during off-peak hours.",
                "price": 19.99,
                "category": "Membership",
                "isFeature": false,
                "features": [
                    "Access to cardio and weight training areas",
                    "Locker room access",
                    "Free WiFi",
                    "Team fitness challenges"
                ]
            },
            {
                "id": 2,
                "name": "Standard Membership",
                "img": "standard.jpg",
                "description": "Full access to gym facilities with extended hours.",
                "price": 39.99,
                "category": "Membership",
                "isFeature": true,
                "features": [
                    "Access to all gym equipment",
                    "Group fitness classes",
                    "Sauna and steam room access",
                    "Locker and shower access",
                    "On-site gym sessions",
                    "Corporate discounts on memberships"
                ]
            },
            {
                "id": 3,
                "name": "Premium Membership",
                "img": "premium.jpg",
                "description": "All-inclusive gym membership with VIP perks.",
                "price": 69.99,
                "category": "Membership",
                "isFeature": true,
                "features": [
                    "24/7 gym access",
                    "Personal trainer consultation",
                    "Unlimited fitness classes",
                    "Priority booking for equipment and facilities",
                    "Nutritional guidance"
                ]
            },
            {
                "id": 4,
                "name": "Personal Training Package",
                "img": "training.jpg",
                "description": "One-on-one personal training sessions.",
                "price": 49.99,
                "category": "Training",
                "isFeature": false,
                "features": [
                    "Customized workout plans",
                    "One-on-one coaching",
                    "Progress tracking and feedback"
                ]
            },
            {
                "id": 5,
                "name": "Group Training Package",
                "img": "group.jpg",
                "description": "Small group training with a certified instructor.",
                "price": 29.99,
                "category": "Training",
                "isFeature": false,
                "features": [
                    "Structured group workouts",
                    "Certified trainer guidance",
                    "Social and motivating environment"
                ]
            }

        ]
    return (

        <div>
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;