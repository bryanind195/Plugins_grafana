import { InterpolateFunction, PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGenerador } from 'componentes/variables/variables';
import modo_controlStyles from 'styles/modoControlStyles';
import alarmasStyles from 'styles/alarmsStyles';
import estadoStyles from 'styles/estadoStyles';
import { QueryField } from '@grafana/ui';

const dataGenerador = (data: PanelData, options: SimpleOptions, replaceVariables: InterpolateFunction): DataGenerador => {
  console.log('data: ', data);
  console.log('options: ', options);
  console.log(replaceVariables)

  let OFF_MODE = data.series.find(({ name }) => name?.includes('DATA.OFF_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L1L2_VOL = data.series.find(({ name }) => name?.includes('DATA.L1L2_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L2L3_VOL = data.series.find(({ name }) => name?.includes('DATA.L2L3_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L3L1_VOL = data.series.find(({ name }) => name?.includes('DATA.L3L1_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L1N_VOL = data.series.find(({ name }) => name?.includes('DATA.L1N_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L2N_VOL = data.series.find(({ name }) => name?.includes('DATA.L2N_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L3N_VOL = data.series.find(({ name }) => name?.includes('DATA.L3N_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L1_CUR = data.series.find(({ name }) => name?.includes('DATA.L1_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
  let L2_CUR = data.series.find(({ name }) => name?.includes('DATA.L2_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
  let L3_CUR = data.series.find(({ name }) => name?.includes('DATA.L3_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
  let TOT_VA = data.series.find(({ name }) => name?.includes('DATA.TOT_VA.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
  let TOT_WATTS = data.series.find(({ name }) => name?.includes('DATA.TOT_WATTS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let FREQ = data.series.find(({ name }) => name?.includes('DATA.FREQ.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
  let FUEL_LEV = data.series.find(({ name }) => name?.includes('DATA.FUEL_LEV.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let OIL_PRESS = data.series.find(({ name }) => name?.includes('DATA.OIL_PRESS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let COOL_TEMP = data.series.find(({ name }) => name?.includes('DATA.COOL_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let ENG_BATT_VOL = data.series.find(({ name }) => name?.includes('DATA.ENG_BATT_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let ENG_RUN_TIME = data.series.find(({ name }) => name?.includes('DATA.ENG_RUN_TIME.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    /*
  let MODBUS_ST = data.series.find(({ name }) => name?.includes('DATA.MODBUS_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let WARNING_ST = data.series.find(({ name }) => name?.includes('DATA.WARNING_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let MANUAL_MODE = data.series.find(({ name }) => name?.includes('DATA.MANUAL_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let STOP_MODE = data.series.find(({ name }) => name?.includes('DATA.STOP_MODE.VALUE'))?.fields[1].state?.calcs
   ?.lastNotNull;
  let AUTO_MODE = data.series.find(({ name }) => name?.includes('DATA.AUTO_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
*/
    //-----------------------------------------------------ALARMAS----------------------------------------------------//

  /*
  let ES_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.ES_ELTRIP_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let ES_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.ES_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let ES_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.ES_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let FS_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.FS_ELTRIP_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let FS_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.FS_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let FS_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.FS_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let GHV_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.GHV_ELTRIP_ALM.VALUE'))?.fields[1].state
    ?.calcs?.lastNotNull;
  let GHV_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.GHV_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let GHV_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.GHV_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let GLV_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.GLV_ELTRIP_ALM.VALUE'))?.fields[1].state
    ?.calcs?.lastNotNull;
  let GLV_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.GLV_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let GLV_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.GLV_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let HCT_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.HCT_ELTRIP_ALM.VALUE'))?.fields[1].state
    ?.calcs?.lastNotNull;
  let HCT_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.HCT_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let HCT_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.HCT_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let LOP_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.LOP_ELTRIP_ALM.VALUE'))?.fields[1].state
    ?.calcs?.lastNotNull;
  let LOP_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.LOP_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let LOP_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.LOP_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let OS_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.OS_ELTRIP_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let OS_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.OS_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let OS_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.OS_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let US_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.US_ELTRIP_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let US_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.US_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let US_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.US_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    */

    let EMERG_STOP = data.series.find(({ name }) => name?.includes('DATA.E_STOP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let FAIL_START = data.series.find(({ name }) => name?.includes('DATA.F_START.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let HIGH_VOLTAGE = data.series.find(({ name }) => name?.includes('DATA.HV_GEN.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let LOW_VOLTAGE = data.series.find(({ name }) => name?.includes('DATA.LV_GEN.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let LOW_OIL_P = data.series.find(({ name }) => name?.includes('DATA.L_OIL_P.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let OVER_SPEED = data.series.find(({ name }) => name?.includes('DATA.O_SPEED.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let UNDER_SPEED = data.series.find(({ name }) => name?.includes('DATA.U_SPEED.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let HIGH_COOL_T = data.series.find(({ name }) => name?.includes('DATA.H_COOL_T.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let FAIL_REST = data.series.find(({ name }) => name?.includes('DATA.F_REST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let LOSS_OF_SPEED = data.series.find(({ name }) => name?.includes('DATA.LOSS_SPEED.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull; 
    let LOW_FREQ = data.series.find(({ name }) => name?.includes('DATA.LF_GEN.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let HIGH_CURRENT = data.series.find(({ name }) => name?.includes('DATA.HCUR_GEN.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
    let CONTROL_MODE = data.series.find(({ name }) => name?.includes('DATA.CONTROL_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;

  // ---------------------------------------------------------------
  let generador: DataGenerador = {

    modo_control: {
      stop_mode: modo_controlStyles.SinConexion,
      auto_mode: modo_controlStyles.SinConexion,
      manual_mode: modo_controlStyles.SinConexion,
      off_mode: modo_controlStyles.SinConexion,

    },
    alternador: {
      voltaje_ff: 0,
      corriente: 0,
      pot_kw: 0,
      pot_kva: 0,
      factor_pot: 0,

    },
    motor: {
      frecuencia: 0,
      horas_uso: 0,
      oil_press: 0,
      temp: 0,
      volt_bat: 0,
    },
    alarmas: {
      over_speed: {
        war: alarmasStyles.warn,
        sht: alarmasStyles.shut,
        trip: alarmasStyles.trip,
      },
      gen_high_volt: {
        war: alarmasStyles.warn,
        sht: alarmasStyles.shut,
        trip: alarmasStyles.trip,
      },
      low_oil_press: {
        war: alarmasStyles.warn,
        sht: alarmasStyles.shut,
        trip: alarmasStyles.trip,
      },
      high_cool_temp: {
        war: alarmasStyles.warn,
        sht: alarmasStyles.shut,
        trip: alarmasStyles.trip,
      },
      under_speed: {
        war: alarmasStyles.warn,
        sht: alarmasStyles.shut,
        trip: alarmasStyles.trip,
      },
      gen_low_volt: {
        war: alarmasStyles.warn,
        sht: alarmasStyles.shut,
        trip: alarmasStyles.trip,
      },
      fail_start: {
        war: alarmasStyles.warn,
        sht: alarmasStyles.shut,
        trip: alarmasStyles.trip,
      },
      emerg_stop: {
        war: alarmasStyles.warn,
        sht: alarmasStyles.shut,
        trip: alarmasStyles.trip,
      },
    },

    datos_generales: {
        fase: '',
        marca: '',
        modelo: '',
        sistema: '',
        ubicacion: '',
    },  
    
    datos_principales:{
      voltaje: 0, //id = tspan5844
      temp: 0, //id = tspan1960-4
      diesel: 0, //id = tspan9221
      rectan_gen: estadoStyles.sinConexion, // rectangulo id= estado_eq = g1499
      nombre_gen: '',//nombre del equipo id= tspan6769
      boton_estado: estadoStyles.sinConexion,// power id = st2
      text_estado: '',// texto id= tspan5848-3
    },    
  };


    // ------------------------INTERPOLACION DE VARIABLES-----------------------------------//
     // ------------------------------------------------------------------------------------//
    let variableNombre = replaceVariables('$EQUIPO')

     ///console.log("variableNombre", variableNombre)
     QueryField

    generador.datos_principales.nombre_gen = variableNombre !== '' ? variableNombre : options.nombre



    // ----------------------------------DATOS GENERALES------------------------------------//
    // -------------------------------------------------------------------------------------//


  generador.datos_generales.fase = options.fase

  if (variableNombre === 'GEN_1A_1' || variableNombre === 'GEN_1A_2'|| variableNombre === 'GEN_1A_3'  ) {
   generador.datos_generales.sistema = '1'
 }


 if (variableNombre === 'GEN_2A_4' || variableNombre === 'GEN_2A_5'|| variableNombre === 'GEN_2A_6'  ) {
  generador.datos_generales.sistema = '2'
}

if (variableNombre === 'GEN_1A_1' || variableNombre === 'GEN_1A_2'|| variableNombre === 'GEN_1A_3'  ) {
  generador.datos_generales.ubicacion = 'patio sist. 1'
}


if (variableNombre === 'GEN_2A_4' || variableNombre === 'GEN_2A_5'|| variableNombre === 'GEN_2A_6'  ) {
 generador.datos_generales.ubicacion = 'patio sist. 2'
}

generador.datos_generales.marca = options.marca
generador.datos_generales.modelo = options.modelo


  // -----------------------------------DATOS PRINCIPALES---------------------------------//
   // ------------------------------------------------------------------------------------//
  let corriente = (L1_CUR + L2_CUR + L3_CUR) / 3;
  if (L1_CUR !== undefined && L2_CUR !== undefined && L3_CUR !== undefined) {
    generador.alternador.corriente = Number.parseFloat(corriente.toFixed(1));
  }
  
  let factorPotencia = TOT_WATTS / TOT_VA;
  if (TOT_VA === 0) {
    factorPotencia = 0;
  }
  if (TOT_VA !== undefined && TOT_WATTS !== undefined) {
    generador.alternador.factor_pot = Number.parseFloat(factorPotencia.toFixed(1));
  }

  let potKVA = TOT_VA / 1000;
  if (TOT_VA !== undefined) {
    generador.alternador.pot_kva = Number.parseFloat(potKVA.toFixed(1));
  }

  let potKW = TOT_WATTS / 1000;
  if (TOT_WATTS !== undefined) {
    generador.alternador.pot_kw = Number.parseFloat(potKW.toFixed(1));
  }

  let voltajeFF = (L1L2_VOL + L2L3_VOL + L3L1_VOL) / 3;
  if (L1L2_VOL !== undefined && L2L3_VOL !== undefined && L3L1_VOL !== undefined) {
    generador.alternador.voltaje_ff = Number.parseFloat(voltajeFF.toFixed(1));
  }

  let voltajeLN = (L1N_VOL + L2N_VOL + L3N_VOL) / 3;
  if (L1N_VOL !== undefined && L2N_VOL !== undefined && L3N_VOL !== undefined) {
    generador.datos_principales.voltaje = Number.parseFloat(voltajeLN.toFixed(1));
  }

 
  generador.datos_principales.temp = Number.parseFloat(COOL_TEMP?.toFixed(1));
  generador.datos_principales.diesel=Number.parseFloat(FUEL_LEV?.toFixed(1));
  /* 
  generador.datos_principales.text_estado = FREQ === 1 ? 'ENCENDIDO' : 'APAGADO';
  generador.datos_principales.boton_estado = FREQ === 0 ? estadoStyles.sinConexion : estadoStyles.ok;
  generador.datos_principales.rectan_gen = FREQ === 0 ? estadoStyles.sinConexion : estadoStyles.ok;
  generador.datos_principales.text_estado = WARNING_ST === 1 || MODBUS_ST === 1 ? 'APAGADO' : 'ENCENDIDO';
  generador.datos_principales.boton_estado = WARNING_ST === 1 || MODBUS_ST === 0 ? estadoStyles.alarma : estadoStyles.ok;
  generador.datos_principales.rectan_gen = WARNING_ST === 1 || MODBUS_ST === 1 ? estadoStyles.alarma : estadoStyles.ok;
  */



  // ------------------------------------MOTOR----------------------------------------//
  // ---------------------------------------------------------------------------------//
  generador.motor.frecuencia = Number.parseFloat(FREQ?.toFixed(2));
  generador.motor.horas_uso = Number.parseFloat(ENG_RUN_TIME?.toFixed(2));
  generador.motor.oil_press = Number.parseInt(OIL_PRESS);
  generador.motor.temp = Number.parseFloat(COOL_TEMP?.toFixed(1));
  generador.motor.volt_bat = Number.parseFloat(ENG_BATT_VOL?.toFixed(2));



  // ---------------------------MODO CONTROL------------------------------------------//
  // ---------------------------------------------------------------------------------//
  generador.modo_control.manual_mode = CONTROL_MODE === 2 ? estadoStyles.ok : estadoStyles.sinConexion;
  generador.modo_control.auto_mode = CONTROL_MODE === 1 ? estadoStyles.ok : estadoStyles.sinConexion;
  generador.modo_control.stop_mode = CONTROL_MODE === 0 ? estadoStyles.ok : estadoStyles.sinConexion;
  generador.modo_control.off_mode = OFF_MODE === 7 ? estadoStyles.ok : estadoStyles.sinConexion;
  //generador.modo_control.off_mode = OFF_MODE === 7 ? modo_controlStyles.Off : modo_controlStyles.On;



  // -------------------------------------ALARMAS BOTONES------------------------------------------//
  // ---------------------------------------------------------------------------------------------//
  
  generador.alarmas.emerg_stop.war = EMERG_STOP === 2 ? alarmasStyles.warn : alarmasStyles.off;
  generador.alarmas.emerg_stop.sht = EMERG_STOP === 3 ? alarmasStyles.shut : alarmasStyles.off;
  generador.alarmas.emerg_stop.trip = EMERG_STOP === 4 ? alarmasStyles.trip : alarmasStyles.off;

  generador.alarmas.fail_start.trip = FAIL_START === 2 ? alarmasStyles.trip : alarmasStyles.off;
  generador.alarmas.fail_start.sht = FAIL_START === 3 ? alarmasStyles.shut : alarmasStyles.off;
  generador.alarmas.fail_start.war = FAIL_START === 4 ? alarmasStyles.warn : alarmasStyles.off;

  generador.alarmas.gen_high_volt.trip = HIGH_VOLTAGE === 2 ? alarmasStyles.trip : alarmasStyles.off;
  generador.alarmas.gen_high_volt.sht = HIGH_VOLTAGE === 3 ? alarmasStyles.shut : alarmasStyles.off;
  generador.alarmas.gen_high_volt.war = HIGH_VOLTAGE === 4 ? alarmasStyles.warn : alarmasStyles.off;

  generador.alarmas.gen_low_volt.trip = LOW_VOLTAGE === 2 ? alarmasStyles.trip : alarmasStyles.off;
  generador.alarmas.gen_low_volt.sht = LOW_VOLTAGE === 3 ? alarmasStyles.shut : alarmasStyles.off;
  generador.alarmas.gen_low_volt.war = LOW_VOLTAGE === 4 ? alarmasStyles.warn : alarmasStyles.off;
  
  generador.alarmas.low_oil_press.trip = LOW_OIL_P === 2 ? alarmasStyles.trip : alarmasStyles.off;
  generador.alarmas.low_oil_press.sht = LOW_OIL_P === 3 ? alarmasStyles.shut : alarmasStyles.off;
  generador.alarmas.low_oil_press.war = LOW_OIL_P === 4 ? alarmasStyles.warn : alarmasStyles.off;

  generador.alarmas.over_speed.trip = OVER_SPEED === 2 ? alarmasStyles.trip : alarmasStyles.off;
  generador.alarmas.over_speed.sht = OVER_SPEED === 3 ? alarmasStyles.shut : alarmasStyles.off;
  generador.alarmas.over_speed.war = OVER_SPEED === 4 ? alarmasStyles.warn : alarmasStyles.off;

  generador.alarmas.under_speed.trip = UNDER_SPEED === 2 ? alarmasStyles.trip : alarmasStyles.off;
  generador.alarmas.under_speed.sht = UNDER_SPEED === 3 ? alarmasStyles.shut : alarmasStyles.off;
  generador.alarmas.under_speed.war = UNDER_SPEED === 4 ? alarmasStyles.warn : alarmasStyles.off;

  generador.alarmas.high_cool_temp.trip = HIGH_COOL_T === 2 ? alarmasStyles.trip : alarmasStyles.off;
  generador.alarmas.high_cool_temp.sht = HIGH_COOL_T === 3 ? alarmasStyles.shut : alarmasStyles.off;
  generador.alarmas.high_cool_temp.war = HIGH_COOL_T === 4 ? alarmasStyles.warn : alarmasStyles.off;



  // ----------------------------------ALARMA GENERAL---------------------------------------------//
  // ---------------------------------------------------------------------------------------------//
 
if (EMERG_STOP === 2||FAIL_START === 2 || HIGH_VOLTAGE === 2 || LOW_VOLTAGE === 2 || LOW_OIL_P === 2 ||OVER_SPEED === 2 || UNDER_SPEED === 2 || HIGH_COOL_T === 2 || FAIL_REST === 2 || LOSS_OF_SPEED === 2 || LOW_FREQ === 2 ||HIGH_CURRENT === 2 || EMERG_STOP === 3 ||FAIL_START === 3 || HIGH_VOLTAGE === 3 || LOW_VOLTAGE === 3 || LOW_OIL_P === 3 ||OVER_SPEED === 3 || UNDER_SPEED === 3 || HIGH_COOL_T === 3 || FAIL_REST === 3 || LOSS_OF_SPEED === 3 || LOW_FREQ === 3 ||HIGH_CURRENT === 3 || EMERG_STOP === 4 ||FAIL_START === 4 || HIGH_VOLTAGE === 4 || LOW_VOLTAGE === 4 || LOW_OIL_P === 4 ||OVER_SPEED === 4 || UNDER_SPEED === 4 || HIGH_COOL_T === 4 || FAIL_REST === 4 || LOSS_OF_SPEED === 4 || LOW_FREQ === 4 ||HIGH_CURRENT === 4 )
{
  generador.datos_principales.rectan_gen = estadoStyles.alarma,
  generador.datos_principales.boton_estado = estadoStyles.alarma,
  generador.datos_principales.text_estado = 'ALARMADO'
  
} 
else{(generador.datos_principales.rectan_gen = FREQ === 0 ? estadoStyles.sinConexion : estadoStyles.ok ,generador.datos_principales.boton_estado = FREQ === 0 ? estadoStyles.sinConexion : estadoStyles.ok, generador.datos_principales.text_estado = FREQ === 0 ? 'APAGADO' : 'ENCENDIDO')}
  

  console.log(generador);

  return generador;
};

export default dataGenerador;
