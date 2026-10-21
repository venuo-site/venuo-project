from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.routers import status

app = FastAPI(
    title="Venuo API",
    description="Setup inicial do Back-end",
    version="1.0.0"
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

@app.get("/")
def read_root():
    return {"message": "Venuo API rodando. Acesse /docs para a documentação."}
