import React, { useState} from 'react';
import './Header.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

type MenuType = {
    name:string;
    id:string;
    linkTo:string;
}
const Header:React.FC= () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const headerList:MenuType[] = [
        {
            name:'About Me',
            id:'101',
            linkTo:'about'
        },
        {
            name:'Skills',
            id:'102',
            linkTo:'skills'
        },
        {
            name:'Experience',
            id:'103',
            linkTo:'experience'
        },
        {
            name:'Contact',
            id:'104',
            linkTo:'contact'
        },

     ]

     const[active, setActive] = useState(headerList[0].id);

     const onClickHander = ( id:string) =>{
        setActive(id);
     }
    return (
        <header className="header">
            <h2 className="header-title">Ravi Kumar Rana </h2>
            <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    {
                        headerList.map((header)=> (
                            <li key={header.id} className={`${header.id === active ? 'active' : ''}`} onClick={()=>onClickHander(header.id)}><a href={`#${header.linkTo}`}>{header.name}</a></li>
                        ))
                    }
                    {/* <li><a href="/services">Projects</a></li> */}
                    {/* <li><a href="/services">Awards</a></li> */}
                </ul>
            </nav>
            <button>
                <a href="public/resume.pdf" target='_blank'><span>Resume <FontAwesomeIcon icon={faUpRightFromSquare} size='1x' /> </span> </a>
                
            </button>
            <button className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? 'Close' : 'Menu'}
            </button>
        </header>
    );
};

export default Header;
