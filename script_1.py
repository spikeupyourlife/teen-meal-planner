# Create a comprehensive 4-week rotating meal plan with detailed portions and variety
import pandas as pd

# Week 1 Meal Plan with specific portions
week1_plan = {
    'Day': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    'Breakfast': [
        'GF oats (½ cup) + plant milk (250ml) + banana + almond butter (1 tbsp)',
        'GF toast (2 slices) + avocado (½) + tomato + lactose-free cheese (20g)',
        'Smoothie: plant milk (250ml) + mango (1 cup) + spinach + chia seeds (1 tbsp)',
        'GF cereal (⅔ cup) + plant milk (250ml) + berries (½ cup)',
        'Scrambled eggs (2) + GF toast (2 slices) + dairy-free butter',
        'GF pancakes (2 medium) + banana + maple syrup + plant milk (250ml)',
        'Rice cakes (3) + almond butter (2 tbsp) + apple slices + plant milk (250ml)'
    ],
    'Morning Tea': [
        'Apple + almonds (20g)',
        'Rice crackers (5) + hummus (2 tbsp)',
        'Banana + walnuts (15g)',
        'GF muffin (homemade) + plant milk (125ml)',
        'Pear + Brazil nuts (15g)',
        'Trail mix (30g)',
        'Orange + cashews (20g)'
    ],
    'Lunch': [
        'Quinoa salad (1 cup) + tuna (100g) + vegetables + olive oil dressing',
        'GF wrap + chicken (80g) + dairy-free cheese + salad',
        'Brown rice (1 cup) + lentil curry (¾ cup) + steamed broccoli',
        'GF pasta (1 cup) + meat sauce (dairy-free) + side salad',
        'Chicken Caesar salad (GF, DF) + GF bread (2 slices)',
        'Rice paper rolls (3) + chicken + vegetables + dipping sauce',
        'Leftover dinner + fresh fruit'
    ],
    'Afternoon Snack': [
        'Carrot sticks + hummus (2 tbsp)',
        'Rice cakes (2) + avocado (¼)',
        'Cherry tomatoes + dairy-free cheese (20g)',
        'Smoothie: plant milk + berries',
        'Celery + almond butter (1 tbsp)',
        'Corn crackers + dairy-free cheese',
        'Homemade energy balls (2)'
    ],
    'Dinner': [
        'Grilled salmon (120g) + roast vegetables + sweet potato + quinoa (½ cup)',
        'Chicken stir-fry + brown rice (1 cup) + mixed vegetables',
        'Beef curry (dairy-free) + basmati rice (1 cup) + naan bread (GF)',
        'Pork tenderloin + mashed potato + green beans + carrots',
        'Fish tacos (corn tortillas) + avocado + slaw + beans',
        'Roast chicken + vegetables + gravy (dairy-free) + potatoes',
        'Spaghetti bolognese (dairy-free) + side salad + GF garlic bread'
    ],
    'Evening Snack': [
        'Herbal tea + 2 GF cookies',
        'Plant milk (125ml) + banana bread slice',
        'Dairy-free yogurt (100g) + berries',
        'Rice crackers (3) + nut butter',
        'Chamomile tea + apple slices',
        'Hot chocolate (dairy-free)',
        'Popcorn (2 cups)'
    ]
}

# Week 2 Plan - Different varieties
week2_plan = {
    'Day': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    'Breakfast': [
        'Smoothie bowl: acai + banana + granola (GF) + coconut milk',
        'GF toast (2) + peanut butter + banana + hemp seeds',
        'Chia pudding + coconut milk + mango + nuts',
        'GF muesli + plant milk + apple + cinnamon',
        'Veggie omelet (2 eggs) + GF toast + dairy-free cheese',
        'GF waffles + berries + maple syrup + plant milk',
        'Breakfast quinoa + almond milk + fruit + nuts'
    ],
    'Morning Tea': [
        'Kiwi fruit + pistachios (20g)',
        'GF crackers + dairy-free cheese',
        'Grapes + almonds (15g)',
        'Homemade muffin + coconut milk',
        'Mandarin + mixed nuts (20g)',
        'Seed crackers + avocado',
        'Berries + coconut yogurt'
    ],
    'Lunch': [
        'Buddha bowl: quinoa + roast veg + tahini dressing + seeds',
        'GF sandwich: turkey + avocado + salad + mayo (DF)',
        'Asian noodle soup (rice noodles) + vegetables + tofu',
        'Mexican bowl: rice + beans + corn + avocado + salsa',
        'Salmon salad + sweet potato + leafy greens + nuts',
        'Vietnamese pho (rice noodles) + herbs + lime',
        'Leftover dinner portion + side salad'
    ],
    'Afternoon Snack': [
        'Cucumber + tzatziki (dairy-free)',
        'Apple slices + sunflower seed butter',
        'Edamame (½ cup)',
        'Coconut water + dates (2)',
        'Bell pepper strips + hummus',
        'Rice cakes + dairy-free cream cheese',
        'Frozen fruit pops (homemade)'
    ],
    'Dinner': [
        'Lamb chops + quinoa tabbouleh + grilled vegetables',
        'Thai green curry (coconut milk) + jasmine rice + vegetables',
        'Baked cod + herb potatoes + asparagus + lemon',
        'Beef and vegetable stew + crusty GF bread',
        'Chicken fajitas (corn tortillas) + guacamole + beans',
        'BBQ ribs (dairy-free sauce) + coleslaw + corn + potatoes',
        'Vegetarian lasagna (dairy-free) + garden salad'
    ],
    'Evening Snack': [
        'Coconut milk + cacao powder (hot chocolate)',
        'GF toast + almond butter + honey',
        'Fruit salad + coconut cream',
        'Herbal tea + dairy-free ice cream (small)',
        'Crackers + dairy-free cheese',
        'Smoothie: plant milk + banana + berries',
        'Air-popped popcorn + nutritional yeast'
    ]
}

# Convert to DataFrames
week1_df = pd.DataFrame(week1_plan)
week2_df = pd.DataFrame(week2_plan)

print("WEEK 1 DETAILED MEAL PLAN")
print("=" * 40)
print(week1_df.to_string(index=False))
print("\n")

print("WEEK 2 DETAILED MEAL PLAN")
print("=" * 40)
print(week2_df.to_string(index=False))
print("\nNote: Weeks 3 & 4 repeat Weeks 1 & 2 with seasonal variations and family preferences")