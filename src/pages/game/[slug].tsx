import Game, { GameTemplateProps } from 'templates/Game';

import galleryMock from 'components/Gallery/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />;
}

// como é estatico, precisa gerar em build time as rotas
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false, // Se não tiver sido feita em build time, ele vai gerar a pagina de erro
  };
}

const descriptionHTML = `
<img src="https://items.gog.com/not_a_cp/ENG_product-page-addons-2020_yellow_on_black.png"><br>
* Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams will be available in English only.
<hr><p class="module">Korean Voiceover will be added on 11th December 2020.</p><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-About-the-Game.png"><br><br><b>Cyberpunk 2077</b> is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.
<br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Mercenary-Outlaw.png"><br><br>
Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.
<br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-City-of-the-Future.png"><br><br>
Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth.
<br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Eternal-Life.png"><br><br>
Take the riskiest job of your life and go after a prototype implant that is the key to immortality.


<p class="description__copyrights">
CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
respective owners.
</p>`;

export function getStaticProps() {
  return {
    props: {
      cover:
        'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg',
      gameInfo: {
        title: 'Cyberpunk 2077',
        price: '59.00',
        description:
          'Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt. Lançado em 10 de dezembro de 2020 para Google Stadia, Microsoft Windows, PlayStation 4 e Xbox One, e previsto para 2021 para PlayStation 5 e Xbox Series X/S, sendo que nesses já está disponível via retrocompatibilidade. A história do jogo é ambientada em Night City, um mundo aberto com seis regiões distintas situado no universo da franquia Cyberpunk. Ele é jogado a partir de uma perspectiva em primeira pessoa, com os jogadores controlando um mercenário personalizável conhecido como V, que pode adquirir habilidades de hacking e maquinários, um arsenal de armas de longo alcance e opções de combate no estilo corpo a corpo.',
      },
      gallery: galleryMock,
      description: { content: descriptionHTML, title: 'Description' },
      details: {
        developer: 'CD PROJEKT RED',
        releaseDate: '2020-12-10T23:00:00',
        platforms: ['windows'],
        publisher: 'CD PROJEKT RED',
        rating: 'BR18',
        genres: ['Action', 'Role-playing'],
      },
      upcommingGames: gamesMock,
      upcommingHighlight: highlightMock,
      recommendedGames: gamesMock,
    },
  };
}
