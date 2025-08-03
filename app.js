// Application Data
const mealData = {
  week1_meals: {
    Monday: {
      breakfast: {name: "GF Oats with Banana", ingredients: "GF oats (½ cup), plant milk (250ml), banana, almond butter (1 tbsp)", calories: 420, protein: 12, calcium: 180},
      morning_tea: {name: "Apple & Almonds", ingredients: "Apple + almonds (20g)", calories: 180, protein: 6, calcium: 50},
      lunch: {name: "Quinoa Tuna Salad", ingredients: "Quinoa (1 cup), tuna (100g), vegetables, olive oil", calories: 480, protein: 35, calcium: 80},
      afternoon_snack: {name: "Carrot Hummus", ingredients: "Carrot sticks + hummus (2 tbsp)", calories: 120, protein: 4, calcium: 40},
      dinner: {name: "Salmon & Vegetables", ingredients: "Grilled salmon (120g), roast vegetables, sweet potato, quinoa (½ cup)", calories: 580, protein: 38, calcium: 120},
      evening_snack: {name: "Herbal Tea & Cookies", ingredients: "Herbal tea + 2 GF cookies", calories: 140, protein: 2, calcium: 20}
    },
    Tuesday: {
      breakfast: {name: "Avocado Toast", ingredients: "GF toast (2 slices), avocado (½), tomato, lactose-free cheese (20g)", calories: 380, protein: 14, calcium: 200},
      morning_tea: {name: "Rice Crackers & Hummus", ingredients: "Rice crackers (5) + hummus (2 tbsp)", calories: 160, protein: 5, calcium: 45},
      lunch: {name: "Chicken Wrap", ingredients: "GF wrap, chicken (80g), dairy-free cheese, salad", calories: 450, protein: 32, calcium: 150},
      afternoon_snack: {name: "Rice Cakes & Avocado", ingredients: "Rice cakes (2) + avocado (¼)", calories: 140, protein: 3, calcium: 25},
      dinner: {name: "Chicken Stir-fry", ingredients: "Chicken stir-fry + brown rice (1 cup) + mixed vegetables", calories: 520, protein: 40, calcium: 100},
      evening_snack: {name: "Banana Bread", ingredients: "Plant milk (125ml) + banana bread slice", calories: 180, protein: 4, calcium: 60}
    },
    Wednesday: {
      breakfast: {name: "Smoothie Bowl", ingredients: "Berry smoothie + GF granola + coconut flakes", calories: 400, protein: 10, calcium: 150},
      morning_tea: {name: "Mixed Nuts", ingredients: "Mixed nuts (30g)", calories: 200, protein: 7, calcium: 60},
      lunch: {name: "Quinoa Bowl", ingredients: "Quinoa + roasted vegetables + tahini dressing", calories: 460, protein: 16, calcium: 120},
      afternoon_snack: {name: "Fruit & Yogurt", ingredients: "Dairy-free yogurt + berries", calories: 130, protein: 5, calcium: 80},
      dinner: {name: "Beef & Sweet Potato", ingredients: "Lean beef (100g) + roasted sweet potato + greens", calories: 550, protein: 35, calcium: 90},
      evening_snack: {name: "Chamomile Tea", ingredients: "Herbal tea + rice crackers (3)", calories: 90, protein: 2, calcium: 15}
    },
    Thursday: {
      breakfast: {name: "Chia Pudding", ingredients: "Chia seeds + coconut milk + fruit", calories: 380, protein: 12, calcium: 180},
      morning_tea: {name: "Banana & Peanut Butter", ingredients: "Banana + peanut butter (1 tbsp)", calories: 190, protein: 8, calcium: 40},
      lunch: {name: "Lentil Salad", ingredients: "Lentils + vegetables + olive oil dressing", calories: 420, protein: 18, calcium: 100},
      afternoon_snack: {name: "Seed Crackers", ingredients: "Seed crackers (4) + avocado", calories: 160, protein: 6, calcium: 50},
      dinner: {name: "Fish & Quinoa", ingredients: "White fish + quinoa + steamed vegetables", calories: 500, protein: 36, calcium: 110},
      evening_snack: {name: "Hot Chocolate", ingredients: "Coconut milk hot chocolate", calories: 120, protein: 3, calcium: 60}
    },
    Friday: {
      breakfast: {name: "GF Toast & Eggs", ingredients: "GF toast + scrambled eggs + spinach", calories: 350, protein: 20, calcium: 120},
      morning_tea: {name: "Trail Mix", ingredients: "Nuts, seeds, dried fruit (30g)", calories: 170, protein: 6, calcium: 45},
      lunch: {name: "Chicken Salad", ingredients: "Grilled chicken + mixed salad + quinoa", calories: 440, protein: 35, calcium: 90},
      afternoon_snack: {name: "Rice Cakes", ingredients: "Rice cakes + almond butter", calories: 150, protein: 5, calcium: 35},
      dinner: {name: "Pork & Vegetables", ingredients: "Pork tenderloin + roasted vegetables + rice", calories: 520, protein: 38, calcium: 80},
      evening_snack: {name: "Fruit Salad", ingredients: "Mixed fruit + coconut yogurt", calories: 140, protein: 3, calcium: 70}
    },
    Saturday: {
      breakfast: {name: "Pancakes", ingredients: "GF pancakes + berries + maple syrup", calories: 450, protein: 8, calcium: 100},
      morning_tea: {name: "Smoothie", ingredients: "Fruit smoothie with plant milk", calories: 200, protein: 5, calcium: 120},
      lunch: {name: "Buddha Bowl", ingredients: "Quinoa + roasted vegetables + tahini", calories: 480, protein: 16, calcium: 160},
      afternoon_snack: {name: "Energy Balls", ingredients: "Date & nut energy balls (3)", calories: 180, protein: 6, calcium: 40},
      dinner: {name: "Lamb & Vegetables", ingredients: "Lamb chops + roasted root vegetables", calories: 600, protein: 42, calcium: 100},
      evening_snack: {name: "Herbal Tea", ingredients: "Herbal tea + GF biscuits (2)", calories: 120, protein: 2, calcium: 30}
    },
    Sunday: {
      breakfast: {name: "Breakfast Bowl", ingredients: "GF muesli + plant milk + fruit", calories: 390, protein: 11, calcium: 160},
      morning_tea: {name: "Coconut Balls", ingredients: "Coconut & date balls (2)", calories: 160, protein: 4, calcium: 35},
      lunch: {name: "Wrap & Soup", ingredients: "GF wrap + vegetable soup", calories: 420, protein: 14, calcium: 110},
      afternoon_snack: {name: "Fruit & Nuts", ingredients: "Apple + walnuts (20g)", calories: 170, protein: 6, calcium: 45},
      dinner: {name: "Roast Dinner", ingredients: "Roast chicken + vegetables + sweet potato", calories: 560, protein: 40, calcium: 120},
      evening_snack: {name: "Golden Milk", ingredients: "Turmeric latte with coconut milk", calories: 100, protein: 2, calcium: 80}
    }
  },
  week2_meals: {
    Monday: {
      breakfast: {name: "Smoothie Bowl", ingredients: "Acai + banana + granola (GF) + coconut milk", calories: 450, protein: 8, calcium: 120},
      morning_tea: {name: "Kiwi & Pistachios", ingredients: "Kiwi fruit + pistachios (20g)", calories: 190, protein: 6, calcium: 55},
      lunch: {name: "Buddha Bowl", ingredients: "Quinoa + roast veg + tahini dressing + seeds", calories: 490, protein: 18, calcium: 180},
      afternoon_snack: {name: "Cucumber & Tzatziki", ingredients: "Cucumber + tzatziki (dairy-free)", calories: 80, protein: 3, calcium: 30},
      dinner: {name: "Lamb & Quinoa Tabbouleh", ingredients: "Lamb chops + quinoa tabbouleh + grilled vegetables", calories: 600, protein: 42, calcium: 140},
      evening_snack: {name: "Hot Chocolate", ingredients: "Coconut milk + cacao powder", calories: 120, protein: 3, calcium: 40}
    },
    Tuesday: {
      breakfast: {name: "Chia Breakfast", ingredients: "Chia pudding + mango + coconut flakes", calories: 400, protein: 10, calcium: 150},
      morning_tea: {name: "Seed Mix", ingredients: "Pumpkin seeds + sunflower seeds (25g)", calories: 180, protein: 8, calcium: 45},
      lunch: {name: "Grain Bowl", ingredients: "Brown rice + roasted vegetables + hemp seeds", calories: 460, protein: 15, calcium: 100},
      afternoon_snack: {name: "Rice Paper Rolls", ingredients: "Fresh rice paper rolls (2)", calories: 120, protein: 4, calcium: 35},
      dinner: {name: "Fish Curry", ingredients: "Fish curry + coconut rice + vegetables", calories: 580, protein: 36, calcium: 110},
      evening_snack: {name: "Coconut Water", ingredients: "Coconut water + dates (3)", calories: 110, protein: 1, calcium: 25}
    },
    Wednesday: {
      breakfast: {name: "Quinoa Porridge", ingredients: "Quinoa porridge + berries + almond butter", calories: 420, protein: 14, calcium: 140},
      morning_tea: {name: "Green Smoothie", ingredients: "Spinach + banana + coconut water", calories: 150, protein: 4, calcium: 80},
      lunch: {name: "Mediterranean Bowl", ingredients: "Quinoa + olives + vegetables + olive oil", calories: 470, protein: 16, calcium: 120},
      afternoon_snack: {name: "Nori Rolls", ingredients: "Nori sheets + avocado + cucumber", calories: 100, protein: 3, calcium: 40},
      dinner: {name: "Beef Stir-fry", ingredients: "Beef strips + Asian vegetables + rice noodles", calories: 540, protein: 38, calcium: 90},
      evening_snack: {name: "Mint Tea", ingredients: "Fresh mint tea + almond cookies (2)", calories: 130, protein: 3, calcium: 50}
    },
    Thursday: {
      breakfast: {name: "Buckwheat Pancakes", ingredients: "Buckwheat pancakes + berries + coconut cream", calories: 440, protein: 12, calcium: 100},
      morning_tea: {name: "Coconut Chips", ingredients: "Coconut chips + dried fruit", calories: 170, protein: 2, calcium: 30},
      lunch: {name: "Protein Salad", ingredients: "Mixed salad + chickpeas + tahini dressing", calories: 450, protein: 20, calcium: 160},
      afternoon_snack: {name: "Seed Crackers", ingredients: "Flax crackers + hummus", calories: 140, protein: 6, calcium: 45},
      dinner: {name: "Turkey & Vegetables", ingredients: "Turkey breast + roasted vegetables + quinoa", calories: 520, protein: 40, calcium: 100},
      evening_snack: {name: "Turmeric Latte", ingredients: "Golden milk with coconut milk", calories: 110, protein: 2, calcium: 70}
    },
    Friday: {
      breakfast: {name: "Millet Porridge", ingredients: "Millet + coconut milk + cinnamon + fruit", calories: 380, protein: 9, calcium: 130},
      morning_tea: {name: "Brazil Nuts", ingredients: "Brazil nuts (6) + dried apricots", calories: 200, protein: 6, calcium: 50},
      lunch: {name: "Asian Salad", ingredients: "Asian greens + protein + sesame dressing", calories: 440, protein: 25, calcium: 140},
      afternoon_snack: {name: "Kelp Noodles", ingredients: "Kelp noodle salad with vegetables", calories: 90, protein: 2, calcium: 60},
      dinner: {name: "Salmon Teriyaki", ingredients: "Salmon + teriyaki sauce + steamed rice + broccoli", calories: 560, protein: 38, calcium: 120},
      evening_snack: {name: "Coconut Pudding", ingredients: "Coconut chia pudding", calories: 140, protein: 4, calcium: 80}
    },
    Saturday: {
      breakfast: {name: "Weekend Brunch", ingredients: "GF waffles + fruit + coconut whipped cream", calories: 480, protein: 6, calcium: 90},
      morning_tea: {name: "Power Smoothie", ingredients: "Protein smoothie with plant milk", calories: 220, protein: 12, calcium: 150},
      lunch: {name: "Grain Salad", ingredients: "Mixed grains + vegetables + seeds", calories: 460, protein: 18, calcium: 120},
      afternoon_snack: {name: "Fruit Leather", ingredients: "Homemade fruit leather + nuts", calories: 160, protein: 5, calcium: 40},
      dinner: {name: "Roast Vegetables", ingredients: "Roasted vegetable medley + quinoa + tahini", calories: 500, protein: 16, calcium: 180},
      evening_snack: {name: "Relaxing Tea", ingredients: "Chamomile tea + coconut macaroons (2)", calories: 150, protein: 2, calcium: 30}
    },
    Sunday: {
      breakfast: {name: "Sunday Special", ingredients: "GF French toast + berries + maple syrup", calories: 460, protein: 10, calcium: 110},
      morning_tea: {name: "Tropical Mix", ingredients: "Coconut + pineapple + macadamias", calories: 190, protein: 4, calcium: 35},
      lunch: {name: "Power Bowl", ingredients: "Quinoa + roasted vegetables + avocado + seeds", calories: 480, protein: 17, calcium: 140},
      afternoon_snack: {name: "Seaweed Snacks", ingredients: "Seaweed sheets + rice crackers", calories: 100, protein: 3, calcium: 50},
      dinner: {name: "Sunday Roast", ingredients: "Roast beef + root vegetables + gravy (GF)", calories: 580, protein: 42, calcium: 100},
      evening_snack: {name: "Bedtime Tea", ingredients: "Passionflower tea + oat cookies (GF)", calories: 120, protein: 3, calcium: 60}
    }
  }
};

