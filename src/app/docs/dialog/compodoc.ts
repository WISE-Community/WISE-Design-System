import compodocData from 'documentation.json';

export const WISEDialogServiceDocs = compodocData.injectables.find(
  (injectable) => injectable.name === 'WISEDialogService',
);

export const WISEDialogConfigDocs = compodocData.classes.find(
  (injectable) => injectable.name === 'WISEDialogConfig',
);
