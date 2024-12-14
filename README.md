# hito_3_Backend_Node_Express
## Daniel_Rojas

Para ejecutar el projecto inicialmente se debe levantar primero el contenedor de docker
```cmd
docker-compose.yml

docker-compose up -d
```
con el contenedor andando debemos levantar la bd 
```cmd
docker ps

docker exec -it [CONTAINER ID] bash
docker exec -it 2900660305c1 bash
```

Ejemplo 
```cmd
docker ps

CONTAINER ID   IMAGE             COMMAND                  CREATED        STATUS             PORTS                    NAMES
987abc3463d8   postgres:latest   "docker-entrypoint.s…"   13 hours ago   Up About an hour   0.0.0.0:5434->5432/tcp   postgreshito2

docker exec -it 987abc3463d8 bash 

psql -U postgres -d dbhito3
````

cargar script con creacion y carga de datos que se encuentra en ./data/ddl.sql

ahora ya se podra ejecutar el proyecto con los siguientes comandos

````bash
npm i

npm run dev
````

npm install -D vitest





## Evidencia del proyecto

Metodo Get para obtener todo los usuarios

![Get Users](./images/get%20users.png)


Metodo para registrar nuevo usuario

![Post Users](./images/post%20user.png)

Metodo para actualizar usuario

![User Update](./images/userput.png)

![Put Users](./images/put%20user.png)

Metodo para eliminar usuario

![Delete Users](./images/delete%20user.png)

![Get User Final](./images/use