const shoppingData = {
  week1_paknsave: [
    {category: "Dairy Alternatives", items: "Anchor Zero Lacto milk (2L), Angel Food cheese (220g)", cost: 32.50},
    {category: "Proteins", items: "Salmon fillets (600g), Chicken breast (1kg), Tuna cans (4), Eggs (dozen)", cost: 45.00},
    {category: "Fresh Produce", items: "Bananas (1kg), Apples (1kg), Avocados (4), Spinach, Tomatoes, Carrots", cost: 25.00},
    {category: "Pantry Items", items: "GF oats, Quinoa (1kg), Brown rice, GF bread, Almond butter", cost: 38.00},
    {category: "Snacks & Extras", items: "Hummus, Rice crackers, GF cookies, Herbal teas", cost: 22.50}
  ],
  week1_newworld: [
    {category: "Premium Proteins", items: "Premium salmon (600g), Free-range chicken (1kg)", cost: 55.00},
    {category: "Organic Produce", items: "Organic bananas, Organic spinach, Organic avocados", cost: 35.00},
    {category: "Specialty Items", items: "Coconut milk, Tahini, Chia seeds, Hemp hearts", cost: 28.00}
  ],
  week2_paknsave: [
    {category: "Proteins", items: "Lamb chops (500g), Fish fillets (400g), Turkey breast (500g)", cost: 42.00},
    {category: "Specialty Grains", items: "Millet, Buckwheat flour, Rice noodles", cost: 20.00},
    {category: "Fresh Produce", items: "Kiwi fruit, Asian greens, Root vegetables, Herbs", cost: 28.00},
    {category: "Pantry Staples", items: "Coconut cream, Cacao powder, Seeds mix", cost: 25.00}
  ],
  week2_newworld: [
    {category: "Premium Proteins", items: "Grass-fed lamb (500g), Fresh fish varieties (400g)", cost: 48.00},
    {category: "Specialty Items", items: "Acai powder, Coconut flakes, Brazil nuts, Seaweed sheets", cost: 32.00},
    {category: "Organic Extras", items: "Organic coconut milk, Raw honey, Herbal teas", cost: 25.00}
  ]
};

