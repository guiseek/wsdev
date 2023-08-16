import { InjectionToken } from '@nestjs/common';

export const ENV_CONFIG: InjectionToken = 'ENV_CONFIG';

export function sharedDataAccess(): string {
  return 'shared-data-access';
}
