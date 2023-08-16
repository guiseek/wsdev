import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@wsdev/account/feature-user').then(
        (m) => m.AccountFeatureUserModule
      ),
  },
];
