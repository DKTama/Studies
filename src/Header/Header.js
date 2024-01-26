/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// src/MeuBotao.js
import React from 'react';
import './Header.css';
import smallLeft from '../assets/icons/small-left.png';
import smallRight from '../assets/icons/small-right.png';
import search from '../assets/icons/search.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import card1 from '../assets/playlist/1.jpeg';
import card2 from '../assets/playlist/2.png';
import card3 from '../assets/playlist/3.jpeg';
import card4 from '../assets/playlist/4.jpeg';
import card5 from '../assets/playlist/5.jpeg';
import card6 from '../assets/playlist/6.jpeg';
import card7 from '../assets/playlist/7.jpeg';
import card8 from '../assets/playlist/8.jpeg';
import card9 from '../assets/playlist/9.jpeg';
import card10 from '../assets/playlist/10.jpeg';
import card11 from '../assets/playlist/11.jpeg';
import card12 from '../assets/playlist/12.jpeg';
import card13 from '../assets/playlist/13.jpeg';
import card14 from '../assets/playlist/14.jpeg';
import card15 from '../assets/playlist/15.jpeg';
import card16 from '../assets/playlist/16.jpg';
import card17 from '../assets/playlist/17.jpg';
import card18 from '../assets/playlist/18.jpg';
import card19 from '../assets/playlist/19.jpg';
import card20 from '../assets/playlist/20.jpg';



const Header = () => {
  return (
    <><div class="main-container">
          <nav className="header__navigation">
              <div className="navigation">
                  <button className="arrow-left">
                      <img src={smallLeft} alt="" />
                  </button>
                  <button className="arrow-right">
                      <img src={smallRight} alt="" />
                  </button>

                  <button className="header__search">
                      <img src={search} alt="" />
                      <input
                          maxLength="800"
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellCheck="false"
                          placeholder="O que você quer ouvir?"
                          value="" />
                  </button>
                </div>

              <div className="header__login">
                  <button className="subscribe">Inscreva-se</button>
                  <button className="login">Entrar</button>
              </div>
          </nav>
      
          {/* PLAYLIST */}
          <div class="playlist-container">
              <div id="result-playlists">
                  <div class="playlist">
                      <h2 class="session">Navegar por todas as seções</h2>
                  </div>

                  {/*LIST ITEM 1*/}
                  <div class="offer__scroll-container">
                      <div class="offer__list">
                          <section class="offer__list-item">
                              {/* CARD 1 */}
                              <a href="" class="cards">
                                  <div class="cards card1">
                                      <img src={card1} alt="" />
                                      <span>Boas festas</span>
                                  </div>
                              </a>

                              {/* CARD 2 */}
                              <a href="" class="cards">
                                  <div class="cards card2">
                                      <img src={card2} alt="" />
                                      <span>Feitos para você</span>
                                  </div>
                              </a>

                              {/* CARD 3 */}
                              <a href="" class="cards">
                                  <div class="cards card3">
                                      <img src={card3} alt="" />
                                      <span>Lançamentos</span>
                                  </div>
                              </a>

                              {/* CARD 4 */}
                              <a href="" class="cards">
                                  <div class="cards card4">
                                      <img src={card4} alt="" />
                                      <span>Creators</span>
                                  </div>
                              </a>

                              {/* CARD 5 */}
                              <a href="" class="cards">
                                  <div class="cards card5">
                                      <img src={card5} alt="" />
                                      <span>Para treinar</span>
                                  </div>
                              </a>

                              {/* CARD 6 */}
                              <a href="" class="cards">
                                  <div class="cards card6">
                                      <img src={card6} alt="" />
                                      <span>Podcasts</span>
                                  </div>
                              </a>

                              {/* CARD 7 */}
                              <a href="" class="cards">
                                  <div class="cards card7">
                                      <img src={card7} alt="" />
                                      <span>Sertanejo</span>
                                  </div>
                              </a>

                              {/* CARD 8 */}
                              <a href="" class="cards">
                                  <div class="cards card8">
                                      <img src={card8} alt="" />
                                      <span>Samba e pagode</span>
                                  </div>
                              </a>

                              {/* CARD 9 */}
                              <a href="" class="cards">
                                  <div class="cards card9">
                                      <img src={card9} alt="" />
                                      <span>Funk</span>
                                  </div>
                              </a>

                              {/* CARD 10 */}
                              <a href="" class="cards">
                                  <div class="cards card10">
                                      <img src={card10} alt="" />
                                      <span>MPB</span>
                                  </div>
                              </a>

                              {/* CARD 11 */}
                              <a href="" class="cards">
                                  <div class="cards card11">
                                      <img src={card11} alt="" />
                                      <span>Rock</span>
                                  </div>
                              </a>

                              {/* CARD 12 */}
                              <a href="" class="cards">
                                  <div class="cards card12">
                                      <img src={card12} alt="" />
                                      <span>Hip Hop</span>
                                  </div>
                              </a>

                              {/* CARD 13 */}
                              <a href="" class="cards">
                                  <div class="cards card13">
                                      <img src={card13} alt="" />
                                      <span>Indie</span>
                                  </div>
                              </a>

                              {/* CARD 14 */}
                              <a href="" class="cards">
                                  <div class="cards card14">
                                      <img src={card14} alt="" />
                                      <span>Relax</span>
                                  </div>
                              </a>

                              {/* CARD 15 */}
                              <a href="" class="cards">
                                  <div class="cards card15">
                                      <img src={card15} alt="" />
                                      <span>Música Latina</span>
                                  </div>
                              </a>

                              {/* CARD 16 */}
                              <a href="" class="cards">
                                  <div class="cards card16">
                                      <img src={card16} alt="" />
                                      <span>90s Animes</span>
                                  </div>
                              </a>

                              {/* CARD 17 */}
                              <a href="" class="cards">
                                  <div class="cards card17">
                                      <img src={card17} alt="" />
                                      <span>Eurobeat</span>
                                  </div>
                              </a>

                              {/* CARD 18 */}
                              <a href="" class="cards">
                                  <div class="cards card18">
                                      <img src={card18} alt="" />
                                      <span>Synthwave</span>
                                  </div>
                              </a>

                              {/* CARD 19 */}
                              <a href="" class="cards">
                                  <div class="cards card19">
                                      <img src={card19} alt="" />
                                      <span>Rock'n Roll</span>
                                  </div>
                              </a>

                              {/* CARD 20 */}
                              <a href="" class="cards">
                                  <div class="cards card20">
                                      <img src={card20} alt="" />
                                      <span>Músicas que não saem da sua cabeça</span>
                                  </div>
                              </a>


                          </section>
                      </div>
                  </div>
              </div>


              <div id="result-artist" class="hidden">
                  <div class="grid-container">
                      <div class="artist-card" id="">
                          <div class="card-img">
                              <img id="artist-img" class="artist-img" />
                              <div class="play">
                                  <span class="fa fa-solid"><FontAwesomeIcon icon={faPlay} /></span>
                              </div>
                          </div>
                          <div class="card-text">
                              <a title="Foo Fighters" class="vst" href=""></a>
                              <span class="artist-name" id="artist-name"></span>
                              <span class="artist-categorie">Artista</span>

                          </div>
                      </div>
                  </div>
              </div>
              </div>

          </div></>



  );
};

export default Header;