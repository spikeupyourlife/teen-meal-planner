# Create seasonal rotation and variety planning for the year
import pandas as pd

# Seasonal meal variations (New Zealand seasons)
seasonal_variations = {
    'Season': ['Summer (Dec-Feb)', 'Autumn (Mar-May)', 'Winter (Jun-Aug)', 'Spring (Sep-Nov)'],
    'Breakfast Focus': [
        'Fresh fruit bowls, smoothie bowls, overnight oats with berries',
        'Warm porridge, apple cinnamon oats, warming spices',
        'Hot breakfasts, hearty oats, warming smoothies with ginger',
        'Fresh seasonal fruits, lighter meals, vitamin C boost'
    ],
    'Lunch Emphasis': [
        'Cold salads, fresh wraps, gazpacho, light proteins',
        'Warm soups transition, roasted vegetable salads, comfort foods',
        'Hot soups, stews, warming curries, thermos meals',
        'Fresh salads return, lighter proteins, seasonal vegetables'
    ],
    'Dinner Themes': [
        'BBQ, grilled fish, fresh vegetables, light meals',
        'Roasted vegetables, casseroles, moderate portions',
        'Hearty stews, warming spices, comfort foods, larger portions',
        'Fresh herbs, lighter cooking, seasonal vegetables'
    ],
    'Seasonal Produce (NZ)': [
        'Stone fruits, berries, tomatoes, corn, courgettes, capsicum',
        'Apples, pears, pumpkin, kumara, broccoli, cauliflower',
        'Citrus fruits, root vegetables, cabbage, leeks, spinach',
        'Asparagus, new potatoes, fresh herbs, early stone fruits'
    ],
    'Shopping Focus': [
        'Fresh, light foods, cold preparations, seasonal fruits',
        'Transitioning to warming foods, preserving summer produce',
        'Hearty ingredients, warming spices, comfort food staples',
        'Fresh herbs, seasonal vegetables, lighter proteins'
    ]
}

# Monthly theme rotations to prevent boredom
monthly_themes = {
    'Month': ['January', 'February', 'March', 'April', 'May', 'June', 
              'July', 'August', 'September', 'October', 'November', 'December'],
    'Cuisine Theme': [
        'Mediterranean', 'Asian Fusion', 'Mexican/Latin', 'Indian/Middle Eastern',
        'Italian', 'Thai/Vietnamese', 'Comfort Foods', 'Japanese', 
        'Greek/Turkish', 'American/BBQ', 'French', 'Festive/Holiday'
    ],
    'Special Focus': [
        'Fresh summer salads, grilled proteins, olive oil based',
        'Stir-fries, rice dishes, ginger, coconut milk bases',
        'Beans, corn, avocado, lime, warming spices',
        'Lentils, chickpeas, turmeric, coconut, warming spices',
        'Pasta, tomatoes, herbs, dairy-free cheese alternatives',
        'Rice noodles, fresh herbs, coconut milk, light proteins',
        'Warming stews, roasts, mashed vegetables, hearty grains',
        'Rice bowls, seaweed, miso (check GF), clean flavors',
        'Olives, herbs, dairy-free feta, grilled vegetables',
        'Grilled meats, corn, potatoes, seasonal vegetables',
        'Herbs, simple preparations, quality ingredients',
        'Traditional dishes adapted, celebration foods'
    ],
    'Key Ingredients': [
        'Olives, tomatoes, herbs, lemon, GF pasta',
        'Rice, coconut milk, ginger, tamari (GF soy sauce)',
        'Beans, corn, avocado, lime, chili, corn tortillas',
        'Lentils, chickpeas, coconut milk, turmeric, cumin',
        'GF pasta, tomatoes, basil, dairy-free cheese',
        'Rice noodles, coconut milk, lemongrass, herbs',
        'Root vegetables, herbs, warming spices, legumes',
        'Rice, nori, miso (GF), sesame, clean proteins',
        'Olives, herbs, lemon, dairy-free feta, vegetables',
        'Corn, potatoes, grilled proteins, BBQ sauces (DF)',
        'Fresh herbs, quality oils, simple seasonings',
        'Traditional spices, celebration ingredients adapted'
    ]
}

# Recipe rotation system (prevents same meal within 6 weeks)
rotation_system = {
    'Week Type': ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    'Protein Rotation': [
        'Salmon, Chicken, Beef, Eggs, Legumes, Fish, Pork',
        'Lamb, Turkey, Tuna, Tofu, Chickpeas, Prawns, Beef',
        'Cod, Chicken, Lentils, Eggs, Pork, Salmon, Beans',
        'Beef, Fish, Chicken, Nuts/Seeds, Lamb, Legumes, Eggs',
        'Tuna, Chicken, Beef, Tofu, Fish, Pork, Lentils',
        'Salmon, Eggs, Chicken, Beef, Legumes, Fish, Lamb'
    ],
    'Grain Rotation': [
        'Rice, Quinoa, GF Pasta, GF Bread, Oats, Rice Noodles, Potatoes',
        'Quinoa, Rice, GF Bread, Oats, Potatoes, GF Pasta, Rice Cakes',
        'GF Pasta, Rice, Quinoa, Rice Noodles, GF Bread, Oats, Sweet Potato',
        'Rice, GF Bread, Quinoa, Potatoes, Oats, GF Pasta, Rice Noodles',
        'Quinoa, GF Pasta, Rice, GF Bread, Rice Noodles, Oats, Potatoes',
        'Rice, Quinoa, Oats, GF Pasta, GF Bread, Potatoes, Rice Noodles'
    ],
    'Vegetable Focus': [
        'Leafy greens, Root vegetables, Cruciferous, Nightshades, Legumes',
        'Root vegetables, Cruciferous, Nightshades, Leafy greens, Squash',
        'Cruciferous, Nightshades, Leafy greens, Root vegetables, Alliums',
        'Nightshades, Leafy greens, Root vegetables, Cruciferous, Legumes',
        'Leafy greens, Cruciferous, Root vegetables, Nightshades, Squash',
        'Root vegetables, Leafy greens, Cruciferous, Nightshades, Alliums'
    ]
}

# Convert to DataFrames
seasonal_df = pd.DataFrame(seasonal_variations)
monthly_df = pd.DataFrame(monthly_themes)
rotation_df = pd.DataFrame(rotation_system)

print("SEASONAL MEAL PLANNING VARIATIONS")
print("=" * 40)
print(seasonal_df.to_string(index=False))
print("\n")

print("MONTHLY CUISINE THEME ROTATIONS")
print("=" * 35)
print(monthly_df.to_string(index=False))
print("\n")

print("6-WEEK INGREDIENT ROTATION SYSTEM")
print("=" * 40)
print(rotation_df.to_string(index=False))
print("\nNote: This rotation ensures no meal is repeated within 6 weeks, providing variety while maintaining familiar foods")