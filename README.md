# Angular Guards / Interceptors

Este exercício é parte do módulo de Angular do bootcamp T-Academy e aborda o uso de Guards e Interceptors.

## Descrição do exercício

- Consumir uma API com autenticação e autorização no front.\
  **Implementação**: Foi utilizada [a API feita no Spring](https://github.com/paulohenrique-gh/spring-atividade-autenticacao-autorizacao) para autentação e autorização, utilizando os endpoints para registro e login. O guard personalizado `authGuard` foi utilizado para proteger as rotas do front-end.

- Adicionar camadas de autorização para "logado" e para roles
  **Implementação**: Foram criadas páginas para admins e para médicos: médicos só podem acessar a área de médicos, admins podem acessar as duas. Os guards `adminGuard` e `doctorGuard` foram utilizados para validar os `roles` do usuário e liberar o acesso a essas rotas dependendo do papel do usuário autenticado.

- Usar o navigate/navigateByUrl para redirecionar caso necessário.
  **Implementação**: Os métodos `navigate` e `navigateByUrl` foram utilizados em diferentes partes, como no `NavbarComponent` durante o logout e redirecionamento para a página de login, e no `authGuard` para redirecionar para o login se o usuário não estiver autenticado.

- Desafio 01: Após finalizar, nao permitir o usuario fazer "NADA" sem
estar logado. Sim, se clicar em um botao e nao estiver logado
volta pra pagina de login.
**Implementação**: Foi utilizada uma função `canActivateChild` para bloquear todas as rotas para usuários não autenticados, exceto a de login.

- Desafio 02: Adicionar a camada de canDeactivate
**Implementação**: Foi utilizada a função `canDeactivate` na rota `contact`. O usuário só consegue sair dessa página se cadastrar um email.

```typescript
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    canActivateChild: [authGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent,
        canDeactivate: [contactGuard]
      },
      {
        path: 'admin-area',
        component: AdminAreaComponent,
        canActivate: [adminGuard],
      },
      {
        path: 'doctors-area',
        component: DoctorsAreaComponent,
        canActivate: [doctorGuard],
      },
    ],
  },
];
```

![image](https://github.com/user-attachments/assets/11d069b2-28a8-4a45-a9bf-cafd37cca073)

