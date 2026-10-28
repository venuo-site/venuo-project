from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.routers import status
from app.routers import establishments
from app.core.database import create_db_and_tables
from app.core.config import get_settings


settings = get_settings()

@asynccontextmanager
async def lifespan(app: FastAPI):
    
    create_db_and_tables()
    yield
    


app = FastAPI(
    title=settings.APP_TITLE,
    description="Setup inicial do Back-end",
    version=settings.APP_VERSION,
    lifespan=lifespan
)


origins = [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    return JSONResponse(
        status_code=exc.status_code,
        content={"status": "error", "detail": exc.detail, "path": request.url.path}
    )

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"status": "error", "detail": "Erro interno no servidor", "path": request.url.path}
    )


app.include_router(status.router, prefix="/api/v1", tags=["Status"])
app.include_router(establishments.router, prefix="/api/v1", tags=["Establishments"])


@app.get("/")
def read_root():
    return {
        "message": "Venuo API rodando.",
        "docs": "/docs",
        "database": "Conectado" if settings.DATABASE_URL else "Não configurado"
    }