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


        <a className=" btn-offcanvas" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
           aria-controls="offcanvasExample">
            Accueil
        </a>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample"
             aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
            </div>
            <div className="offcanvas-body sidebar">
                <div className='logo d-flex justify-content-between'>
                    <a className='large_logo' href='/dashboard'>
                        <img src='img/paresseux_sous_officiel.png' alt='' />
                    </a>
                    <div className='sidebar_close_icon d-lg-none'>
                        <i className='ti-close'></i>
                    </div>
                </div>
                <div className="dropdown mt-3">
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
                                        <div className='nav_icon_small'>
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
                                                    <li className='list-group-item' key={index}>
                                                        <a href={subItem.link}>
                                                            {subItem.title}{' '}
                                                            {!!subItem.beta && (
                                                                <span className='badge badge-info'>Bêta</span>
                                                            )}
                                                        </a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};
