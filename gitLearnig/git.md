# Git workflow

1. Crear un repositorio 
2. Compartir el repositorio con su team en el repositorio y darle privilegios[documentación](https://docs.github.com/es/account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)
3. El team tiene que clonar el repositorio por medio de https: ``git clone repositorio``
4. Entra al directorio clonado `` d cursoFrontEndCSS ``
5. Añadimos la ruta remota por medio de upstream `` git remote add upstream git@github.com:LeonardoMorenoFaberon/cursoFrontEndCSS.git``
6. `` git remote -v ``
7. `` git pull ``
8. `` git checkout "nombre de la rama" ``
9. Haces tus cambios en la ramas o podes crearte una rama `` git checkout -b 'new-branch' ``
10. `` git add .``
11. `` git commit -m "Amo git" ``
12. `` git push upstream "nombre de la rama"``