from pydantic_settings import BaseSettings
from functools import lru_cache

class Settings(BaseSettings):
    # configurações da api
    APP_TITLE: str = "Venuo API"
    APP_VERSION: str = "1.0.0"
    
    # configurações do docker
    POSTGRES_USER: str = "postgres"
    POSTGRES_PASSWORD: str = "postgres"
    POSTGRES_DB: str = "venuo_db"
    
    # configurações do neon
    NEON_HOST: str = ""
    NEON_DB: str = "venuo_db"
    NEON_USER: str = ""
    NEON_PASSWORD: str = ""
    
    # definiçao de banco local ou nuvem (o padrão é False = local)
    USE_NEON: bool = False
    
    @property
    def DATABASE_URL(self) -> str:
        if self.USE_NEON and self.NEON_HOST and self.NEON_USER and self.NEON_PASSWORD:
            # conexão com Neon 
            return f"postgresql+psycopg://{self.NEON_USER}:{self.NEON_PASSWORD}@{self.NEON_HOST}/{self.NEON_DB}?sslmode=require"
        else:
            # conexão local
            return f"postgresql+psycopg://{self.POSTGRES_USER}:{self.POSTGRES_PASSWORD}@localhost:5432/{self.POSTGRES_DB}"
    
    class Config:
        env_file = ".env"
        case_sensitive = True

@lru_cache()
def get_settings() -> Settings:
    return Settings()
