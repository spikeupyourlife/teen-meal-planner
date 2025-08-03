import plotly.graph_objects as go

# Data from the provided JSON
meal_times = ["Breakfast\n6:30-7:30", "Morn Tea\n9:30-10:00", "Lunch\n12:00-1:00", "Aft Snack\n3:00-3:30", "Dinner\n5:30-6:30", "Eve Snack\n8:00-8:30"]
vegetables = [0, 0, 2, 1, 2, 0]
fruit = [1, 1, 0, 0, 0, 0]
grains = [2, 0, 2, 0, 3, 0.5]
protein = [0, 0, 1, 0.5, 1.5, 0]
dairy = [1, 0, 1, 0, 1.5, 0.5]
fats = [1, 1, 1, 0.5, 0.5, 0]

# Define colors for each food group using the specified brand colors
colors = {
    'Vegetables': '#2E8B57',    # Sea green
    'Fruit': '#964325',         # Dark orange (closest to orange available)
    'Grains': '#B4413C',        # Moderate red (brownish)
    'Protein': '#DB4545',       # Bright red
    'Dairy Alt': '#1FB8CD',     # Strong cyan (bluish)  
    'Healthy Fats': '#D2BA4C'   # Moderate yellow
}

# Create the stacked bar chart
fig = go.Figure()

# Add each food group as a separate trace
fig.add_trace(go.Bar(
    name='Vegetables',
    x=meal_times,
    y=vegetables,
    marker_color=colors['Vegetables'],
    cliponaxis=False
))

fig.add_trace(go.Bar(
    name='Fruit',
    x=meal_times,
    y=fruit,
    marker_color=colors['Fruit'],
    cliponaxis=False
))

fig.add_trace(go.Bar(
    name='Grains',
    x=meal_times,
    y=grains,
    marker_color=colors['Grains'],
    cliponaxis=False
))

fig.add_trace(go.Bar(
    name='Protein',
    x=meal_times,
    y=protein,
    marker_color=colors['Protein'],
    cliponaxis=False
))

fig.add_trace(go.Bar(
    name='Dairy Alt',
    x=meal_times,
    y=dairy,
    marker_color=colors['Dairy Alt'],
    cliponaxis=False
))

fig.add_trace(go.Bar(
    name='Healthy Fats',
    x=meal_times,
    y=fats,
    marker_color=colors['Healthy Fats'],
    cliponaxis=False
))

# Update layout for stacked bars
fig.update_layout(
    barmode='stack',
    title='Daily Meal Timing & Serves - 15yr Teen',
    xaxis_title='Meal Times',
    yaxis_title='Serves',
    legend=dict(orientation='h', yanchor='bottom', y=1.05, xanchor='center', x=0.5)
)

# Save the chart
fig.write_image('meal_timing_chart.png')