const nutritionalTargets = {
  daily_calories: 2300,
  daily_protein: 50,
  daily_calcium: 1300,
  daily_iron: 15,
  daily_fiber: 25,
  daily_fluid: 1800
};

const mealTimes = [
  {time: "6:30-7:30 AM", meal: "Breakfast", key: "breakfast", importance: "Essential"},
  {time: "9:30-10:00 AM", meal: "Morning Tea", key: "morning_tea", importance: "Important"},
  {time: "12:00-1:00 PM", meal: "Lunch", key: "lunch", importance: "Essential"},
  {time: "3:00-3:30 PM", meal: "Afternoon Snack", key: "afternoon_snack", importance: "Important"},
  {time: "5:30-6:30 PM", meal: "Dinner", key: "dinner", importance: "Essential"},
  {time: "8:00-8:30 PM", meal: "Evening Snack", key: "evening_snack", importance: "Optional"}
];

// Application State
let currentState = {
  activeTab: 'daily',
  currentDay: 'Monday',
  currentWeek: 1,
  selectedStore: 'paknsave',
  shoppingMode: 'store' // NEW: 'store' or 'aggregated'
};

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  renderDailyView();
  renderWeeklyView();
  renderShoppingList();
  renderNutritionDashboard();
}

function setupEventListeners() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.replaceWith(btn.cloneNode(true));
  });
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const tabName = this.getAttribute('data-tab');
      switchTab(tabName);
    });
  });

  const prevBtn = document.getElementById('prev-day');
  const nextBtn = document.getElementById('next-day');
  if (prevBtn) {
    prevBtn.replaceWith(prevBtn.cloneNode(true));
    document.getElementById('prev-day').addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      navigateDay(-1);
    });
  }
  if (nextBtn) {
    nextBtn.replaceWith(nextBtn.cloneNode(true));
    document.getElementById('next-day').addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      navigateDay(1);
    });
  }

  document.querySelectorAll('[data-week]').forEach(btn => {
    btn.replaceWith(btn.cloneNode(true));
  });
  document.querySelectorAll('[data-week]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const week = parseInt(this.getAttribute('data-week'));
      switchWeek(week);
    });
  });

  document.querySelectorAll('[data-store]').forEach(btn => {
    btn.replaceWith(btn.cloneNode(true));
  });
  document.querySelectorAll('[data-store]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const store = this.getAttribute('data-store');
      switchStore(store);
    });
  });

  const shoppingToggle = document.getElementById('shopping-toggle');
  if (shoppingToggle) {
    shoppingToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleShoppingMode();
    });
  }

  const modal = document.getElementById('meal-modal');
  const closeBtn = document.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      hideModal();
    });
  }
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        hideModal();
      }
    });
  }
}

