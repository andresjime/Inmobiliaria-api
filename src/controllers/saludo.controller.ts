// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import{ get } from '@loopback/rest';

export class SaludoController {
  constructor() {}

  @get('/saludar')
  saludar():string{
    return ('Hola desde mi primer servicio rest en loopback');
  }
}
