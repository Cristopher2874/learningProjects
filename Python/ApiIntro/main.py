from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse,Response

app = FastAPI()

# funcion intermedia entre el api y el back para tener control, permisos y solicitudes
app.add_middleware( 
    CORSMiddleware,
    #agregar links de vercel, páginas, etc.
    allow_origins=["*"], # ips permitidas para el acceso a los datos, ips específicas para entrar
    allow_credentials=True,
    allow_methods=["*"], # métodos a los que puede entrar la url, para acceder y sacar datos, si se cambia a GET consulta de datos
)

@app.get("/") #declarar una ruta en especifico con cada método, get, patch, put, etc. especificar la acción
def read_root():
    # respuesta de tipo JSON para mostrar y responder el API
    return JSONResponse(
        content={"message": "Hi"},
        status_code=200,
    )

@app.get("/test")
def read_test():
    # enviar variables, específicas
    return Response(content="Hello world", status_code=200)

@app.get("/items/{item_id}")

def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

    #params y querys para una request de API
    #los parámetros se usan dentro de la URL 

#para los métodos y dar un parámetro específico
@app.get("/products/{tipp}") #para tener un parámetro dinámico, en este caso tipp
def read_product(tipp: str="def"): #por si se necesita un valor default para el parámetro
    return {"tip": tipp}

#https://httpie.io/app
#https://fastapi.tiangolo.com/#installation

# datos por query
# /?products=comida por ejemplo para pasar el query de comidas
# puedes usar & para unir varios queris
# /?products=comida&price=1000
@app.get("/products/")
async def read_item(products:str, price:int):
    return {"products": products, "precio": price}