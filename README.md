# Creación de Grafana Plugins para Elastic

Esta es una guia para comenzar la creación de plugins para elasticSearch usando Grafana.
Con este archivo creearan un ambiente de desarrollo local.

## Estructura de Archivos

Se tiene que replicar la misma estructura de archivos ya que la carpeta grafana-data tiene que ser creada

* /GRAFANA_ELASTIC
    * /grafana-data
    * /grafana-plugins
    * docker-compose.yml
    * README.md

## Requisitos

- Se tiene que instalar Git: https://git-scm.com/
- Se recomienda instalar nvm si usan windows (https://github.com/coreybutler/nvm-windows) y si usan linux (https://github.com/nvm-sh/nvm) o Node.js directamente si tienen problemas con la instalacion de nvm.
- Se tiene que instalar Yarn. https://yarnpkg.com/.
- Se tiene que instalad Docker. https://www.docker.com/.
  Si usan windows se sigue este documento: https://docs.docker.com/docker-for-windows/install/
  Si usan linux escojan la distribucion y sigan el documento: https://docs.docker.com/engine/install/

## Descargar Proyecto

- Hacer una cuenta en github.
- Ir a la siguiente direccion: https://github.com/nob3500/GRAFANA_PLUGINS.
- Realizar un Fork del proyecto.
- Hacer un directorio en la PC.
- Luego realizar un clon del proyecto con el siguiente comando: git clone https://github.com/[USER]/GRAFANA_PLUGINS.git

## Gestion de git 1

- Crear un nuevo ramal (branch): git branch [nombre del nuevo ramal]
- Ir al nuevo ramal (branch): git checkout [nombre del nuevo ramal]

## Arrancar grafana

- Dentro del directorio del proyecto ejecutar: docker-compose up -d

## Inicializacion del Plugin

- Ir dentro del directorio grafana-plugins
- Correr el comando: npx @grafana/toolkit plugin:create my-plugin
- Correr el comando: cd my-plugin
- Correr el comando: yarn install
- Correr el comando: yarn dev
- En el arvhivo .gitignore borrar la linea con el nombre: dist/

## Gestion de plugin

- Dentro de la carpeta del plugin.
- Cada vez que se haga un cambio correr el comando: yarn dev
- Para evitar compilar siempre y compilar automaticamente ejecutar: yarn watch
- Una vez concluido el plugin ejecutar: yarn build

## Gestion de git 2

Desde el nuevo branch realizar lo siguiente:
Correr estos comandos siempre que se quiera guardar el estado del trabajo realizado localmente:
- git add --all
- git commit -m "Mensaje de avance del proyecto"

- Para revisar los avances ejecutar lo siguiente: git log

## Gestion de proyecto de git a github

- Para subir el proyecto a github se ejecuta el siguiente comando: git push
- Para actualizar el proyecto en otro host se usa: git pull

## Juntar el proyecto al original

En su proyecto Fork de github hacer click en "pull request" y esperar el comentario del propietario original del proyecto, si se necesita hacer cambios hacer un git push nuevamente y pedir un "pull request".

## Actualizar su copia del proyecto

- Agregar el repositorio original al proyecto fork (esto se hace una sola vez):
  git remote add upstream https://github.com/nob3500/GRAFANA_PLUGINS.git
- Buscar todos los cambios desde el repositorio principal:
  git fetch upstream
- Cambiarse al ramal maestro desde el fork:
  git checkout master
- Juntar los cambios del proyecto original desde del fork:
  git merge upstream/master

## Actualizar el ramal

- Desde el ramal que se encuetra o el nuevo creado hacer lo sigiente:
  git rebase master

- 3000:3000