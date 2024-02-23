import React from 'react'
import { BatteriesCars, BatteriesContainerStyled, BatteriesProducts, BatteriesTitle, BatteriesTrucks, BatteriesWrapper } from './BatteriesStyles'
import CardBattery from './CardBattery'
import Car from "/public/bateriaMoura.webp"
import Efb from "/public/efb.png"
import Agm from "/public/agm.png"
import Truck from "/public/bus-truck-diagonal.png"

const Batteries = () => {
    return (
        <BatteriesContainerStyled>
            <BatteriesWrapper className='wrapper'>
                <BatteriesCars>
                    <BatteriesTitle>
                        <h2>Baterías para <span>vehículos livianos</span></h2>
                        <p>La línea Moura Automotiva fue diseñada para elevar los estándares de seguridad y durabilidad exigidos por los vehículos de alta tecnología, asegurando un rendimiento óptimo y el funcionamiento eficaz de sus equipos.</p>
                    </BatteriesTitle>
                    <BatteriesProducts>
                        <CardBattery>
                            <img src={Car} alt="" />
                            <h3>Automotriz Estandar</h3>
                            <p>Esta serie de productos fue desarrollada con la tecnología para arrancar el motor del vehículo y para satisfacer las eventuales necesidades del mismo. Hoy este producto es referencia de calidad en el mercado y es pieza original de las mayores automotrices del mundo.</p>
                        </CardBattery>
                        <CardBattery>
                            <img src={Efb} alt="" />
                            <h3>Automotriz EFB</h3>
                            <p>Moura EFB es la referencia mundial en cuanto a rendimiento. Diseñada para aumentar la seguridad y vida útil de los vehículos con tecnología start-stop.</p>
                        </CardBattery>
                        <CardBattery>
                            <img src={Agm} alt="" />
                            <h3>Automotriz AGM</h3>
                            <p>Moura también está en vehículos de alta gama con la tecnología VLRA AGM, única en el mercado que proporciona mayor durabilidad y desempeño para su vehículo.</p>
                        </CardBattery>
                    </BatteriesProducts>
                </BatteriesCars>
                <BatteriesTrucks>
                <BatteriesTitle>
                        <h2>Baterías para <span>vehículos pesados</span></h2>
                        <p>Para superar el día a día se necesita mucha energía. Las baterías pesadas Moura tienen el alto rendimiento que necesitás para afrontar una rutina intensa en la ciudad o en el campo. Moura tiene la durabilidad y resistencia que necesitás en viajes largos. Energía garantizada para tu día a día.</p>
                    </BatteriesTitle>
                    <BatteriesProducts>
                        <CardBattery>
                            <img src={Truck} alt="" />
                            <h3>Automotriz Estandar</h3>
                            <p>Esta serie de productos fue desarrollada con la tecnología para arrancar el motor del vehículo y para satisfacer las eventuales necesidades del mismo. Hoy este producto es referencia de calidad en el mercado y es pieza original de las mayores automotrices del mundo.</p>
                        </CardBattery>
                    </BatteriesProducts>
                </BatteriesTrucks>
            </BatteriesWrapper>
        </BatteriesContainerStyled>
    )
}

export default Batteries