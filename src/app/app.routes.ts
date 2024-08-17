import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: ()=> import('./domains/shared/pages/layout/layout.component').then(component=>component.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: ()=> import('./domains/info/pages/home/home.component').then(component=>component.HomeComponent)
      },
      {
        path: 'project/:id',
        loadComponent: ()=> import('./domains/artefacts/pages/layout-aside/layout-aside.component').then(component=>component.LayoutAsideComponent),
        children: [
          {
            path: 'lean-ux-canvas',
            loadComponent: ()=> import('./domains/artefacts/pages/lean-ux-canvas/lean-ux-canvas.component').then(component=>component.LeanUxCanvasComponent)
          },
          {
            path: 'segmentos-objetivos',
            loadComponent: ()=> import('./domains/artefacts/pages/segmentos-objetivos/segmentos-objetivos.component').then(component=>component.SegmentosObjetivosComponent)
          },
          {
            path: 'user-personas',
            loadComponent: ()=> import('./domains/artefacts/pages/user-personas/user-personas.component').then(component=>component.UserPersonasComponent)
          },
          {
            path: 'user-task-matrix',
            loadComponent: ()=> import('./domains/artefacts/pages/user-task-matrix/user-task-matrix.component').then(component=>component.UserTaskMatrixComponent)
          },
          {
            path: 'user-journey-map',
            loadComponent: ()=> import('./domains/artefacts/pages/user-journey-map/user-journey-map.component').then(component=>component.UserJourneyMapComponent)
          },
          {
            path: 'empathy-map',
            loadComponent: ()=> import('./domains/artefacts/pages/empathy-map/empathy-map.component').then(component=>component.EmpathyMapComponent)
          },
          {
            path: 'product-backlog',
            loadComponent: ()=> import('./domains/artefacts/pages/product-backlog/product-backlog.component').then(component=>component.ProductBacklogComponent)
          },
          {
            path: 'sprint-backlog',
            loadComponent: ()=> import('./domains/artefacts/pages/sprint-backlog/sprint-backlog.component').then(component=>component.SprintBacklogComponent)
          },
          {
            path: 'boards',
            loadComponent: ()=> import('./domains/artefacts/pages/boards/boards.component').then(component=>component.BoardsComponent)
          }
        ]
      }
    ]
  },
  {
    path: '**',
    loadComponent: ()=> import('./domains/info/pages/not-found/not-found.component').then(component=>component.NotFoundComponent)
  }
];
