import React from 'react';
import {Link,withRouter} from 'react-router-dom';

const Navbar = (props) =>{
//   setTimeout(()=>{            // programatically redirecting to a page
//         props.history.push('/About')
//     },2000) // 2000 ms = 2s
    return(
        <nav className = "nav-wrapper black darken-3">
            <div className ="container">
                <Link to = '/' className ="brand-logo"  > PROJECT 2</Link>
                <ul className = "right">
                    <li><Link to  = '/'>HOME</Link></li> {/*links are used instead of <a> tag so that page doest refreshes and all the request can be handled by th react router dom */}
                    <li><Link to  = "/Contact">Contact</Link></li>
                    <li><Link to  = "/About">About</Link></li>

                </ul>
            </div>
        </nav>
    )

}
export default withRouter (Navbar) // we used withRouter because navlink is not in Browserrouter in app.js this called high order component