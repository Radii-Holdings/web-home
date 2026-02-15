import zipfile
import os
import json

lottie_path = r"c:\Users\adyse\Documents\github\radii-holdings\web-home\public\animation_llqd7ey4.lottie"
extract_path = r"c:\Users\adyse\Documents\github\radii-holdings\web-home\public"

try:
    with zipfile.ZipFile(lottie_path, 'r') as zip_ref:
        zip_ref.extractall(extract_path)
        print("Extracted successfully.")
        
        # Rename animation.json to avoid generic name collisions if needed, 
        # but usually it contains 'manifest.json' and 'animations/data.json' or similar.
        for file in zip_ref.namelist():
            print(f"Extracted: {file}")
            
except Exception as e:
    print(f"Error: {e}")
