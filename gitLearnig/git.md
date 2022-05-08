# Git y Github

## básico 
1.  `` git add .``
2.  `` git commit -m "Amo git" ``
3.  `` git status``

## Como trabajar en equipo con git y git
1. Una vez tengamos un repositorio creado en gitHub lo vamos a compartir y asignar los privilegios necesarios a cada persona del equipo [Aquí puedes ver como](https://docs.github.com/es/account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)
2. cada miembro del equipo tiene que clonar el repositorio en sus computadoras por medio de https: ``git clone repositorio``
3. Una vez estemos dentro de del directorio del proyecto y hallamos hechos nuestros cambios añadimos la ruta remota por medio de upstream `` git remote add upstream git@github.com:LeonardoMorenoFaberon/cursoFrontEndCSS.git``
4. Verificamos si la ruta de agrego correctamente con `` git remote -v ``
5. `` git pull `` para traernos los últimos cambios 
6. `` git push upstream "nombre de la rama"`` para subir nuestros cambios al repositorio

## Ramas
1. Para cambiarnos de una rama a otra usamos `` git checkout "nombre de la rama" ``
2. Con `` git checkout -b 'new-branch' `` creamos una nueva rama


