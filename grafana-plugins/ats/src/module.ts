import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'nombre',
      name: 'Nombre',
      description: 'Nombre de ats',
    })
    .addTextInput({
      path: 'fase',
      name: 'Fase',
      description: 'Fase donde esta el ats',
    })
    .addTextInput({
      path: 'sistema',
      name: 'Sistema',
      description: 'Sistema donde esta el ats',
    })
    .addTextInput({
      path: 'marca',
      name: 'Marca',
      description: 'Marca del ats',
    })
    .addTextInput({
      path: 'modelo',
      name: 'Modelo',
      description: 'Modelo del ats',
    })
    .addTextInput({
      path: 'ubicacion',
      name: 'Ubicación',
      description: 'Ubicación del ats',
    });
    
});
