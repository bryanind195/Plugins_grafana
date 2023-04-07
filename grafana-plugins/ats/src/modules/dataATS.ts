import { InterpolateFunction, PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataAts } from 'components/variables/variables';
//import alarmaStyles from 'styles/alarmsStyles';
import estadoStyles from 'styles/estadoStyles';



const DataATS = (data: PanelData, options: SimpleOptions,replaceVariables: InterpolateFunction): DataAts => {
  console.log(replaceVariables)
  console.log(options)
  console.log(data)

  //------------------------------------ASIGNACION DE VARIABLES-------------------------------//  

  let AUT_TRANS_REL = data.series.find(({ name }) => name?.includes('DATA.AUT_TRANS_REL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let F1_AVAIL = data.series.find(({ name }) => name?.includes('DATA.F1_AVAIL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let F1_POSIC= data.series.find(({ name }) => name?.includes('DATA.F1_POSIC.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let F2_AVAIL= data.series.find(({ name }) => name?.includes('DATA.F2_AVAIL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let F2_POSIC = data.series.find(({ name }) => name?.includes('DATA.F2_POSIC.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let MODBUS_ST = data.series.find(({ name }) => name?.includes('DATA.MODBUS_ST.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let NOT_IN_AUTO = data.series.find(({ name }) => name?.includes('DATA.NOT_IN_AUTO.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let TOT_FAULT = data.series.find(({ name }) => name?.includes('DATA.TOT_FAULT.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let TOT_TRANS_F1 = data.series.find(({ name }) => name?.includes('DATA.TOT_TRANS_F1.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let TOT_TRANS_F2 = data.series.find(({ name }) => name?.includes('DATA.TOT_TRANS_F2.VALUE'))?.fields[1].state?.calcs?.lastNotNull

   
  //-------------------------------------------------------------------------------------------//
  
  let ats: DataAts = {

    estados: {
      est_equipo: '',
      pres_f1: '',
      pres_f2:'',
      pos_f1: '',
      pos_f2: '',
      transf_f1: 0,
      transf_f2: 0,
      volt_f1: 0,
      volt_f2: 0
    },
    botones_alarmas:{
      rele_trans_auto: estadoStyles.sinConexion,
      falla_auto: estadoStyles.sinConexion,
      pos_f1: estadoStyles.sinConexion,
      pos_f2: estadoStyles.sinConexion,
      red_modbus: estadoStyles.sinConexion,
    },
    datos_generales: {
      fase: '',
      marca: '',
      modelo: '',
      sistema: '',
      ubicacion: ''
    },
    datos_principales: {

      volt_f1: 0,
      volt_f2: 0,
      total_transf: 0,
      boton_ats: estadoStyles.sinConexion,
      nombre_ats:'',
      boton_estado: estadoStyles.sinConexion,
      text_estado: '',
    }
}

  // ------------------------INTERPOLACION DE VARIABLES-------------
  let variableNombre = replaceVariables('$EQUIPO')

  ///console.log("variableNombre", variableNombre)

  ats.datos_principales.nombre_ats = variableNombre !== '' ? variableNombre : options.nombre

  // --------------------------ESTADOS----------------------------------//
  
  ats.estados.est_equipo = AUT_TRANS_REL === 1? 'OFF':'ON' 
  ats.estados.pres_f1 = F1_AVAIL === 0? 'OFF': 'ON'
  ats.estados.pres_f2 = F2_AVAIL ===0? 'OFF': 'ON'
  ats.estados.pos_f1 =  F1_POSIC ===0? 'OFF': 'ON'
  ats.estados.pos_f2 = F2_POSIC ===0? 'OFF': 'ON'
  ats.estados.transf_f1= Number.parseFloat(TOT_TRANS_F1?.toFixed(2));
  ats.estados.transf_f2 =Number.parseFloat(TOT_TRANS_F2?.toFixed(2));
  //ats.estados.volt_f1 = Number.parseFloat(?.toFixed(2));
  //ats.estados.volt_f2 =  Number.parseFloat(?.toFixed(2));
  
  // --------------------------DATOS GENERALES-------------------------//

  
  ats.datos_generales.fase = options.fase
  ats.datos_generales.sistema = options.sistema
  ats.datos_generales.marca = options.marca
  ats.datos_generales.modelo = options.modelo
  ats.datos_generales.ubicacion = options.ubicacion

  // ----------------------BOTONES ALARMAS------------------------------//

  ats.botones_alarmas.rele_trans_auto = AUT_TRANS_REL === 1 ? estadoStyles.alarma: estadoStyles.sinConexion
  ats.botones_alarmas.falla_auto = NOT_IN_AUTO === 1 ? estadoStyles.alarma: estadoStyles.sinConexion
  ats.botones_alarmas.pos_f1 = F1_POSIC === 1 ? estadoStyles.ok: estadoStyles.sinConexion
  ats.botones_alarmas.pos_f2 = F2_POSIC === 1 ? estadoStyles.alarma: estadoStyles.sinConexion
  ats.botones_alarmas.red_modbus= MODBUS_ST === 1 ? estadoStyles.alarma: estadoStyles.ok
   
  
  // ---------------------- DATOS PRINCIPALES---------------------------//

  ats.datos_principales.volt_f1 =Number.parseFloat(TOT_TRANS_F1?.toFixed(2));
  ats.datos_principales.volt_f2= Number.parseFloat(TOT_TRANS_F2?.toFixed(2));
  //ats.datos_principales.nombre_ats= options.nombre
  ats.datos_principales.total_transf = Number.parseFloat(TOT_FAULT?.toFixed(2));
  ats.datos_principales.boton_estado = F1_POSIC === 0? estadoStyles.sinConexion : estadoStyles.ok;
  ats.datos_principales.boton_ats= F1_POSIC === 0? estadoStyles.sinConexion : estadoStyles.ok;
  ats.datos_principales.text_estado = F1_POSIC === 0? 'DESCONECT':'ENCENDIDO'
   
  return ats
}

export default DataATS

