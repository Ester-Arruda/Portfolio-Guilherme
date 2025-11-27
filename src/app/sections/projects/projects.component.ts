import { Component, OnInit, OnDestroy } from '@angular/core';

type ProjectKey = 'aves' | 'pokedex' | 'todo';

interface Project {
  key: ProjectKey;
  title: string;
  description: string;
  techs: string[];
  github: string;
  slides: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Project[] = [
    {
      key: 'aves',
      title: 'Sistema de Registro de Aves',
      description: 'Aplicação completa com login, cadastro de aves, avistamentos, catálogo e detalhamento.',
      techs: ['Spring Boot', 'Java', 'PostgreSQL', 'React', 'TypeScript', 'CSS'],
      github: 'https://github.com/GuilhermeVaz/projeto_uniasselvi',
      slides: [
        'assets/images/projects/avistamentoAves/login.png',
        'assets/images/projects/avistamentoAves/home.png',
        'assets/images/projects/avistamentoAves/cadastrar_ave.png',
        'assets/images/projects/avistamentoAves/cadastrar_avistamento.png',
        'assets/images/projects/avistamentoAves/listagem_aves.png',
        'assets/images/projects/avistamentoAves/catalogo_aves.png',
        'assets/images/projects/avistamentoAves/detalhamento_ave.png',
        'assets/images/projects/avistamentoAves/detalhamento_avistamentos.png'
      ]
    },
    {
      key: 'pokedex',
      title: 'Pokedex',
      description: 'Listagem, busca e detalhe de Pokémons com filtros e interface responsiva.',
      techs: ['Angular', 'TypeScript', 'SCSS', 'Jasmine', 'Karma'],
      github: 'https://github.com/GuilhermeVaz/Filter_Pokemon_Angular',
      slides: [
        'assets/images/projects/pokedex/listar_todos.png',
        'assets/images/projects/pokedex/visualizar_detalhes.png',
        'assets/images/projects/pokedex/filtrar_nome.png'
      ]
    },
    {
      key: 'todo',
      title: 'Lista de Tarefas',
      description: 'App para adicionar, concluir e deletar tarefas com UI simples.',
      techs: ['Angular', 'TypeScript', 'SCSS'],
      github: 'https://github.com/GuilhermeVaz/app_task_angular',
      slides: [
        'assets/images/projects/listaTarefas/listar_tarefas.png',
        'assets/images/projects/listaTarefas/adicionar_tarefa.png',
        'assets/images/projects/listaTarefas/concluir_deletar_tarefas.png'
      ]
    }
  ];

  currentIndex: Record<ProjectKey, number> = { aves: 0, pokedex: 0, todo: 0 };

  private autoplayInterval: any = null;
  autoplay = true;
  autoplayDelay = 3000;

  ngOnInit(): void {
    if (this.autoplay) {
      this.startAutoplay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  prevSlide(key: ProjectKey) {
    const len = this.getSlides(key).length;
    this.currentIndex[key] = (this.currentIndex[key] - 1 + len) % len;
  }

  nextSlide(key: ProjectKey) {
    const len = this.getSlides(key).length;
    this.currentIndex[key] = (this.currentIndex[key] + 1) % len;
  }

  goToSlide(key: ProjectKey, index: number) {
    this.currentIndex[key] = index;
  }

  getSlides(key: ProjectKey): string[] {
    return this.projects.find(p => p.key === key)?.slides ?? [];
  }

  getProjectByKey(key: ProjectKey) {
    return this.projects.find(p => p.key === key)!;
  }

  startAutoplay() {
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => {
      this.projects.forEach(p => this.nextSlide(p.key));
    }, this.autoplayDelay);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  trackByIndex(index: number): number {
    return index;
  }
}
