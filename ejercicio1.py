import requests

cookie = "tu_cookie_de_sesion_de_coursera"
link = "https://www.coursera.org/learn/ve-a-lo-seguro-gestiona-los-riesgos-de-seguridad/home/module/3"

headers = {
    "Cookie": cookie,
}

response = requests.get(link, headers=headers)

if response.status_code == 200:
    print("Acceso exitoso!")
    print("Se ha accedido a la página:", link)
        
else:
    print("Error al acceder a la página:", link)
    print("Código de estado:", response.status_code)