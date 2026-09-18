from PIL import Image
import os

def remove_black_bg(filename, out_filename):
    if not os.path.exists(filename):
        print(f"{filename} not found.")
        return
    img = Image.open(filename).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    # threshold for 'black'
    threshold = 30
    for item in datas:
        # if the pixel is dark, make it transparent
        # we can also do a soft transparency but let's try a simple threshold
        if item[0] < threshold and item[1] < threshold and item[2] < threshold:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(out_filename, "PNG")
    print(f"Saved {out_filename}")

remove_black_bg("SBI.jpeg", "SBI.png")
remove_black_bg("Stellar.jpeg", "Stellar.png")
remove_black_bg("Gravitas.jpeg", "Gravitas.png")
