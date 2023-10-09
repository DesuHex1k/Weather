import React from 'react'
import cl from '../MyModal/MyModal.module.css'

function MyModal({children, visible, setvisible}) {

    const rootclasses = [cl.myModal]

    if(visible) {
        rootclasses.push(cl.active);
    }

    return ( 
    <div className={rootclasses.join(' ')} onClick={() => setvisible(false)}>
        <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div> );
}

export default MyModal;