function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  document.querySelectorAll('.view-container').forEach(view => {
    view.classList.remove('active');
  });
  document.getElementById(`${tabName}-view`).classList.add('active');
  currentState.activeTab = tabName;
  if (tabName === 'nutrition') {
    renderNutritionDashboard();
  } else if (tabName === 'weekly') {
    renderWeeklyView();
  } else if (tabName === 'shopping') {
    renderShoppingList();
  } else if (tabName === 'daily') {
    renderDailyView();
  }
}

function navigateDay(direction) {
  const currentIndex = daysOfWeek.indexOf(currentState.currentDay);
  let newIndex;
  if (direction === 1) {
    newIndex = currentIndex < daysOfWeek.length - 1 ? currentIndex + 1 : 0;
  } else {
    newIndex = currentIndex > 0 ? currentIndex - 1 : daysOfWeek.length - 1;
  }
  currentState.currentDay = daysOfWeek[newIndex];
  renderDailyView();
  if (currentState.activeTab === 'nutrition') {
    renderNutritionDashboard();
  }
}

function switchWeek(week) {
  document.querySelectorAll('[data-week]').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-week="${week}"]`).classList.add('active');
  currentState.currentWeek = week;
  renderWeeklyView();
  renderShoppingList();
  if (currentState.activeTab === 'daily') {
    renderDailyView();
  }
  if (currentState.activeTab === 'nutrition') {
    renderNutritionDashboard();
  }
}

function switchStore(store) {
  document.querySelectorAll('[data-store]').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-store="${store}"]`).classList.add('active');
  currentState.selectedStore = store;
  renderShoppingList();
}

