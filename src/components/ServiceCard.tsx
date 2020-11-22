import * as React from 'react'
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { CgSmartHomeBoiler, CgMore } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';
import {GiWarpPipe} from 'react-icons/gi'
import {BiCameraMovie} from 'react-icons/bi'
import {SiJet} from 'react-icons/si'

import { IServices } from '../utils/interfaces';


const ServicesCard: React.FC<ServicesCardProps> = (props) => {
    return (
        <Layout2>
            <div className="col-md-4 my-5 my-auto">
                <div className="card border-0" style={{ width: "21rem" }}>
                    <div className="card-body">
                        <div className="card-title text-center">
                            <IconContext.Provider value={{ style: { fontSize: '45px', color: "#ffbd4a", opacity: "0.75" } }}>
                                <div>
                                    {props.service.id === 1 ? <FaHome /> : ''}
                                    {props.service.id === 2 ? <GiWarpPipe /> : ''}
                                    {props.service.id === 3 ? <SiJet /> : ''}
                                    {props.service.id === 4 ? <BiCameraMovie /> : ''}
                                    {props.service.id === 5 ? <CgSmartHomeBoiler /> : ''}
                                    {props.service.id === 6 ? <CgMore /> : ''}
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className="card-title text-center name-text">{props.service.name}</div>
                        <p className="card-text text-center" style={{color:"#a3a3a3"}} >{props.service.description}</p>
                        <div className="text-center">
                            <a href="/" className="card-link text-center font-weight-light"><small>Read More...</small></a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout2>
    )
}

const Layout2 = styled.div`

.name-text {
    letter-spacing: 2px;
    font-szie: 18px;
    font-weight: bold;
    text-transform: uppercase;
}


`

interface ServicesCardProps {
    service: IServices;
}

export default ServicesCard;