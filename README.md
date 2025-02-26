
ng --version

npx @angular/cli@16 new meu-projeto

npm install --save-dev jasmine @types/jasmine

ng g c calculator

#### Consultar cep
```
https://www.youtube.com/watch?v=ezMTJEZTiUw
```
npx ng g c formulario --skip-tests

npx ng g s viacep --skip-tests

npx ng g environments

#### Bootstrap
npm install bootstrap

angular.json
```
  "styles": [
    "src/styles.scss",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
```

#### HttpClient 16
config. no app.module.ts


* import { HttpClientModule } from '@angular/common/http';

* Imports
```
imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
```
```
https://www.youtube.com/watch?v=rIHNjX4ucvk
```

#### Roteando

* app.module.ts
``` adicionar
imports: [
    RouterOutlet,
    CommonModule,
  ],
```

* app-routing.module.ts
```
const routes: Routes = [
  { path: 'cadastro', component: FormularioComponent },
  { path: 'calcular', component: CalculatorComponent },
];
```