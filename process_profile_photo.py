#!/usr/bin/env python3
"""
Professional Profile Photo Processing Script
Optimizes profile pictures for cybersecurity portfolio
"""

from PIL import Image, ImageEnhance, ImageFilter
import os
import sys

def process_profile_photo(input_path, output_path, size=512):
    """
    Process a profile photo to meet professional portfolio standards
    
    Requirements:
    - Crop to face-centered composition
    - Enhance lighting and clarity while keeping realistic
    - Add subtle circular frame
    - Optimize for dark theme aesthetic
    - Preserve natural features and identity
    """
    
    try:
        # Open the image
        img = Image.open(input_path)
        print(f"✓ Loaded image: {input_path}")
        print(f"  Original size: {img.size}")
        
        # Convert to RGB if necessary
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (15, 15, 25))  # Dark portfolio bg
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = background
        
        # Crop to square (face-centered)
        width, height = img.size
        crop_size = min(width, height)
        
        # Calculate center crop coordinates (slightly favor upper portion for face)
        left = (width - crop_size) // 2
        top = (height - crop_size) // 3  # Higher focus on face
        right = left + crop_size
        bottom = top + crop_size
        
        img = img.crop((left, top, right, bottom))
        print(f"✓ Cropped to square: {img.size}")
        
        # Resize to target size
        img = img.resize((size, size), Image.Resampling.LANCZOS)
        print(f"✓ Resized to: {img.size}")
        
        # Enhance lighting - slightly increase brightness and contrast
        enhancer = ImageEnhance.Brightness(img)
        img = enhancer.enhance(1.08)  # Subtle brightness increase
        
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(1.12)  # Subtle contrast increase
        
        # Enhance color saturation slightly
        enhancer = ImageEnhance.Color(img)
        img = enhancer.enhance(1.05)  # Slight color boost
        
        # Subtle sharpening
        enhancer = ImageEnhance.Sharpness(img)
        img = enhancer.enhance(1.15)  # Slight sharpening
        
        print("✓ Enhanced lighting, contrast, and clarity")
        
        # Add subtle soft glow using Gaussian blur blend
        glow = img.copy()
        glow = glow.filter(ImageFilter.GaussianBlur(radius=8))
        
        # Blend: mostly original with slight glow overlay
        img.putalpha(255)
        glow.putalpha(60)
        
        base = Image.new('RGB', img.size, (15, 15, 25))
        base.paste(img, (0, 0), img)
        base.paste(glow, (0, 0), glow)
        img = base
        
        print("✓ Added subtle glow effect")
        
        # Create circular mask for professional look
        mask = Image.new('L', (size, size), 0)
        from PIL import ImageDraw
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, size, size), fill=255)
        
        # Apply circular crop
        output = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        img = img.convert('RGBA')
        output.paste(img, (0, 0), mask)
        
        # Convert back to RGB with dark background
        background = Image.new('RGB', (size, size), (15, 15, 25))
        background.paste(output, (0, 0), output)
        
        print("✓ Applied circular professional frame")
        
        # Save with high quality
        background.save(output_path, 'PNG', quality=95, optimize=True)
        print(f"✓ Saved processed image: {output_path}")
        
        print("\n✅ Profile photo processing complete!")
        print(f"   Image is ready for portfolio use")
        print(f"   Size: {size}x{size}px")
        print(f"   Format: PNG with transparency-ready background")
        
    except Exception as e:
        print(f"❌ Error processing image: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python process_profile_photo.py <input_image> [output_path] [size]")
        print("Example: python process_profile_photo.py PSX_20260426_171513.png public/profile-photo.png 512")
        sys.exit(1)
    
    input_image = sys.argv[1]
    output_image = sys.argv[2] if len(sys.argv) > 2 else "public/profile-photo.png"
    photo_size = int(sys.argv[3]) if len(sys.argv) > 3 else 512
    
    if not os.path.exists(input_image):
        print(f"❌ Input image not found: {input_image}")
        sys.exit(1)
    
    process_profile_photo(input_image, output_image, photo_size)
