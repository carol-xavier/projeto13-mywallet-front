import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

function SignUpPage(){
    return (
        <Section>
            <header>MyWallet</header>
            <Form>
                <input type={"text"} placeholder={"Nome"}></input>
                <input type={"email"} placeholder={"E-mail"}></input>
                <input type={"password"} placeholder={"Senha"}></input>
                <input type={"password"} placeholder={"Confirme a senha"}></input>
                <button>Cadastrar</button>
            </Form>
            <Link to={'/'}>
                <p>Primeira vez? Cadastre-se</p>
            </Link>
        </Section>
    )
};

export default SignUpPage;

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #8C11BE;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        width: 326px;
        height: 46px;
        background: #A328D6;
        border: none;
        border-radius: 5px;
    }
`