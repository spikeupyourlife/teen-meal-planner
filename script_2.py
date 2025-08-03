# Create comprehensive monthly shopping lists organized by store and category
import pandas as pd

# Week 1 & 3 Shopping List (PAK'nSAVE - Primary shop)
paknsave_w1_3 = {
    'Category': [
        'Dairy Alternatives', 'Gluten-Free Grains', 'Proteins', 'Fresh Produce', 
        'Pantry Staples', 'Snacks', 'Frozen Items', 'Beverages'
    ],
    'Items Needed': [
        'Anchor Zero Lacto milk (2L), Vitasoy coconut milk (1L), Angel Food cheese (220g), Coconut yogurt (500g)',
        'Pams GF bread (2 loaves), GF oats (1kg), Quinoa (500g), Brown rice (1kg), GF pasta (500g)',
        'Salmon fillets (600g), Chicken breast (1kg), Tuna cans (4), Eggs (dozen), Mixed nuts (500g)',
        'Bananas (1kg), Apples (1kg), Avocados (4), Spinach (bag), Tomatoes (1kg), Carrots (1kg), Broccoli (head)',
        'Olive oil (500ml), Almond butter (375g), Hummus (200g), Coconut oil (250ml), Tahini (200g)',
        'Rice crackers (2 packs), GF crackers (pack), Almonds (200g), Trail mix ingredients',
        'Frozen berries (500g), Frozen vegetables (1kg), GF bread (backup loaf)',
        'Herbal teas (variety pack), Coconut water (6 pack)'
    ],
    'Estimated Cost (NZ$)': [32.50, 28.00, 45.00, 25.00, 22.00, 18.00, 15.00, 12.00],
    'Weekly Total': ['', '', '', '', '', '', '', '$197.50']
}

# Week 2 & 4 Shopping List (New World - Quality items)
newworld_w2_4 = {
    'Category': [
        'Premium Proteins', 'Specialty Items', 'Fresh Produce', 'Bakery', 
        'Organic Options', 'International', 'Convenience', 'Treats'
    ],
    'Items Needed': [
        'Lamb chops (500g), Beef steak (400g), Fresh fish fillets (400g), Free-range eggs (dozen)',
        'Chia seeds (200g), Hemp seeds (100g), Coconut cream (400ml), Nutritional yeast (100g)',
        'Seasonal fruits (variety), Herbs (fresh), Premium vegetables, Organic spinach',
        'GF sourdough (1 loaf), GF muffins (6 pack), Artisan GF crackers',
        'Organic coconut milk (1L), Organic nut butters (2 jars), Organic quinoa (500g)',
        'Rice noodles (2 packs), Coconut milk (3 cans), Asian sauces (GF/DF), Corn tortillas',
        'Pre-made hummus varieties (2), GF wraps (pack), Ready-made salads (2)',
        'Dairy-free ice cream (1L), GF cookies (pack), Dark chocolate (dairy-free)'
    ],
    'Estimated Cost (NZ$)': [38.00, 25.00, 32.00, 18.00, 24.00, 22.00, 20.00, 16.00],
    'Weekly Total': ['', '', '', '', '', '', '', '$195.00']
}

# Monthly bulk shopping (every 4 weeks)
monthly_bulk = {
    'Category': [
        'Bulk Grains & Legumes', 'Oils & Condiments', 'Baking Supplies', 'Cleaning/Health',
        'Frozen Bulk Items', 'Canned Goods', 'Spices & Seasonings', 'Non-Food Essentials'
    ],
    'Items Needed': [
        'Brown rice (5kg), Quinoa (2kg), GF oats (2kg), Lentils (1kg), Chickpeas (2kg dried)',
        'Extra virgin olive oil (1L), Coconut oil (500ml), Apple cider vinegar, Tamari sauce (GF)',
        'GF flour blend (2kg), Baking powder (GF), Vanilla extract, Coconut flour (500g)',
        'Vitamins (Calcium, B12, D3), Probiotics, Omega-3 supplements',
        'Frozen vegetables (3kg), Frozen berries (2kg), Frozen fish portions (1kg)',
        'Canned tomatoes (6), Coconut milk cans (12), Canned beans variety (8), Tuna (8 cans)',
        'Turmeric, Cumin, Paprika, Garlic powder, Nutritional yeast (large), Sea salt',
        'Aluminum foil, Baking paper, Food storage containers, Lunch boxes'
    ],
    'Estimated Cost (NZ$)': [35.00, 28.00, 22.00, 45.00, 40.00, 35.00, 25.00, 30.00],
    'Monthly Total': ['', '', '', '', '', '', '', '$260.00']
}

# Convert to DataFrames
paknsave_df = pd.DataFrame(paknsave_w1_3)
newworld_df = pd.DataFrame(newworld_w2_4)
bulk_df = pd.DataFrame(monthly_bulk)

print("WEEKLY SHOPPING LIST - WEEKS 1 & 3 (PAK'nSAVE)")
print("=" * 55)
print(paknsave_df.to_string(index=False))
print("\n")

print("WEEKLY SHOPPING LIST - WEEKS 2 & 4 (NEW WORLD)")
print("=" * 50)
print(newworld_df.to_string(index=False))  
print("\n")

print("MONTHLY BULK SHOPPING LIST (Every 4 weeks)")
print("=" * 45)
print(bulk_df.to_string(index=False))
print("\n")

# Calculate total monthly costs
weekly_avg = (197.50 + 195.00) / 2
monthly_shopping = (weekly_avg * 4) + 260.00
print("MONTHLY COST BREAKDOWN")
print("=" * 25)
print(f"Average weekly shop: ${weekly_avg:.2f}")
print(f"4 weeks of shopping: ${weekly_avg * 4:.2f}")
print(f"Monthly bulk shop: $260.00")
print(f"Total monthly cost: ${monthly_shopping:.2f}")
print(f"Daily cost per person: ${monthly_shopping/30:.2f}")