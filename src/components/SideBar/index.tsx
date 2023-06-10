import { useState } from 'react';
import 'react-bootstrap/Alert';
import 'react-bootstrap/Button';
import 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { SIDEBAR_DATA } from '../../data/sidebar';

import './sidebar.css';

export const SideBar = () => {
  const [indexActive, setIndexActive] = useState<null | number>(null);

  const handleSelectItem = (index: number) => {
    setIndexActive((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <a
        className=' btn-offcanvas'
        data-bs-toggle='offcanvas'
        href='#offcanvasExample'
        role='button'
        aria-controls='offcanvasExample'
      >
        Accueil
      </a>
      <nav
        className='offcanvas offcanvas-start sidebar'
        tabIndex={-1}
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'
      >
        <div className='logo d-flex justify-content-between'>
          <a className='large_logo' href='/dashboard'>
            <img src='img/paresseux_sous_officiel.png' alt='' />
          </a>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <ul id='sidebar_menu'>
          {SIDEBAR_DATA.map((item, kIndex) => {
            return (
              <li className='' key={kIndex}>
                <a
                  className='has-arrow'
                  href='#'
                  aria-expanded='false'
                  onClick={() => {
                    handleSelectItem(kIndex);
                  }}
                >
                  <div className='nav_icon_small icon_anim'>
                    <img src={item.img} alt='' />
                  </div>
                  <div className='nav_title'>
                    <span>{item.title}</span>
                  </div>
                </a>
                <div
                  className={`list-group sub-menu ${
                    indexActive === kIndex ? 'open' : ''
                  }`}
                >
                  <ul className='list-group'>
                    {item.subMenu?.map((subItem, index) => {
                      return (
                        <li key={index}>
                          <a href={subItem.link}>{subItem.title} </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
          <li className=''>
            <a
              className='has-arrow'
              href='#'
              aria-expanded='false'
              onClick={() => handleSelectItem(99)}
            >
              <div className='nav_icon_small icon_anim'>
                <img
                  src='img/menu-icon/reglage.png'
                  // style='height: 35px; width: 35px;'
                  className='img-fluid '
                  alt='img remarque'
                />
              </div>
              <div className='nav_title'>
                <span>Réglages</span>
              </div>
            </a>
            <div
              className={`list-group sub-menu ${
                indexActive === 99 ? 'open' : ''
              }`}
            >
              <ul className='list-group'>
                <div className='profile_info_details'>
                  <li>
                    <a href='/profile'>Mon Profil </a>
                  </li>
                  <li>
                    <a href='#'>Réglage</a>
                  </li>
                  <li>
                    <a href='/deconnexion'>Déconnexion </a>
                  </li>
                </div>
              </ul>
            </div>
            <div className='profile_info_details'>
              <a
                href='/deconnexion'
                className='btn btn-danger side-deconnexion text-center text-dark'
              >
                Déconnexion{' '}
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
