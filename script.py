# Create comprehensive daily meal timing and serving sizes for a 15-year-old lactose intolerant teenager
import pandas as pd

# Daily eating schedule based on research on teenage eating patterns
daily_schedule = {
    'Meal/Snack Time': [
        '6:30-7:30 AM', '9:30-10:00 AM', '12:00-1:00 PM', 
        '3:00-3:30 PM', '5:30-6:30 PM', '8:00-8:30 PM'
    ],
    'Meal Type': [
        'Breakfast', 'Morning Tea', 'Lunch', 
        'Afternoon Snack', 'Dinner', 'Evening Snack'
    ],
    'Purpose/Function': [
        'Break overnight fast, fuel morning activities',
        'Maintain energy, prevent hunger before lunch',
        'Main midday meal, sustain afternoon energy',
        'Post-school refuel, prevent overeating at dinner',
        'Main evening meal, family time',
        'Light snack if needed, support overnight recovery'
    ],
    'Optimal Eating Window': [
        'Essential - start metabolism',
        'Important - maintain blood sugar',
        'Essential - main fuel source',
        'Important - prevent energy crash',
        'Essential - family nutrition',
        'Optional - if genuinely hungry'
    ]
}

# Serving sizes specific to 15-year-old girls (based on Australian/NZ guidelines)
serving_sizes = {
    'Food Group': [
        'Vegetables & Legumes', 'Fruit', 'Grain Foods (mostly wholegrain)', 
        'Lean Meat/Protein', 'Dairy/Alternatives', 'Healthy Fats'
    ],
    'Daily Serves Needed (15yr girl)': ['5 serves', '2 serves', '7 serves', '2.5 serves', '3.5 serves', '2 serves'],
    'What is 1 Serve': [
        '½ cup cooked veg OR 1 cup raw salad OR ½ medium potato',
        '1 medium apple/banana OR 2 small fruits OR 1 cup diced fruit',
        '1 slice bread OR ½ cup cooked rice/pasta OR ⅔ cup cereal',
        '65g cooked meat OR 1 egg OR ⅓ cup nuts OR ¾ cup legumes',
        '250ml milk OR 200g yogurt OR 40g cheese OR 250ml fortified plant milk',
        '1 tbsp oil OR 20g nuts OR ½ avocado OR 1 tbsp nut butter'
    ],
    'Distribution Across Day': [
        '2 at lunch, 2 at dinner, 1 in snacks',
        '1 at breakfast, 1 in snacks',
        '2 at breakfast, 2 at lunch, 3 at dinner',
        '1 at lunch, 1.5 at dinner',
        '1 at breakfast, 1 at lunch, 1.5 at dinner',
        'Spread across meals and snacks'
    ]
}

# Convert to DataFrames
schedule_df = pd.DataFrame(daily_schedule)
serving_df = pd.DataFrame(serving_sizes)

print("OPTIMAL DAILY EATING SCHEDULE FOR TEENAGERS")
print("=" * 50)
print(schedule_df.to_string(index=False))
print("\n")

print("DAILY SERVING REQUIREMENTS - 15 YEAR OLD GIRL")
print("=" * 50)
print(serving_df.to_string(index=False))
print("\n")

# Calculate total daily nutritional targets
print("DAILY NUTRITIONAL TARGETS")
print("=" * 30)
print("Energy: 2,200-2,500 calories")
print("Protein: 45-55g (1g per kg body weight)")
print("Calcium: 1,300mg")
print("Iron: 15mg")
print("Fiber: 25g")
print("Fluid: 1.6-1.9L (6-8 cups)")