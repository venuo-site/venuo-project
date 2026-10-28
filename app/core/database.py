from sqlmodel import SQLModel, create_engine, Session
from app.core.config import get_settings


settings = get_settings()


engine = create_engine(
    settings.DATABASE_URL,
    echo=True,  
    pool_pre_ping=True  
)

def create_db_and_tables():
    """
    Função que lê todos os nossos Models (tabelas) e cria elas no banco de dados
    se elas ainda não existirem.
    """
   
    from app.models import establishment  
    SQLModel.metadata.create_all(engine)

def get_session():
    """
    Gerador de sessão. É isso que vamos usar nas rotas para salvar/buscar dados.
    O 'yield' permite que o FastAPI gerencie o fechamento da conexão automaticamente.
    """
    with Session(engine) as session:
        yield session
