
import os
import re
import shutil
import yaml
import glob

CONTENT_DIR = r"c:\Users\adyse\Documents\github\radii-holdings\web-home\content"
PUBLIC_DIR = r"c:\Users\adyse\Documents\github\radii-holdings\web-home\public\blogs"
ARTIFACTS_DIR = r"C:\Users\adyse\.gemini\antigravity\brain\87473f30-33cc-4136-b3ef-e39ec2bfbb8b"

def get_expected_images():
    expected = {} # filename -> mdx_path
    for root, dirs, files in os.walk(CONTENT_DIR):
        for file in files:
            if file.endswith(".mdx"):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                match = re.search(r'image:\s*["\']?(.*?)["\']?\n', content)
                if match:
                    img_path = match.group(1)
                    basename = os.path.basename(img_path)
                    expected[basename] = filepath
    return expected

def find_best_artifact(target_name):
    # Target: "forex_trading_layr0.png"
    # Artifact: "forex_trading_layr0_1771185433878.png"
    
    base_target = os.path.splitext(target_name)[0] # forex_trading_layr0
    
    # Search for files starting with base_target in artifacts
    pattern = os.path.join(ARTIFACTS_DIR, f"{base_target}*.png")
    candidates = glob.glob(pattern)
    
    # Also try jpg
    if not candidates:
        pattern = os.path.join(ARTIFACTS_DIR, f"{base_target}*.jpg")
        candidates = glob.glob(pattern)

    if not candidates:
        return None
        
    # Sort by modification time (newest first)
    candidates.sort(key=os.path.getmtime, reverse=True)
    return candidates[0]

def main():
    if not os.path.exists(PUBLIC_DIR):
        os.makedirs(PUBLIC_DIR)
        
    expected_images = get_expected_images()
    print(f"\nScanning for {len(expected_images)} expected images...")
    
    recovered_count = 0
    missing_images = []
    
    for target_name, mdx_path in expected_images.items():
        target_path = os.path.join(PUBLIC_DIR, target_name)
        
        # Check if already exists in public dir
        if os.path.exists(target_path):
             continue
             
        # If not, try to rescue
        artifact_path = find_best_artifact(target_name)
        if artifact_path:
            print(f"Recovering {target_name} from {os.path.basename(artifact_path)}")
            shutil.copy2(artifact_path, target_path)
            recovered_count += 1
        else:
            missing_images.append(target_name)

    print(f"\n--- Status Report ---")
    print(f"Recovered this run: {recovered_count}")
    print(f"Total Missing: {len(missing_images)}")
    for img in missing_images:
        print(f" - [MISSING] {img}")

if __name__ == "__main__":
    main()
