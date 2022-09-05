PS C:\CLASSROOM\ANGULAR14> ng new products-example
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? CSS
CREATE products-example/angular.json (2972 bytes)
CREATE products-example/package.json (1047 bytes)
CREATE products-example/README.md (1069 bytes)   
CREATE products-example/tsconfig.json (863 bytes)
CREATE products-example/.editorconfig (274 bytes)
CREATE products-example/.gitignore (548 bytes)
CREATE products-example/.browserslistrc (600 bytes)
CREATE products-example/karma.conf.js (1433 bytes)
CREATE products-example/tsconfig.app.json (287 bytes)
CREATE products-example/tsconfig.spec.json (333 bytes)
CREATE products-example/.vscode/extensions.json (130 bytes)
CREATE products-example/.vscode/launch.json (474 bytes)
CREATE products-example/.vscode/tasks.json (938 bytes)
CREATE products-example/src/favicon.ico (948 bytes)
CREATE products-example/src/index.html (301 bytes)
CREATE products-example/src/main.ts (372 bytes)
CREATE products-example/src/polyfills.ts (2338 bytes)
CREATE products-example/src/styles.css (80 bytes)
CREATE products-example/src/test.ts (749 bytes)
CREATE products-example/src/assets/.gitkeep (0 bytes)
CREATE products-example/src/environments/environment.prod.ts (51 bytes)
CREATE products-example/src/environments/environment.ts (658 bytes)
CREATE products-example/src/app/app-routing.module.ts (245 bytes)
CREATE products-example/src/app/app.module.ts (393 bytes)
CREATE products-example/src/app/app.component.html (23115 bytes)
CREATE products-example/src/app/app.component.css (0 bytes)
✔ Packages installed successfully.
    Directory is already under version control. Skipping initialization of git.
PS C:\CLASSROOM\ANGULAR14> cd .\products-example\ 
PS C:\CLASSROOM\ANGULAR14\products-example> ls


    Directory: C:\CLASSROOM\ANGULAR14\products-example


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----       05-09-2022     16:19                .vscode
d-----       05-09-2022     16:20                node_modules
d-----       05-09-2022     16:19                src
-a----       05-09-2022     16:19            600 .browserslistrc
-a----       05-09-2022     16:19            274 .editorconfig
-a----       05-09-2022     16:19            548 .gitignore
-a----       05-09-2022     16:19           2972 angular.json
-a----       05-09-2022     16:19           1433 karma.conf.js
-a----       05-09-2022     16:20         794142 package-lock.json
-a----       05-09-2022     16:19           1047 package.json
-a----       05-09-2022     16:19           1069 README.md
-a----       05-09-2022     16:19            863 tsconfig.json
-a----       05-09-2022     16:19            333 tsconfig.spec.json


PS C:\CLASSROOM\ANGULAR14\products-example> ng generate module products 
? Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more  
details and how to change this setting, see https://angular.io/analytics. Yes

Thank you for sharing pseudonymous usage data. Should you change your mind, the following
command will disable this feature entirely:

    ng analytics disable
Global setting: enabled
Local setting: enabled
Effective status: enabled
CREATE src/app/products/products.module.ts (194 bytes)
PS C:\CLASSROOM\ANGULAR14\products-example> cd products 
cd : Cannot find path 'C:\CLASSROOM\ANGULAR14\products-example\products' because it does not exist.
At line:1 char:1
+ cd products
   FoundException
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.SetLocationCommand
 
PS C:\CLASSROOM\ANGULAR14\products-example> cd src/app/products
PS C:\CLASSROOM\ANGULAR14\products-example\src\app\products> ng g c product-list
CREATE src/app/products/product-list/product-list.component.spec.ts (635 bytes)
CREATE src/app/products/product-list/product-list.component.ts (298 bytes)
CREATE src/app/products/product-list/product-list.component.css (0 bytes)
UPDATE src/app/products/products.module.ts (300 bytes)
PS C:\CLASSROOM\ANGULAR14\products-example\src\app\products> ng g c product-detail
CREATE src/app/products/product-detail/product-detail.component.spec.ts (649 bytes)
CREATE src/app/products/product-detail/product-detail.component.ts (306 bytes)
CREATE src/app/products/product-detail/product-detail.component.css (0 bytes)
PS C:\CLASSROOM\ANGULAR14\products-example\src\app\products> ng g pipe sort       
CREATE src/app/products/sort.pipe.spec.ts (179 bytes)
CREATE src/app/products/sort.pipe.ts (213 bytes)
UPDATE src/app/products/products.module.ts (557 bytes)
PS C:\CLASSROOM\ANGULAR14\products-example\src\app\products> cd ..
PS C:\CLASSROOM\ANGULAR14\products-example\src\app> cd .. 
PS C:\CLASSROOM\ANGULAR14\products-example> ng g directive copyright
CREATE src/app/copyright.directive.spec.ts (236 bytes)
CREATE src/app/copyright.directive.ts (147 bytes)
PS C:\CLASSROOM\ANGULAR14\products-example> ng g directive numeric  
CREATE src/app/numeric.directive.spec.ts (228 bytes)
CREATE src/app/numeric.directive.ts (143 bytes)
CREATE src/app/permission.directive.spec.ts (240 bytes)
CREATE src/app/permission.directive.ts (149 bytes)
UPDATE src/app/app.module.ts (642 bytes)
PS C:\CLASSROOM\ANGULAR14\products-example> doskey /history
PS C:\CLASSROOM\ANGULAR14\products-example> doskey /history
PS C:\CLASSROOM\ANGULAR14\products-example>





