function toggleShoppingMode() {
  currentState.shoppingMode = currentState.shoppingMode === 'store' ? 'aggregated' : 'store';
  renderShoppingList();
}

function renderDailyView() {
  const currentDayElement = document.getElementById('current-day');
  if (currentDayElement) {
    currentDayElement.textContent = currentState.currentDay;
  }
  const weekData = currentState.currentWeek === 1 ? mealData.week1_meals : mealData.week2_meals;
  const dayMeals = weekData[currentState.currentDay];
  const mealsContainer = document.getElementById('meals-container');
  if (!mealsContainer || !dayMeals) return;
  mealsContainer.innerHTML = '';
  let totalCalories = 0;
  let totalProtein = 0;
  let totalCalcium = 0;
  mealTimes.forEach(mealTime => {
    const meal = dayMeals[mealTime.key];
    if (meal) {
      totalCalories += meal.calories;
      totalProtein += meal.protein;
      totalCalcium += meal.calcium;
      const mealCard = createMealCard(mealTime, meal);
      mealsContainer.appendChild(mealCard);
    }
  });
  updateNutritionBars(totalCalories, totalProtein, totalCalcium);
}

function createMealCard(mealTime, mealData) {
  const card = document.createElement('div');
  card.className = 'meal-card';
  const mealType = mealTime.meal.toLowerCase().includes('snack') ? 'snack' : mealTime.meal.toLowerCase().replace(' ', '_');
  card.innerHTML = `
    <div class="meal-header">
      <div class="meal-time">${mealTime.time}</div>
      <div class="meal-type ${mealType}">${mealTime.meal}</div>
    </div>
    <div class="meal-name">${mealData.name}</div>
    <div class="meal-ingredients">${mealData.ingredients}</div>
    <div class="meal-nutrition">
      <div class="nutrition-item">
        <div class="nutrition-value">${mealData.calories}</div>
        <div class="nutrition-label">Calories</div>
      </div>
      <div class="nutrition-item">
        <div class="nutrition-value">${mealData.protein}g</div>
        <div class="nutrition-label">Protein</div>
      </div>
      <div class="nutrition-item">
        <div class="nutrition-value">${mealData.calcium}mg</div>
        <div class="nutrition-label">Calcium</div>
      </div>
    </div>
  `;
  card.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    showMealModal(mealData);
  });
  return card;
}

