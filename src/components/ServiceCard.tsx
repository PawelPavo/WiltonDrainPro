import * as React from 'react'
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { CgSmartHomeBoiler, CgMore } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';
import { GiWarpPipe } from 'react-icons/gi'
import { BiCameraMovie } from 'react-icons/bi'
import { SiJet } from 'react-icons/si'
import { IServices } from '../utils/interfaces';


const ServicesCard: React.FC<ServicesCardProps> = (props) => {
    return (
        <Layout2>
            <div className="col-md-4 my-5 my-auto">
                <div className="card mb-5 card-hover border rounded-0" style={{ width: "21rem", height: "21rem" }}>
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
                        <p className="card-text text-center text-muted mb-3">{props.service.description}</p>
                    </div>
                    <div className="text-center card-footer bg-white border-0">
                        <a href="/contact" className="card-link text-center font-weight-light">
                            <button type="button" className="btn btn-outline-primary mr-3">Email</button>
                        </a>
                        <a href="tel:5613039111" className="btn btn-outline-success rounded-pill px-4 ml-3">Call</a>
                    </div>
                </div>
            </div>
        </Layout2>
    )
}

const Layout2 = styled.div`
.card-hover:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
    opacity: 1;
  }

  .card-hover {
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.name-text {
    letter-spacing: 2px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
}
`

interface ServicesCardProps {
    service: IServices;
}

export default ServicesCard;