import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'nombre',
      name: 'Nombre',
      description: 'Nombre',
    })
    .addTextInput({
      path: 'fase',
      name: 'Fase',
      description: 'Fase',
    })
    .addTextInput({
      path: 'sistema',
      name: 'Sistema',
      description: 'Sistema dond',
    })
    .addTextInput({
      path: 'marca',
      name: 'Marca',
      description: 'Marca del',
    })
    .addTextInput({
      path: 'modelo',
      name: 'Modelo',
      description: 'Modelo',
    })
    .addTextInput({
      path: 'ubicacion',
      name: 'Ubicación',
      description: 'Ubicación del',
    });
});
