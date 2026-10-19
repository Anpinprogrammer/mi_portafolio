"""Generate transparent responsive WebP assets. Requires Pillow (python3 -m pip install Pillow)."""
from pathlib import Path
from PIL import Image

assets = Path(__file__).resolve().parents[1] / 'public' / 'assets'
for name in ('hero', 'about'):
    with Image.open(assets / f'{name}.png') as original:
        for width in (480, 800, original.width):
            height = round(original.height * width / original.width)
            resized = original.resize((width, height), Image.Resampling.LANCZOS)
            output = assets / f'{name}-{width}.webp'
            resized.save(output, 'WEBP', quality=86, method=6)
            print(f'{output.name}: {output.stat().st_size:,} bytes ({width} x {height})')
