from flask import Flask, render_template, request, jsonify
import pandas as pd

app = Flask(__name__)

# Load the CSV file with the extended crop data
df = pd.read_csv('/Users/serb9/Desktop/Farm Bandhu GitHub/flask-server/agri_recommendation/data/crops_data.csv')

# Function to determine climatic zone based on latitude and longitude
def get_climatic_zone(lat, lon):
    if 8 <= lat <= 23.5:
        return "Tropical"
    elif 23.5 < lat <= 29:
        return "Subtropical"
    elif 29 < lat <= 37:
        return "Temperate"
    else:
        return "Unknown"

# Function to get crops based on climatic zone
def get_crops_by_zone(zone):
    return df[df['Climatic Zone'] == zone]['Crop Name'].tolist()

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        lat = float(request.form['latitude'])
        lon = float(request.form['longitude'])
        crop_name = request.form.get('crop_name')
        
        zone = get_climatic_zone(lat, lon)
        crop_data = df[df['Crop Name'] == crop_name]

        if not crop_data.empty:
            growing_months = crop_data['Growing Months'].values[0]
            optimal_soil = crop_data['Optimal Soil'].values[0]
            irrigation_needs = crop_data['Irrigation Needs'].values[0]
            optimal_temperature = crop_data['Optimal Temperature'].values[0]  # Added temperature data
            fertilizer_requirements = crop_data['Fertilizer Requirements'].values[0]
            other_info = crop_data['Additional Information'].values[0]
        else:
            growing_months = optimal_soil = irrigation_needs = optimal_temperature = fertilizer_requirements = other_info = "N/A"

        return render_template(
            'index.html', 
            zone=zone, 
            crop_name=crop_name, 
            growing_months=growing_months, 
            optimal_soil=optimal_soil, 
            irrigation_needs=irrigation_needs, 
            optimal_temperature=optimal_temperature,  # Pass temperature data to template
            fertilizer_requirements=fertilizer_requirements, 
            other_info=other_info
        )

    return render_template('index.html')

@app.route('/get_crops', methods=['POST'])
def get_crops():
    lat = float(request.json['latitude'])
    lon = float(request.json['longitude'])
    zone = get_climatic_zone(lat, lon)
    crops = get_crops_by_zone(zone)
    return jsonify(crops=crops)

if __name__ == '__main__':
    app.run(debug=True)
