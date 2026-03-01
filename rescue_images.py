
import os
import re
import shutil
import yaml
import glob

CONTENT_DIR = r"c:\Users\adyse\Documents\github\radii-holdings\web-home\content"
APP_DIR = r"c:\Users\adyse\Documents\github\radii-holdings\web-home\src\app"
PUBLIC_BLOGS_DIR = r"c:\Users\adyse\Documents\github\radii-holdings\web-home\public\blogs"
PUBLIC_IMAGES_DIR = r"c:\Users\adyse\Documents\github\radii-holdings\web-home\public\images"
ARTIFACTS_DIR = r"C:\Users\adyse\.gemini\antigravity\brain\8342f489-07ab-4a7b-aba1-3e4d3ab5fc68"


def get_expected_images():
    expected = {} # filename -> (target_dir, source_file)
    
    # 1. Scan Content (Blogs)
    for root, dirs, files in os.walk(CONTENT_DIR):
        for file in files:
            if file.endswith(".mdx"):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                match = re.search(r'image:\s*["\']?(.*?)["\']?\n', content)
                if match:
                    img_path = match.group(1)
                    # Expected format in MDX: "../../public/blogs/image.png" or just "image.png"
                    # We assume filenames are unique enough or just take basename
                    basename = os.path.basename(img_path)
                    expected[basename] = (PUBLIC_BLOGS_DIR, filepath)

    # 2. Scan App (Landing Pages)
    for root, dirs, files in os.walk(APP_DIR):
        for file in files:
            if file.endswith(".js"):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                # Look for src="/images/..."
                matches = re.finditer(r'src=["\'](/images/(.*?))["\']', content)
                for match in matches:
                    basename = match.group(2) # "algo-trading.png"
                    expected[basename] = (PUBLIC_IMAGES_DIR, filepath)
                    
    return expected

def find_best_artifact(target_name):
    # Target: "forex_trading_layr0.png"
    # Artifact: "forex_trading_layr0_1771185433878.png"
    
    base_target = os.path.splitext(target_name)[0] # forex_trading_layr0
    
    # Generate variations (original, hyphens->underscores, underscores->hyphens)
    variations = {base_target, base_target.replace('-', '_'), base_target.replace('_', '-')}
    
    candidates = []
    for var in variations:
        pattern = os.path.join(ARTIFACTS_DIR, f"{var}*.png")
        candidates.extend(glob.glob(pattern))
        pattern_jpg = os.path.join(ARTIFACTS_DIR, f"{var}*.jpg")
        candidates.extend(glob.glob(pattern_jpg))

    if not candidates:
        return None
        
    # Sort by modification time (newest first)
    candidates.sort(key=os.path.getmtime, reverse=True)
    return candidates[0]

def main():
    if not os.path.exists(PUBLIC_BLOGS_DIR):
        os.makedirs(PUBLIC_BLOGS_DIR)
    if not os.path.exists(PUBLIC_IMAGES_DIR):
        os.makedirs(PUBLIC_IMAGES_DIR)
        
    expected_images = get_expected_images()
    print(f"\nScanning for {len(expected_images)} expected images...")
    
    recovered_count = 0
    missing_images = []
    
    for target_name, (target_dir, source_file) in expected_images.items():
        target_path = os.path.join(target_dir, target_name)
        
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
