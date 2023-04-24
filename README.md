## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- Node.js (v14 o superior)
- npm (v6 o superior)
- Git


## Cómo ejecutar el proyecto

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clona este repositorio:

```bash
git git@github.com:Trycatch-tv/team17-project7-backend.git

```
2. Navega al directorio del proyecto:

```bash
cd team17-project7-backend
```

3. Instala las dependencias del proyecto `team17-project7-backend`:

```bash
npm install
```

## Varaiables de entorno

En la raiz del proyecto debe crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada movies


## Ejecutar el proyecto

Para ejecutar el proyecto, ejecuta el siguiente comando:

```bash
npm start
```



## Licencia 

Este proyecto está licenciado bajo la licencia MIT. Para más información, visita [LICENSE](LICENSE).