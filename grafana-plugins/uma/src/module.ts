import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'nombre',
      name: 'Nombre',
      description: 'Nombre de uma',
    })
    .addTextInput({
      path: 'fase',
      name: 'Fase',
      description: 'Fase donde esta el uma',
    })
    .addTextInput({
      path: 'sistema',
      name: 'Sistema',
      description: 'Sistema donde esta el uma',
    })
    .addTextInput({
      path: 'marca',
      name: 'Marca',
      description: 'Marca del uma',
    })
    .addTextInput({
      path: 'modelo',
      name: 'Modelo',
      description: 'Modelo del uma',
    })
    .addTextInput({
      path: 'ubicacion',
      name: 'Ubicación',
      description: 'Ubicación del uma',
    });
    
});
