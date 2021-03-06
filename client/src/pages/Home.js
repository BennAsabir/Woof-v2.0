import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/Home.css';
import OwnerWalkerForm from '../components/OwnerWalkerForm';
import WalkerLoginForm from '../components/WalkerLoginForm';
import WalkerSignupForm from '../components/WalkerSignupForm';
import OwnerLoginForm from '../components/OwnerLoginForm';
import OwnerSignupForm from '../components/OwnerSignupForm';
import Logo from '../assets/images/woof-logo.svg'


function Home() {

    document.body.classList.add('home-back');

    const [links] = useState([
        {
            name: 'OWNER',
            action: 'owner'
        },
        {
            name: 'WALKER',
            action: 'walker'
        },
    ])

    const [formLinks] = useState([
        {
            name: 'LOGIN',
            id: 'active-title',
            hover: 'login-hover',
            userType: 'OWNER'
        },
        {
            name: 'SIGNUP',
            id: 'active-title',
            hover: 'login-hover',
            userType: 'OWNER'
        }
    ])

    const [currentLink, setCurrentLink] = useState(links[0]);

    const [currentFormLink, setFormCurrentLink] = useState(formLinks[0])

    return (
            <>
            <div className="home-new">
            <div className="center-page-vh">
                <img src={Logo} alt="logo" className="home-logo"/>

                <h1 className="home-font-small">
                    WHERE DOGS GET THEIR PERFECT WALK. 
                    <br></br>
                    <br></br>
                    You need a break. So do your dogs. We will help both! Woof connects dog owners with dog walkers who’ll treat your dog like family.
                    <br></br>
                    <br></br>
                    We understand that life can be hectic and it may be hard to fit in a lengthy walk for your furry friend. We are here to take that stress away from you to give your pal the exercise and relief that it needs so you can focus on other tasks at hand.
                    <br></br>
                    <br></br>
                    {/* We are dog lovers and our dog walkers have lots of experience taking care of dogs. Walkers are responsible and caring. They take care of your pet with respect. They offer affection and attention to your pet, when you can’t be there. */}
                </h1>

                    <OwnerWalkerForm 
                        links={links}
                        currentLink={currentLink}
                        setCurrentLink={setCurrentLink}
                    />
                        
                            <div className={`form-title ${currentLink.action}`}>
                                <h3>{currentLink.name} {currentFormLink.name}</h3>
                            </div>
                    {currentLink.name === 'WALKER' &&  (
          
                        <>   
                            {currentFormLink.name === 'LOGIN' && (
                                <>
                                    <WalkerLoginForm 
                                        formLinks={formLinks}
                                        setFormCurrentLink={setFormCurrentLink}
                                    />
                                </>
                            )}
                            {currentFormLink.name === 'SIGNUP' && (
                                <>
                                    <WalkerSignupForm 
                                        formLinks={formLinks}
                                        setFormCurrentLink={setFormCurrentLink}
                                    />
                                </>
                            )}
                        </>
                    )}
                    {currentLink.name === 'OWNER' && (
                        <>
             
                        {currentFormLink.name === 'LOGIN' && (
                            <>
                                <OwnerLoginForm 
                                    formLinks={formLinks}
                                    setFormCurrentLink={setFormCurrentLink}
                                />
                            </>
                        )}
                        {currentFormLink.name === 'SIGNUP' && (
                            <>
                                <OwnerSignupForm 
                                    formLinks={formLinks}
                                    setFormCurrentLink={setFormCurrentLink}
                                />
                            </>
                        )}
                        </>
                    )}
                    <Link to="/about" className="more-link">Learn More</Link>
            </div>
            
            </div>
            </>
    )
}

export default Home;