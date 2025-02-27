from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from datetime import datetime, timedelta
from passlib.context import CryptContext

app = FastAPI()

# Configuração de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuração de segurança
SECRET_KEY = "your-secret-key"  # Substitua por uma chave secreta segura
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Modelos de dados
class User(BaseModel):
    id: int
    login: str
    email: str
    password: str  # Em produção, isso seria um hash
    telefone: Optional[str] = None
    endereco: Optional[str] = None
    tipo_conta: Optional[str] = "usuario_comum"

class UserCreate(BaseModel):
    login: str
    email: str
    password: str
    telefone: Optional[str] = None
    endereco: Optional[str] = None
    tipo_conta: Optional[str] = "usuario_comum"

class Token(BaseModel):
    access_token: str
    token_type: str

class Pedido(BaseModel):
    id: int
    titulo: str
    local: str
    pessoas: int
    imagem: str
    icone: str

# Banco de dados em memória
users_db = []
pedidos_db = []

# Funções auxiliares
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        login: str = payload.get("sub")
        if login is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        user = next((u for u in users_db if u.login == login), None)
        if user is None:
            raise HTTPException(status_code=401, detail="User not found")
        return user
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

# Endpoints de autenticação
@app.post("/token", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = next((u for u in users_db if u.login == form_data.username), None)
    if not user or not verify_password(form_data.password, user.password):
        raise HTTPException(status_code=401, detail="Incorrect login or password")
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.login}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/register", response_model=User)
def register(user: UserCreate):
    if any(u.login == user.login or u.email == user.email for u in users_db):
        raise HTTPException(status_code=400, detail="Login or email already registered")
    hashed_password = get_password_hash(user.password)
    new_user = User(
        id=len(users_db) + 1,
        login=user.login,
        email=user.email,
        password=hashed_password,
        telefone=user.telefone,
        endereco=user.endereco,
        tipo_conta=user.tipo_conta
    )
    users_db.append(new_user)
    return new_user

# Endpoints existentes
@app.get("/pedidos", response_model=List[Pedido])
def listar_pedidos(current_user: User = Depends(get_current_user)):
    return pedidos_db

@app.post("/pedidos", response_model=Pedido)
def criar_pedido(pedido: Pedido, current_user: User = Depends(get_current_user)):
    if any(p.id == pedido.id for p in pedidos_db):
        raise HTTPException(status_code=400, detail="Pedido com este ID já existe")
    pedidos_db.append(pedido)
    return pedido

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000)