import { Component } from '@angular/core';

interface Experience {
  image: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experiences: Experience[] = [
    {
      image: 'assets/images/experience/sicredi.png',
      role: 'Software Engineer I',
      company: 'Sicredi · Tempo integral',
      period: 'Out 2023 – Atual',
      description: 
        'Desenvolvimento de software de análise e gerenciamento de testes de performance, ' +
        'aplicando arquitetura de Micro Frontends com Angular e React. ' +
        'Criação de testes unitários (Jasmine, Jest) e prototipagem no Figma.',
      tags: ['Angular', 'React', 'TypeScript', 'Jasmine', 'Jest', 'Figma']
    },
    {
      image: 'assets/images/experience/sicredi.png',
      role: 'Estagiário de TI',
      company: 'Sicredi · Estágio',
      period: 'Jul 2022 – Out 2023',
      description: 
        'Participação em múltiplos projetos internos, incluindo o desenvolvimento de aplicações web ' +
        'com Angular e React, integração com APIs REST e autenticação com OAuth2/OIDC. ' +
        'Atuação em bootcamps e projetos de formação com a PUC-RS.',
      tags: ['Angular', 'React', 'Spring Boot', 'OAuth2', 'TypeScript', 'Java']
    },
    {
      image: 'assets/images/experience/tmsa.png',
      role: 'Projetista',
      company: 'TMSA · Tempo integral',
      period: 'Out 2021 – Ago 2022',
      description:
        'Desenvolvimento de projetos mecânicos industriais, com foco em melhoria contínua, ' +
        'automação de processos e detalhamento técnico em CAD. ' +
        'Responsável pela interface entre engenharia e produção.',
      tags: ['AutoCAD', 'Inventor', 'Projetos Mecânicos']
    },
    {
      image: 'assets/images/experience/ufrgs.png',
      role: 'Bolsista de TI',
      company: 'UFRGS · Meio período',
      period: 'Out 2021 – Jan 2022',
      description:
        'Suporte técnico e manutenção de equipamentos de informática. ' +
        'Configuração de redes e assistência a usuários na área de TI. ' +
        'Instalação de softwares nos sistemas operacionais Linux e Windows.',
      tags: ['Manutenção', 'Hardware', 'Redes', 'Linux', 'Windows']
    }
  ];

}
