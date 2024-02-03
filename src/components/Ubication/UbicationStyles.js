import styled from "styled-components";

export const UbicationContainerStyled = styled.div`
    width: 100%;
    background-color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UbicationWrapper = styled.section`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .map {
        border-radius: 15px;
        padding: 1px;
        background-color: var(--gray-200);
    }
`

export const UbicationMap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
`

export const UbicationAddress = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const AddressCity = styled.div`
    text-transform: uppercase;
    display: flex;
    gap: 6px;
    align-items: center;
    color: var(--yellow);
`

export const AddressStreet = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
        font-weight: 400;
    }

    a {
        color: var(--gray-400);
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2 {
        color: var(--blue);
    }

    span {
        height: 2px;
        width: 200px;
        background-color: var(--yellow);
    }

    p {
        text-align: center;
        color: var(--blue);
    }
`