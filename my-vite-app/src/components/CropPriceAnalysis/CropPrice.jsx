import React from 'react';
import './CropPrice.css';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import errorImg from '../../assets/images/icons/exclamation.svg';
import AnalyticalTool from '../analyticalTool/analyticalTool';
import goBackTo from '../../assets/images/icons/less-than.svg'
import { useTranslation } from "react-i18next";

const CropPrice = () => {
    const [currentStep, setCurrentStep] = React.useState(1);
    const [dataSubmitted, setDataSubmitted] = React.useState(false);
    const [showError, setShowError] = React.useState(false);
    const [formData, setFormData] = React.useState({
        crop: '',
        state: '',
        district: '',
        area: '',
    });
    const { t } = useTranslation('cropPrice');

    const nextStep = (event) => {
        event.preventDefault();
        if (formData.crop) {
            setShowError(false);
            setCurrentStep((prev) => prev + 1);
        } else {
            setShowError(true);
        }
    };

    const prevStep = () => {
        setShowError(false);
        setDataSubmitted(false);
        setFormData({ ...formData, crop: '', state: '', district: '' });
        setCurrentStep((prev) => prev - 1);
    };

    const handleChange = (input) => (value) => {
        if (input === 'state') {
            setFormData({
                ...formData,
                state: value,
                district: '',  // Reset district when state changes
            });
        } else {
            setFormData({
                ...formData,
                [input]: input === 'area' ? (/^\d*\.?\d*$/.test(value) ? value : formData.area) : value,
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.area && formData.district) {
            setShowError(false);
            setDataSubmitted(true);
        } else {
            setShowError(true);
        }
    };

    const crop_options = [
        { label: "Paddy", value: "crop1" },
        { label: "Jowar", value: "crop2" },
        { label: "Wheat", value: "crop3" },
        { label: "Barley", value: "crop4" },
        { label: "Gram", value: "crop5" },
        { label: "Lentil", value: "crop6" },
        { label: "Mustard", value: "crop7" },
        { label: "Bajra", value: "crop8" },
        { label: "Maize", value: "crop9" },
        { label: "Arhar", value: "crop10" },
        { label: "Urad", value: "crop11" },
        { label: "Moong", value: "crop12" },
        { label: "Sugar cane", value: "crop13" },
        { label: "Cotton", value: "crop14" },
    ];

    const state_options = [
        { label: "Andhra Pradesh", value: "andhra_pradesh" },
        { label: "Bihar", value: "bihar" },
        { label: "Chhattisgarh", value: "chhattisgarh" },
        { label: "Goa", value: "goa" },
        { label: "Gujarat", value: "gujarat" },
        { label: "Haryana", value: "haryana" },
        { label: "Himachal Pradesh", value: "himachal_pradesh" },
        { label: "Jammu & Kashmir", value: "jammu_kashmir" },
        { label: "Jharkhand", value: "jharkhand" },
        { label: "Karnataka", value: "karnataka" },
        { label: "Kerala", value: "kerala" },
        { label: "Madhya Pradesh", value: "madhya_pradesh" },
        { label: "Maharashtra", value: "maharashtra" },
        { label: "Odisha", value: "odisha" },
        { label: "Punjab", value: "punjab" },
        { label: "Rajasthan", value: "rajasthan" },
        { label: "Tamil Nadu", value: "tamil_nadu" },
        { label: "Uttar Pradesh", value: "uttar_pradesh" },
        { label: "Uttarakhand", value: "uttarakhand" },
        { label: "West Bengal", value: "west_bengal" },
        { label: "Arunachal Pradesh", value: "arunachal_pradesh" },
        { label: "Assam", value: "assam" },
        { label: "Meghalaya", value: "meghalaya" },
        { label: "Mizoram", value: "mizoram" },
        { label: "Nagaland", value: "nagaland" },
        { label: "Sikkim", value: "sikkim" },
        { label: "Tripura", value: "tripura" },
        { label: "Andaman & Nicobar Islands", value: "andaman_nicobar" },
        { label: "Chandigarh", value: "chandigarh" },
        { label: "Dadar & Nagar Haveli", value: "dadar_nagar_haveli" },
        { label: "Daman & Diu", value: "daman_diu" },
        { label: "Delhi", value: "delhi" },
        { label: "Lakshadweep", value: "lakshadweep" },
        { label: "Puducherry", value: "puducherry" }
    ];

    const district_options = {
        andhra_pradesh: [
            { label: "Chittoor", value: "chittoor" },
            { label: "East Godavari", value: "east_godavari" },
            { label: "Guntur", value: "guntur" },
            { label: "Kurnool", value: "kurnool" },
            { label: "Krishna", value: "krishna" },
            { label: "Nellore", value: "nellore" },
            { label: "Srikakulam", value: "srikakulam" },
            { label: "Visakhapatnam", value: "visakhapatnam" },
            { label: "Vizianagaram", value: "vizianagaram" },
            { label: "West Godavari", value: "west_godavari" }
        ],
        delhi: [
            { label: "Central Delhi", value: "central_delhi" },
            { label: "East Delhi", value: "east_delhi" },
            { label: "New Delhi", value: "new_delhi" },
            { label: "North Delhi", value: "north_delhi" },
            { label: "North East Delhi", value: "north_east_delhi" },
            { label: "North West Delhi", value: "north_west_delhi" },
            { label: "Shahdara", value: "shahdara" },
            { label: "South Delhi", value: "south_delhi" },
            { label: "South East Delhi", value: "south_east_delhi" },
            { label: "South West Delhi", value: "south_west_delhi" },
            { label: "West Delhi", value: "west_delhi" }
        ],        
        bihar: [
            { label: "Aurangabad", value: "aurangabad" },
            { label: "Araria", value: "araria" },
            { label: "Arwal", value: "arwal" },
            { label: "Banka", value: "banka" },
            { label: "Begusarai", value: "begusarai" },
            { label: "Bhagalpur", value: "bhagalpur" },
            { label: "Buxar", value: "buxar" },
            { label: "Darbhanga", value: "darbhanga" },
            { label: "Gaya", value: "gaya" },
            { label: "Jamui", value: "jamui" },
            { label: "Jehanabad", value: "jehanabad" },
            { label: "Kaimur", value: "kaimur" },
            { label: "Katihar", value: "katihar" },
            { label: "Khagaria", value: "khagaria" },
            { label: "Kishanganj", value: "kishanganj" },
            { label: "Lakhisarai", value: "lakhisarai" },
            { label: "Madhepura", value: "madhepura" },
            { label: "Madhubani", value: "madhubani" },
            { label: "Munger", value: "munger" },
            { label: "Muzaffarpur", value: "muzaffarpur" },
            { label: "Nalanda", value: "nalanda" },
            { label: "Nawada", value: "nawada" },
            { label: "Patna", value: "patna" },
            { label: "Purnia", value: "purnia" },
            { label: "Rohtas", value: "rohtas" },
            { label: "Saharsa", value: "saharsa" },
            { label: "Samastipur", value: "samastipur" },
            { label: "Saran", value: "saran" },
            { label: "Sheikhpura", value: "sheikhpura" },
            { label: "Sheohar", value: "sheohar" },
            { label: "Sitamarhi", value: "sitamarhi" },
            { label: "Siwan", value: "siwan" },
            { label: "Supaul", value: "supaul" },
            { label: "Vaishali", value: "vaishali" },
            { label: "West Champaran", value: "west_champaran" }
        ],
        chhattisgarh: [
            { label: "Bilaspur", value: "bilaspur" },
            { label: "Dantewada", value: "dantewada" },
            { label: "Dhamtari", value: "dhamtari" },
            { label: "Durg", value: "durg" },
            { label: "Jagdalpur", value: "jagdalpur" },
            { label: "Janjgir-Champa", value: "janjgir_champa" },
            { label: "Kanker", value: "kanker" },
            { label: "Kabirdham", value: "kabirdham" },
            { label: "Korba", value: "korba" },
            { label: "Koriya", value: "koriya" },
            { label: "Raigarh", value: "raigarh" },
            { label: "Raipur", value: "raipur" },
            { label: "Rajnandgaon", value: "rajnandgaon" },
            { label: "Surajpur", value: "surajpur" },
            { label: "Surguja", value: "surguja" }
        ],
        goa: [
            { label: "North Goa", value: "north_goa" },
            { label: "South Goa", value: "south_goa" }
        ],
        gujarat: [
            { label: "Ahmedabad", value: "ahmedabad" },
            { label: "Amreli", value: "amreli" },
            { label: "Banaskantha", value: "banaskantha" },
            { label: "Bharuch", value: "bharuch" },
            { label: "Bhavnagar", value: "bhavnagar" },
            { label: "Dahod", value: "dahod" },
            { label: "Gandhinagar", value: "gandhinagar" },
            { label: "Jamnagar", value: "jamnagar" },
            { label: "Junagadh", value: "junagadh" },
            { label: "Kutch", value: "kutch" },
            { label: "Mahisagar", value: "mahisagar" },
            { label: "Mehsana", value: "mehsana" },
            { label: "Narmada", value: "narmada" },
            { label: "Navsari", value: "navsari" },
            { label: "Panchmahal", value: "panchmahal" },
            { label: "Patan", value: "patan" },
            { label: "Porbandar", value: "porbandar" },
            { label: "Rajkot", value: "rajkot" },
            { label: "Sabar Kantha", value: "sabar_kantha" },
            { label: "Surat", value: "surat" },
            { label: "Tapi", value: "tapi" },
            { label: "Vadodara", value: "vadodara" },
            { label: "Valsad", value: "valsad" }
        ],
        haryana: [
            { label: "Ambala", value: "ambala" },
            { label: "Bhiwani", value: "bhiwani" },
            { label: "Charkhi Dadri", value: "charkhi_dadri" },
            { label: "Faridabad", value: "faridabad" },
            { label: "Fatehabad", value: "fatehabad" },
            { label: "Gurugram", value: "gurugram" },
            { label: "Hisar", value: "hisar" },
            { label: "Jhajjar", value: "jhajjar" },
            { label: "Jind", value: "jind" },
            { label: "Kaithal", value: "kaithal" },
            { label: "Karnal", value: "karnal" },
            { label: "Kurukshetra", value: "kurukshetra" },
            { label: "Mahendragarh", value: "mahendragarh" },
            { label: "Panchkula", value: "panchkula" },
            { label: "Panipat", value: "panipat" },
            { label: "Rewari", value: "rewari" },
            { label: "Rohtak", value: "rohtak" },
            { label: "Sirsa", value: "sirsa" },
            { label: "Sonipat", value: "sonipat" },
            { label: "Yamunanagar", value: "yamunanagar" }
        ],
        himachal_pradesh: [
            { label: "Bilaspur", value: "bilaspur" },
            { label: "Chamba", value: "chamba" },
            { label: "Hamirpur", value: "hamirpur" },
            { label: "Kangra", value: "kangra" },
            { label: "Kinnaur", value: "kinnaur" },
            { label: "Kullu", value: "kullu" },
            { label: "Lahaul and Spiti", value: "lahaul_spiti" },
            { label: "Mandi", value: "mandi" },
            { label: "Shimla", value: "shimla" },
            { label: "Sirmaur", value: "sirmaur" },
            { label: "Solan", value: "solan" },
            { label: "Una", value: "una" }
        ],
        jammu_kashmir: [
            { label: "Jammu", value: "jammu" },
            { label: "Kathua", value: "kathua" },
            { label: "Poonch", value: "poonch" },
            { label: "Rajouri", value: "rajouri" },
            { label: "Ramban", value: "ramban" },
            { label: "Reasi", value: "reasi" },
            { label: "Samba", value: "samba" },
            { label: "Udhampur", value: "udhampur" },
            { label: "Anantnag", value: "anantnag" },
            { label: "Bandipora", value: "bandipora" },
            { label: "Baramulla", value: "baramulla" },
            { label: "Budgam", value: "budgam" },
            { label: "Doda", value: "doda" },
            { label: "Ganderbal", value: "ganderbal" },
            { label: "Kulgam", value: "kulgam" },
            { label: "Pulwama", value: "pulwama" },
            { label: "Shopian", value: "shopian" }
        ],
        jharkhand: [
            { label: "Bokaro", value: "bokaro" },
            { label: "Chatra", value: "chatra" },
            { label: "Deoghar", value: "deoghar" },
            { label: "Dhanbad", value: "dhanbad" },
            { label: "Dumka", value: "dumka" },
            { label: "East Singhbhum", value: "east_singhbhum" },
            { label: "Garhwa", value: "garhwa" },
            { label: "Giridih", value: "giridih" },
            { label: "Godda", value: "godda" },
            { label: "Gumla", value: "gumla" },
            { label: "Hazaribagh", value: "hazaribagh" },
            { label: "Jamtara", value: "jamtara" },
            { label: "Khunti", value: "khunti" },
            { label: "Koderma", value: "koderma" },
            { label: "Latehar", value: "latehar" },
            { label: "Lohardaga", value: "lohardaga" },
            { label: "Pakur", value: "pakur" },
            { label: "Palamu", value: "palamu" },
            { label: "Ranchi", value: "ranchi" },
            { label: "Sahibganj", value: "sahibganj" },
            { label: "Seraikela-Kharsawan", value: "seraikela_kharsawan" },
            { label: "West Singhbhum", value: "west_singhbhum" }
        ],
        karnataka: [
            { label: "Bagalkot", value: "bagalkot" },
            { label: "Ballari", value: "ballari" },
            { label: "Belagavi", value: "belagavi" },
            { label: "Bengaluru Rural", value: "bengaluru_rural" },
            { label: "Bengaluru Urban", value: "bengaluru_urban" },
            { label: "Bidar", value: "bidar" },
            { label: "Chamrajnagar", value: "chamrajnagar" },
            { label: "Chikkaballapur", value: "chikkaballapur" },
            { label: "Chikkamagaluru", value: "chikkamagaluru" },
            { label: "Chitradurga", value: "chitradurga" },
            { label: "Dakshina Kannada", value: "dakshina_kannada" },
            { label: "Davangere", value: "davangere" },
            { label: "Dharwad", value: "dharwad" },
            { label: "Gadag", value: "gadag" },
            { label: "Hassan", value: "hassan" },
            { label: "Haveri", value: "haveri" },
            { label: "Kodagu", value: "kodagu" },
            { label: "Kolar", value: "kolar" },
            { label: "Koppal", value: "koppal" },
            { label: "Mandya", value: "mandya" },
            { label: "Mysuru", value: "mysuru" },
            { label: "Raichur", value: "raichur" },
            { label: "Ramanagara", value: "ramanagara" },
            { label: "Shimoga", value: "shimoga" },
            { label: "Tumakuru", value: "tumakuru" },
            { label: "Udupi", value: "udupi" },
            { label: "Uttar Kannada", value: "uttar_kannada" },
            { label: "Vijayapura", value: "vijayapura" },
            { label: "Yadgir", value: "yadgir" }
        ],
        kerala: [
            { label: "Alappuzha", value: "alappuzha" },
            { label: "Ernakulam", value: "ernakulam" },
            { label: "Idukki", value: "idukki" },
            { label: "Kannur", value: "kannur" },
            { label: "Kasaragod", value: "kasaragod" },
            { label: "Kollam", value: "kollam" },
            { label: "Kottayam", value: "kottayam" },
            { label: "Kozhikode", value: "kozhikode" },
            { label: "Malappuram", value: "malappuram" },
            { label: "Palakkad", value: "palakkad" },
            { label: "Pathanamthitta", value: "pathanamthitta" },
            { label: "Thiruvananthapuram", value: "thiruvananthapuram" },
            { label: "Thrissur", value: "thrissur" }
        ],
        madhya_pradesh: [
            { label: "Ashok Nagar", value: "ashok_nagar" },
            { label: "Balaghat", value: "balaghat" },
            { label: "Barwani", value: "barwani" },
            { label: "Bhind", value: "bhind" },
            { label: "Bhopal", value: "bhopal" },
            { label: "Burhanpur", value: "burhanpur" },
            { label: "Chhatarpur", value: "chhatarpur" },
            { label: "Chhindwara", value: "chhindwara" },
            { label: "Dewas", value: "dewas" },
            { label: "Dhar", value: "dhar" },
            { label: "Dindori", value: "dindori" },
            { label: "Guna", value: "guna" },
            { label: "Gwalior", value: "gwalior" },
            { label: "Harda", value: "harda" },
            { label: "Hoshangabad", value: "hoshangabad" },
            { label: "Indore", value: "indore" },
            { label: "Jabalpur", value: "jabalpur" },
            { label: "Jhabua", value: "jhabua" },
            { label: "Khandwa", value: "khandwa" },
            { label: "Khargone", value: "khargone" },
            { label: "Mandla", value: "mandla" },
            { label: "Mandsaur", value: "mandsaur" },
            { label: "Morena", value: "morena" },
            { label: "Narsinghpur", value: "narsinghpur" },
            { label: "Neemuch", value: "neemuch" },
            { label: "Pachmarhi", value: "pachmarhi" },
            { label: "Panna", value: "panna" },
            { label: "Rewa", value: "rewa" },
            { label: "Sagar", value: "sagar" },
            { label: "Satna", value: "satna" },
            { label: "Sehore", value: "sehore" },
            { label: "Seoni", value: "seoni" },
            { label: "Shahdol", value: "shahdol" },
            { label: "Shajapur", value: "shajapur" },
            { label: "Sheopur", value: "sheopur" },
            { label: "Shivpuri", value: "shivpuri" },
            { label: "Sidhi", value: "sidhi" },
            { label: "Sagar", value: "sagar" },
            { label: "Ujjain", value: "ujjain" },
            { label: "Vidisha", value: "vidisha" }
        ],
        maharashtra: [
            { label: "Ahmednagar", value: "ahmednagar" },
            { label: "Akola", value: "akola" },
            { label: "Amravati", value: "amravati" },
            { label: "Aurangabad", value: "aurangabad" },
            { label: "Beed", value: "beed" },
            { label: "Bhandara", value: "bhandara" },
            { label: "Buldhana", value: "buldhana" },
            { label: "Chandrapur", value: "chandrapur" },
            { label: "Dhule", value: "dhule" },
            { label: "Gadchiroli", value: "gadchiroli" },
            { label: "Gondia", value: "gondia" },
            { label: "Hingoli", value: "hingoli" },
            { label: "Jalgaon", value: "jalgaon" },
            { label: "Jalna", value: "jalna" },
            { label: "Kolhapur", value: "kolhapur" },
            { label: "Latur", value: "latur" },
            { label: "Mumbai City", value: "mumbai_city" },
            { label: "Mumbai Suburban", value: "mumbai_suburban" },
            { label: "Nagpur", value: "nagpur" },
            { label: "Nanded", value: "nanded" },
            { label: "Nandurbar", value: "nandurbar" },
            { label: "Nasik", value: "nasik" },
            { label: "Osmanabad", value: "osmanabad" },
            { label: "Palghar", value: "palghar" },
            { label: "Parbhani", value: "parbhani" },
            { label: "Pune", value: "pune" },
            { label: "Raigad", value: "raigad" },
            { label: "Ratnagiri", value: "ratnagiri" },
            { label: "Sindhudurg", value: "sindhudurg" },
            { label: "Solapur", value: "solapur" },
            { label: "Thane", value: "thane" },
            { label: "Wardha", value: "wardha" },
            { label: "Washim", value: "washim" },
            { label: "Yavatmal", value: "yavatmal" }
        ],
        odisha: [
            { label: "Angul", value: "angul" },
            { label: "Balangir", value: "balangir" },
            { label: "Balasore", value: "balasore" },
            { label: "Bargarh", value: "bargarh" },
            { label: "Bhadrak", value: "bhadrak" },
            { label: "Boudh", value: "boudh" },
            { label: "Cuttack", value: "cuttack" },
            { label: "Deogarh", value: "deogarh" },
            { label: "Dhenkanal", value: "dhenkanal" },
            { label: "Gajapati", value: "gajapati" },
            { label: "Ganjam", value: "ganjam" },
            { label: "Jagatsinghpur", value: "jagatsinghpur" },
            { label: "Jajpur", value: "jajpur" },
            { label: "Jharsuguda", value: "jharsuguda" },
            { label: "Kalahandi", value: "kalahandi" },
            { label: "Kandhamal", value: "kandhamal" },
            { label: "Kendrapara", value: "kendrapara" },
            { label: "Kendujhar", value: "kendujhar" },
            { label: "Khurda", value: "khurda" },
            { label: "Koraput", value: "koraput" },
            { label: "Malkangiri", value: "malkangiri" },
            { label: "Nabarangpur", value: "nabarangpur" },
            { label: "Nayagarh", value: "nayagarh" },
            { label: "Nuapada", value: "nuapada" },
            { label: "Rayagada", value: "rayagada" },
            { label: "Sambalpur", value: "sambalpur" },
            { label: "Sonepur", value: "sonepur" },
            { label: "Subarnapur", value: "subarnapur" },
            { label: "Mayurbhanj", value: "mayurbhanj" },
            { label: "Khurda", value: "khurda" }
        ],
        puducherry: [
            { label: "Karaikal", value: "karaikal" },
            { label: "Mahe", value: "mahe" },
            { label: "Puducherry", value: "puducherry" },
            { label: "Yanam", value: "yanam" }
        ],
        punjab: [
            { label: "Amritsar", value: "amritsar" },
            { label: "Barnala", value: "barnala" },
            { label: "Bathinda", value: "bathinda" },
            { label: "Faridkot", value: "faridkot" },
            { label: "Fatehgarh Sahib", value: "fatehgarh_sahib" },
            { label: "Firozpur", value: "firozpur" },
            { label: "Hoshiarpur", value: "hoshiarpur" },
            { label: "Jalandhar", value: "jalandhar" },
            { label: "Kapurthala", value: "kapurthala" },
            { label: "Ludhiana", value: "ludhiana" },
            { label: "Mansa", value: "mansa" },
            { label: "Moga", value: "moga" },
            { label: "Muktsar", value: "muktsar" },
            { label: "Nawanshahr", value: "nawanshahr" },
            { label: "Patiala", value: "patiala" },
            { label: "Rupnagar", value: "rupnagar" },
            { label: "Sangrur", value: "sangrur" },
            { label: "Tarn Taran", value: "tarn_taran" }
        ],
        rajasthan: [
            { label: "Ajmer", value: "ajmer" },
            { label: "Alwar", value: "alwar" },
            { label: "Banswara", value: "banswara" },
            { label: "Baran", value: "baran" },
            { label: "Barmer", value: "barmer" },
            { label: "Bhilwara", value: "bhilwara" },
            { label: "Bikaner", value: "bikaner" },
            { label: "Bundi", value: "bundi" },
            { label: "Chittorgarh", value: "chittorgarh" },
            { label: "Churu", value: "churu" },
            { label: "Dausa", value: "dausa" },
            { label: "Dungarpur", value: "dungarpur" },
            { label: "Hanumangarh", value: "hanumangarh" },
            { label: "Jaipur", value: "jaipur" },
            { label: "Jaisalmer", value: "jaisalmer" },
            { label: "Jalore", value: "jalore" },
            { label: "Jhalawar", value: "jhalawar" },
            { label: "Jhunjhunu", value: "jhunjhunu" },
            { label: "Jodhpur", value: "jodhpur" },
            { label: "Karauli", value: "karauli" },
            { label: "Kota", value: "kota" },
            { label: "Nagaur", value: "nagaur" },
            { label: "Pali", value: "pali" },
            { label: "Rajsamand", value: "rajsamand" },
            { label: "Sawai Madhopur", value: "sawai_madhopur" },
            { label: "Sikar", value: "sikar" },
            { label: "Sirohi", value: "sirohi" },
            { label: "Tonk", value: "tonk" },
            { label: "Udaipur", value: "udaipur" }
        ],
        tamil_nadu: [
            { label: "Chennai", value: "chennai" },
            { label: "Coimbatore", value: "coimbatore" },
            { label: "Cuddalore", value: "cuddalore" },
            { label: "Dharmapuri", value: "dharmapuri" },
            { label: "Dindigul", value: "dindigul" },
            { label: "Erode", value: "erode" },
            { label: "Kanchipuram", value: "kanchipuram" },
            { label: "Karur", value: "karur" },
            { label: "Madurai", value: "madurai" },
            { label: "Nagapattinam", value: "nagapattinam" },
            { label: "Namakkal", value: "namakkal" },
            { label: "Perambalur", value: "perambalur" },
            { label: "Ramanathapuram", value: "ramanathapuram" },
            { label: "Salem", value: "salem" },
            { label: "Thanjavur", value: "thanjavur" },
            { label: "The Nilgiris", value: "the_nilgiris" },
            { label: "Tiruchirappalli", value: "tiruchirappalli" },
            { label: "Tirunelveli", value: "tirunelveli" },
            { label: "Tiruppur", value: "tiruppur" },
            { label: "Vellore", value: "vellore" },
            { label: "Villupuram", value: "villupuram" },
            { label: "Virudhunagar", value: "virudhunagar" }
        ],
        telangana: [
            { label: "Adilabad", value: "adilabad" },
            { label: "Bhadradri Kothagudem", value: "bhadradri_kothagudem" },
            { label: "Hyderabad", value: "hyderabad" },
            { label: "Jagtial", value: "jagtial" },
            { label: "Jangaon", value: "jangaon" },
            { label: "Jayashankar Bhupalpally", value: "jayashankar_bhupalpally" },
            { label: "Jogulamba Gadwal", value: "jogulamba_gadwal" },
            { label: "Kamareddy", value: "kamareddy" },
            { label: "Karimnagar", value: "karimnagar" },
            { label: "Khammam", value: "khammam" },
            { label: "Mahabubnagar", value: "mahabubnagar" },
            { label: "Mancherial", value: "mancherial" },
            { label: "Medak", value: "medak" },
            { label: "Nagarkurnool", value: "nagarkurnool" },
            { label: "Nalgonda", value: "nalgonda" },
            { label: "Nirmal", value: "nirmal" },
            { label: "Nizamabad", value: "nizamabad" },
            { label: "Peddapalli", value: "peddapalli" },
            { label: "Rajanna Sircilla", value: "rajanna_sircilla" },
            { label: "Ranga Reddy", value: "ranga_reddy" },
            { label: "Warangal", value: "warangal" },
            { label: "Yadadri Bhuvanagiri", value: "yadadri_bhuvanagiri" }
        ],
        tripura: [
            { label: "Dhalai", value: "dhalai" },
            { label: "Khowai", value: "khowai" },
            { label: "North Tripura", value: "north_tripura" },
            { label: "Sepahijala", value: "sepahijala" },
            { label: "South Tripura", value: "south_tripura" },
            { label: "Unakoti", value: "unakoti" },
            { label: "West Tripura", value: "west_tripura" }
        ],
        uttarakhand: [
            { label: "Almora", value: "almora" },
            { label: "Bageshwar", value: "bageshwar" },
            { label: "Chamoli", value: "chamoli" },
            { label: "Champawat", value: "champawat" },
            { label: "Dehradun", value: "dehradun" },
            { label: "Haridwar", value: "haridwar" },
            { label: "Nainital", value: "nainital" },
            { label: "Pauri Garhwal", value: "pauri_garhwal" },
            { label: "Pithoragarh", value: "pithoragarh" },
            { label: "Rudraprayag", value: "rudraprayag" },
            { label: "Tehri Garhwal", value: "tehri_garhwal" },
            { label: "Uttarkashi", value: "uttarkashi" }
        ],
        west_bengal: [
            { label: "Alipurduar", value: "alipurduar" },
            { label: "Bankura", value: "bankura" },
            { label: "Birbhum", value: "birbhum" },
            { label: "Burdwan", value: "burdwan" },
            { label: "Cooch Behar", value: "cooch_behar" },
            { label: "Darjeeling", value: "darjeeling" },
            { label: "Hooghly", value: "hooghly" },
            { label: "Howrah", value: "howrah" },
            { label: "Jalpaiguri", value: "jalpaiguri" },
            { label: "Jhargram", value: "jhargram" },
            { label: "Kalimpong", value: "kalimpong" },
            { label: "Kolkata", value: "kolkata" },
            { label: "Maldah", value: "maldah" },
            { label: "Murshidabad", value: "murshidabad" },
            { label: "Nadia", value: "nadia" },
            { label: "North 24 Parganas", value: "north_24_parganas" },
            { label: "Paschim Medinipur", value: "paschim_medinipur" },
            { label: "Purba Medinipur", value: "purba_medinipur" },
            { label: "South 24 Parganas", value: "south_24_parganas" },
            { label: "Uttar Dinajpur", value: "uttar_dinajpur" }
        ]
    }
    const span_styles = {
        borderRadius: "100%",
        padding: "12px 20px",
        border: "5px solid rgb(3, 99, 209)",
        textAlign: "center",
    };

    const line_styles = {
        backgroundColor: "rgb(3, 99, 209)"
    };

    return (
        <section id="tools" className="section-p">
            <form className='tools-survey'>
                {currentStep === 1 && (
                    <Link to="/" className="go-back-to">
                        <img src={goBackTo} alt="" className="icon" />
                        {t('form.step1.backLinkText')}
                    </Link>
                )}
                <div className="form-container">
                    <h1 className='tools-title'>{t('form.step1.title')}</h1>
                    <div className="tools-menu">
                        {currentStep === 1 ? <span style={span_styles}>{t('form.step1.menuSteps.0')}</span> : <span>1</span>}
                        {currentStep === 2 ? <hr className='menu-line' style={line_styles}/> : <hr className='menu-line'/> }
                        {currentStep === 2 ? <span style={span_styles}>{t('form.step1.menuSteps.1')}</span> : <span>2</span>}
                    </div>
                    {currentStep === 1 && (
                        <div className="form-step">
                            <label>{t('form.step1.cropSelection.label')}</label>
                            {showError && (
                                <div className='tools-error'>
                                    <img src={errorImg} alt="error" className='icon'/>
                                    <span>{t('form.step1.cropSelection.errorMessage')}</span>
                                </div>
                            )}
                            <Select options={crop_options} onChange={handleChange('crop')} />
                            <button onClick={nextStep} className="tools-btn">{t('form.step1.cropSelection.nextButtonText')}</button>
                        </div>
                    )}
                    {currentStep === 2 && (
                        <div className="form-step">
                            <label>{t('form.step2.stateSelection.label')}</label>
                            {showError && (
                                <div className='tools-error'>
                                    <img src={errorImg} alt="error" className='icon'/>
                                    <span>{t('form.step2.stateSelection.errorMessage')}</span>
                                </div>
                            )}
                            <Select options={state_options} onChange={handleChange('state')} />
                            
                            {formData.state && (
                                <>
                                    <label>{t('form.step2.districtSelection.label')}</label>
                                    {showError && (
                                        <div className='tools-error'>
                                            <img src={errorImg} alt="error" className='icon'/>
                                            <span>{t('form.step2.stateSelection.errorMessage')}</span>
                                        </div>
                                    )}
                                    <Select
                                        options={district_options[formData.state.value] || []}
                                        onChange={handleChange('district')}
                                    />
                                </>
                            )}
                            
                            <label>{t('form.step2.farmLandArea.label')} <span>{t('form.step2.farmLandArea.hint')}</span></label>
                            {showError && (
                                <div className='tools-error'>
                                    <img src={errorImg} alt="error" className='icon'/>
                                    <span>{t('form.step2.stateSelection.errorMessage')}</span>
                                </div>
                            )}
                            <input
                                type="text"
                                onChange={(e) => handleChange('area')(e.target.value)}
                                value={formData.area}
                                placeholder={t('form.step2.farmLandArea.inputPlaceholder')}
                            />
                            <div className="tools-btn-box">
                                <button onClick={prevStep} className="tools-btn">{t('form.step2.buttons.backButtonText')}</button>
                                <button type="submit" className='tools-submit-btn tools-btn' onClick={handleSubmit}>{t('form.step2.buttons.submitButtonText')}</button>
                            </div>
                            {dataSubmitted && (
                                <AnalyticalTool
                                    crop={formData.crop.label}
                                    state={formData.state.label}
                                    district={formData.district.label}
                                    hectares={parseFloat(formData.area)}
                                />
                            )}
                        </div>
                    )}
                </div>
            </form>
        </section>
    );
}

export default CropPrice;
