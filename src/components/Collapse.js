import { createRef, useState } from 'react';

function CollapseUl({ content }) {
    return (
        <ul> 
        {content.map((item, index) => {
                        return (
                           <li key={index}>{item}</li>
                        )       
                    })}
        </ul>
    )
}

/**
 * A partir d'un titre et d'un contenu retourne une balise div avec un titre et un contenu.
 * Si le contenu est un tableau alors énumère les éléments dans une liste.
 * Si le contenu n'est pas un tableau alors il s'affiche dans une balise p
 * Selon le clique, la fleche du titre se retourne et le contenu apparait grâce au changement de classe.
 *
 * @param {*} param0 
 * @returns 
 */
function Collapse({title, content}) {
   //Definie la valeur false à l'objet toggle puis retourne son contraire au clique sur le titre 
    const [toggle, setToggle] = useState({ height: 0, opacity: 0});
    const [active, setActive] = useState(false)
    const collapse = createRef();

	const setCollapse = () => {

        if (!active) {
            setToggle({ height: collapse.current.scrollHeight, opacity: 1 })
            setActive(true)

        } else {
            setToggle({ height: 0 })
            setActive(false)
        }

	};

    return (
            <div className="collapse" >
                <h3 className='collapse_title' onClick={() => setCollapse()}>
                    {title}
                    <img 
                        className={active ? 'arrow arrow-up' : 'arrow arrow-down'} 
                        src="/images/arrow.png" 
                        alt="show content" 
                    />
                </h3>
              
                <div className='collapse_content'
                style={toggle}
                     ref={collapse}
                    >
                    {Array.isArray(content) ? <CollapseUl content={ content }/> : <p>{content}</p>
                    }
                </div> 
            </div>
    )
}

export default Collapse