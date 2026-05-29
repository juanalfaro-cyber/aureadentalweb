import os
from PIL import Image

def generate_favicons():
    logo_path = 'public/logo.png'
    if not os.path.exists(logo_path):
        print(f"Error: No se encontró {logo_path}")
        return
    
    # Abrir la imagen del logo
    img = Image.open(logo_path)
    
    # Coordenadas de la flor de loto dorada
    # X: 77 a 178, Y: 44 a 122 (Ancho: 101, Alto: 78)
    crop_box = (77, 44, 178, 122)
    lotus = img.crop(crop_box)
    
    # Crear un lienzo cuadrado transparente de 110x110 para centrar la flor
    canvas_size = 110
    square_lotus = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
    
    # Calcular posiciones para centrar
    x_offset = (canvas_size - lotus.width) // 2
    y_offset = (canvas_size - lotus.height) // 2
    square_lotus.paste(lotus, (x_offset, y_offset))
    
    # Definir los tamaños requeridos
    sizes = {
        'favicon-16x16.png': 16,
        'favicon-32x32.png': 32,
        'favicon-48x48.png': 48,
        'favicon-96x96.png': 96,
        'favicon-144x144.png': 144,
        'apple-touch-icon.png': 180,
        'android-chrome-192x192.png': 192,
        'android-chrome-512x512.png': 512,
        'favicon.png': 96  # Favicon por defecto en alta resolución
    }
    
    # Generar y guardar cada archivo PNG
    for filename, dim in sizes.items():
        resized = square_lotus.resize((dim, dim), Image.Resampling.LANCZOS)
        out_path = os.path.join('public', filename)
        resized.save(out_path, "PNG")
        print(f"Generado: {out_path} ({dim}x{dim})")
        
    # Generar favicon.ico multi-resolución conteniendo (16x16, 32x32, 48x48)
    ico_sizes = [16, 32, 48]
    ico_images = [square_lotus.resize((dim, dim), Image.Resampling.LANCZOS) for dim in ico_sizes]
    
    ico_path = 'public/favicon.ico'
    ico_images[0].save(
        ico_path,
        format='ICO',
        sizes=[(dim, dim) for dim in ico_sizes],
        append_images=ico_images[1:]
    )
    print(f"Generado: {ico_path} con resoluciones 16x16, 32x32 y 48x48")

if __name__ == '__main__':
    generate_favicons()
