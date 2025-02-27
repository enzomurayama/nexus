from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware


# Cria uma instância do FastAPI
app = FastAPI()

origins = [
    "http://localhost:8000",
    "http://localhost:5137",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo de dados para um pedido
class Pedido(BaseModel):
    id: int
    titulo: str
    local: str
    pessoas: int
    imagem: str
    icone: str

# Banco de dados em memória (lista de pedidos)
pedidos_db = []

# Endpoint para listar todos os pedidos
@app.get("/pedidos", response_model=List[Pedido])
def listar_pedidos():
    return pedidos_db

# Endpoint para criar um novo pedido
@app.post("/pedidos", response_model=Pedido)
def criar_pedido(pedido: Pedido):
    # Verifica se o ID já existe
    if any(p.id == pedido.id for p in pedidos_db):
        raise HTTPException(status_code=400, detail="Pedido com este ID já existe")

    # Adiciona o pedido ao banco de dados
    pedidos_db.append(pedido)
    return pedido

# Roda a aplicação
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000)