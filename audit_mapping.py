
import os
import re
import yaml

CONTENT_DIR = r"c:\Users\adyse\Documents\github\radii-holdings\web-home\content"

def audit_mapping():
    print("Auditing Post <-> Image Mapping...\n")
    print(f"{'Post Title':<60} | {'Image Filename':<40}")
    print("-" * 105)
    
    issues = []
    
    for root, dirs, files in os.walk(CONTENT_DIR):
        for file in files:
            if file.endswith(".mdx"):
                filepath = os.path.join(root, file)
                
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL)
                if match:
                    data = yaml.safe_load(match.group(1))
                    title = data.get('title', 'Unknown Title')
                    image_path = data.get('image', 'None')
                    image_name = os.path.basename(image_path)
                    
                    # Truncate for display
                    safe_title = (title[:57] + '..') if len(title) > 57 else title
                    
                    print(f"{safe_title:<60} | {image_name:<40}")
                    
                    # Simple heuristic check
                    # if "Gold" in title and "gold" not in image_name:
                    #     issues.append(f"Possible Mismatch: {title} -> {image_name}")

    print("-" * 105)

if __name__ == "__main__":
    audit_mapping()
