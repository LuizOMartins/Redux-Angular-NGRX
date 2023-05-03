import { ActionReducerMap } from '@ngrx/store';
import { UsuariosState, usuariosReducer } from './usuarios.reducer';
import { UsuariosEffects } from './usuarios.effects';

export interface AppState {
  usuarios: UsuariosState;
}

export const appReducer: ActionReducerMap<AppState> = {
  usuarios: usuariosReducer,
};

export const appEffects = [UsuariosEffects];