function updateNutritionBars(calories, protein, calcium) {
  const caloriesPercent = Math.min((calories / nutritionalTargets.daily_calories) * 100, 100);
  const proteinPercent = Math.min((protein / nutritionalTargets.daily_protein) * 100, 100);
  const calciumPercent = Math.min((calcium / nutritionalTargets.daily_calcium) * 100, 100);
  const caloriesBar = document.querySelector('[data-nutrient="calories"]');
  const proteinBar = document.querySelector('[data-nutrient="protein"]');
  const calciumBar = document.querySelector('[data-nutrient="calcium"]');
  if (caloriesBar) caloriesBar.style.width = `${caloriesPercent}%`;
  if (proteinBar) proteinBar.style.width = `${proteinPercent}%`;
  if (calciumBar) calciumBar.style.width = `${calciumPercent}%`;
  const caloriesValue = document.getElementById('calories-value');
  const proteinValue = document.getElementById('protein-value');
  const calciumValue = document.getElementById('calcium-value');
  if (caloriesValue) caloriesValue.textContent = `${calories}/${nutritionalTargets.daily_calories}`;
  if (proteinValue) proteinValue.textContent = `${protein}/${nutritionalTargets.daily_protein}`;
  if (calciumValue) calciumValue.textContent = `${calcium}/${nutritionalTargets.daily_calcium}`;
}

