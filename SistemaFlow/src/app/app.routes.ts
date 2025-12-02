import { Routes } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { Fluxo } from './pages/fluxo/fluxo';
import { TaktTime } from './pages/takt-time/takt-time';
import { Maquinas } from './pages/maquinas/maquinas';
import { Materiais } from './pages/materiais/materiais';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: 'fluxo',
        component: Fluxo
    },
    {
        path: 'taktTime',
        component: TaktTime,
    },
    {
        path: 'maquinas',
        component: Maquinas,
    },
    {
        path: 'materiais',
        component: Materiais
    },
    {
        path: '',
        component: Login
    }
];
