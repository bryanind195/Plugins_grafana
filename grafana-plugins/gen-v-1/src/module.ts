import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'nombre',
      name: 'Nombre',
      description: 'Nombre del generador',
    })
    .addTextInput({
      path: 'fase',
      name: 'Fase',
      description: 'Fase donde esta el generador',
    })
    .addTextInput({
      path: 'sistema',
      name: 'Sistema',
      description: 'Sistema donde esta el generador',
    })
    .addTextInput({
      path: 'marca',
      name: 'Marca',
      description: 'Marca del generador',
    })
    .addTextInput({
      path: 'modelo',
      name: 'Modelo',
      description: 'Modelo del generador',
    })
    .addTextInput({
      path: 'ubicacion',
      name: 'Ubicación',
      description: 'Ubicación del generador',
    });
});