function renderWeeklyView() {
  const weekData = currentState.currentWeek === 1 ? mealData.week1_meals : mealData.week2_meals;
  const calendar = document.getElementById('weekly-calendar');
  if (!calendar) return;
  calendar.innerHTML = '';
  daysOfWeek.forEach(day => {
    const dayColumn = document.createElement('div');
    dayColumn.className = 'day-column';
    const dayMeals = weekData[day];
    if (dayMeals) {
      let dayMealsHtml = '';
      mealTimes.forEach(mealTime => {
        const meal = dayMeals[mealTime.key];
        if (meal) {
          const mealType = mealTime.meal.toLowerCase().includes('snack') ? 'snack' : mealTime.meal.toLowerCase().replace(' ', '_');
          dayMealsHtml += `<div class="mini-meal ${mealType}" data-meal='${JSON.stringify(meal)}'>${meal.name}</div>`;
        }
      });
      dayColumn.innerHTML = `
        <div class="day-header">${day}</div>
        <div class="day-meals">
          ${dayMealsHtml}
        </div>
      `;
      dayColumn.querySelectorAll('.mini-meal').forEach(miniMeal => {
        miniMeal.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          const mealData = JSON.parse(this.getAttribute('data-meal'));
          showMealModal(mealData);
        });
      });
    }
    calendar.appendChild(dayColumn);
  });
}

function renderShoppingList() {
  const shoppingContent = document.getElementById('shopping-content');
  if (!shoppingContent) return;
  shoppingContent.innerHTML = '';

  // Toggle Button for Shopping Modes
  let toggleHtml = `<button id="shopping-toggle" style="margin-bottom:12px;">Switch to ${currentState.shoppingMode === 'store' ? 'Meal Ingredients' : 'Store Shopping List'}</button>`;
  shoppingContent.innerHTML += toggleHtml;

  if (currentState.shoppingMode === 'store') {
    // Store-based shopping list
    const storeKey = `week${currentState.currentWeek}_${currentState.selectedStore}`;
    const storeData = shoppingData[storeKey];
    let totalCost = 0;
    if (storeData) {
      storeData.forEach(category => {
        totalCost += category.cost;
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'shopping-category';
        categoryDiv.innerHTML = `
          <h3>${category.category}</h3>
          <div class="shopping-items">
            <div class="shopping-item">
              <input type="checkbox" class="item-checkbox">
              <div class="item-details">
                <div class="item-name">${category.category}</div>
                <div class="item-description">${category.items}</div>
              </div>
              <div class="item-cost">$${category.cost.toFixed(2)}</div>
            </div>
          </div>
        `;
        shoppingContent.appendChild(categoryDiv);
      });
    }
    const totalCostElement = document.createElement('div');
    totalCostElement.id = 'total-cost';
    totalCostElement.textContent = `Total Store Cost: $${totalCost.toFixed(2)}`;
    shoppingContent.appendChild(totalCostElement);
  } else {
    // Aggregated meal-ingredient shopping list
    const weekData = currentState.currentWeek === 1 ? mealData.week1_meals : mealData.week2_meals;
    const aggregatedList = generateAggregatedShoppingList(weekData);
    shoppingContent.innerHTML += `<h3>Full Ingredient Shopping List (All Meals)</h3>`;
    Object.keys(aggregatedList).forEach(ingredient => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'ingredient-shopping-item';
      itemDiv.innerHTML = `<input type="checkbox"> <span>${ingredient}</span> <span style="color:#888;">x${aggregatedList[ingredient]}</span>`;
      shoppingContent.appendChild(itemDiv);
    });
  }
}

function generateAggregatedShoppingList(weekMeals) {
  // Aggregates and counts all unique ingredient strings
  const shoppingItems = {};
  Object.values(weekMeals).forEach(day => {
    Object.values(day).forEach(meal => {
      meal.ingredients.split(',').forEach(item => {
        let cleanItem = item.trim();
        if (!cleanItem) return;
        shoppingItems[cleanItem] = (shoppingItems[cleanItem] || 0) + 1;
      });
    });
  });
  return shoppingItems;
}

function renderNutritionDashboard() {
  const weekData = currentState.currentWeek === 1 ? mealData.week1_meals : mealData.week2_meals;
  const dayMeals = weekData[currentState.currentDay];
  let totalCalories = 0;
  let totalProtein = 0;
  let totalCalcium = 0;
  if (dayMeals) {
    mealTimes.forEach(mealTime => {
      const meal = dayMeals[mealTime.key];
      if (meal) {
        totalCalories += meal.calories;
        totalProtein += meal.protein;
        totalCalcium += meal.calcium;
      }
    });
  }
  updateGoalBars('calories', totalCalories, nutritionalTargets.daily_calories, 'kcal');
  updateGoalBars('protein', totalProtein, nutritionalTargets.daily_protein, 'g');
  updateGoalBars('calcium', totalCalcium, nutritionalTargets.daily_calcium, 'mg');
  updateGoalBars('iron', 12, nutritionalTargets.daily_iron, 'mg');
  updateGoalBars('fiber', 20, nutritionalTargets.daily_fiber, 'g');
  updateGoalBars('fluid', 1600, nutritionalTargets.daily_fluid, 'ml');
}

function updateGoalBars(nutrient, current, target, unit) {
  const percentage = Math.min((current / target) * 100, 100);
  const goalCards = document.querySelectorAll('.goal-card');
  goalCards.forEach(card => {
    const title = card.querySelector('h4');
    if (title && title.textContent.toLowerCase().includes(nutrient)) {
      const fillBar = card.querySelector('.goal-fill');
      const text = card.querySelector('span');
      if (fillBar) fillBar.style.width = `${percentage}%`;
      if (text) text.textContent = `${current} / ${target}${unit}`;
    }
  });
}

function showMealModal(mealData) {
  const modal = document.getElementById('meal-modal');
  const modalName = document.getElementById('modal-meal-name');
  const modalDetails = document.getElementById('modal-meal-details');
  if (!modal || !modalName || !modalDetails) return;
  modalName.textContent = mealData.name;
  modalDetails.innerHTML = `
    <div style="margin-bottom: 16px;">
      <h4 style="margin-bottom: 8px; color: var(--color-primary);">🥘 Ingredients</h4>
      <p style="margin: 0; line-height: 1.5;">${mealData.ingredients}</p>
    </div>
    <div style="margin-bottom: 16px;">
      <h4 style="margin-bottom: 8px; color: var(--color-primary);">📊 Nutritional Information</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px;">
        <div style="text-align: center; padding: 8px; background: var(--color-bg-1); border-radius: var(--radius-base);">
          <div style="font-weight: 600; color: var(--color-primary);">${mealData.calories}</div>
          <div style="font-size: 12px; color: var(--color-text-secondary);">Calories</div>
        </div>
        <div style="text-align: center; padding: 8px; background: var(--color-bg-2); border-radius: var(--radius-base);">
          <div style="font-weight: 600; color: var(--color-primary);">${mealData.protein}g</div>
          <div style="font-size: 12px; color: var(--color-text-secondary);">Protein</div>
        </div>
        <div style="text-align: center; padding: 8px; background: var(--color-bg-3); border-radius: var(--radius-base);">
          <div style="font-weight: 600; color: var(--color-primary);">${mealData.calcium}mg</div>
          <div style="font-size: 12px; color: var(--color-text-secondary);">Calcium</div>
        </div>
      </div>
    </div>
    <div>
      <h4 style="margin-bottom: 8px; color: var(--color-primary);">✅ Dietary Notes</h4>
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <span style="background: var(--color-bg-3); padding: 4px 8px; border-radius: var(--radius-sm); font-size: 12px;">🥛 Lactose-Free</span>
        <span style="background: var(--color-bg-2); padding: 4px 8px; border-radius: var(--radius-sm); font-size: 12px;">🌾 Gluten-Limited</span>
        <span style="background: var(--color-bg-5); padding: 4px 8px; border-radius: var(--radius-sm); font-size: 12px;">🌱 Teen-Friendly</span>
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
}

function hideModal() {
  const modal = document.getElementById('meal-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

window.showMealModal = showMealModal;