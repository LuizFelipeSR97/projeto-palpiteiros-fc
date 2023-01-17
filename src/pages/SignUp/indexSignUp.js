/* import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/logo-palpiteiros.png'

export default function SignUpPage() {

    const emailExists = true;
    const [errorText, setErrorText] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {

        e.preventDefault();

        const user = {email: e.target.email.value, password: e.target.password.value};

        if (emailExists){
            setErrorText('E-mail já cadastrado. Faça o login no link acima!')
        } else {
            navigate('/')
        }

    }

    return (
        <Page>
            <Content>
                <a href="/">
                    <img src={logo}/>
                </a>
                <Form onSubmit={handleSubmit}>
                    <input name='name' placeholder='Nome' type='name' required/>
                    <input name='email' placeholder='E-mail' type='email' required/>
                    <input name='password' placeholder='Senha' type='password' required/>
                    <input name='passwordConfirmation' placeholder='Confirme a senha' type='passwordConfirmation' required/>
                    <a href="/sign-in">
                        Já tem uma conta? Faça o login agora!
                    </a>
                    <ErrorSpace>
                        {errorText}
                    </ErrorSpace>
                    <Button>
                        Cadastrar
                    </Button>
                </Form>
            </Content>            
        </Page>
    )
}

const Page = styled.div`
    background-color: #0066b5;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    background-color: #E8E8E8;
    width: 600px;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;

    a:-webkit-any-link {
        margin-bottom: 40px;
    }

    img{
        width: 300px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a:-webkit-any-link {
        text-decoration: none;
        font-size: 16px;
        font-weight: 700;
        color: #002680;
        margin-top: 10px;
        margin-bottom: 30px;
    }

    input{
        width: 400px;
        height: 60px;
        margin-bottom: 10px;
        padding-left: 30px;
        color: black;
        font-size: 20px;
        border: 1px solid #000000;
        border-radius: 8px;
        font-family: 'Lexend Deca', sans-serif;
    }

    input::placeholder{
        color: #9C9C9C;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;  
    }
`
const Button = styled.button`
    width: 250px;
    height: 60px;
    background: #002680;
    border-radius: 8px;
    color: white;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-top: 30px;
    border: solid 1px #002680;
    border-radius: 12px;
    cursor: pointer;
    margin-bottom: 30px;
`;

const ErrorSpace = styled.div`
    text-align: center;
    margin-top: 20px;
    width: 450px;
    height: 20px;
    color: black;
    margin: 20px 0;
    font-size: 14px;
`;
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/logo-palpiteiros.png';

export default function SignInPage() {

    const userExists = true;
    const [errorText, setErrorText] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {

        e.preventDefault();

        const user = {email: e.target.email.value, password: e.target.password.value};

        if (userExists){
            e.target.email.value = '';
            e.target.password.value = '';
            setErrorText('Login e/ou senha inválidos. Tente novamente!')
        } else {
            navigate('/')
        }

    }

    return (
        <Page>
            <Content>
                <a href="/">
                    <img src={logo}/>
                </a>
                <Form onSubmit={handleSubmit}>
                    <input name='name' placeholder='Nome' type='name' required/>
                    <input name='email' placeholder='E-mail' type='email' required/>
                    <input name='password' placeholder='Senha' type='password' required/>
                    <input name='passwordConfirmation' placeholder='Confirme a senha' type='passwordConfirmation' required/>
                    <a href="/sign-in">
                        Já tem uma conta? Faça o login agora!
                    </a>
                    <ErrorSpace>
                        {errorText}
                    </ErrorSpace>
                    <Button>
                        Cadastrar
                    </Button>
                </Form>
            </Content>            
        </Page>
    )
}

const Page = styled.div`
    background-color: #515151;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    background-color: #E8E8E8;
    width: 500px;
    height: 800px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 0px 4px 24px #000000;

    img{
        width: 300px;
    }

    a:-webkit-any-link {
        margin: 40px 0;
        margin-bottom: 40px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 400px;
        height: 60px;
        margin-bottom: 10px;
        padding-left: 30px;
        color: black;
        font-size: 20px;
        border: 1px solid #000000;
        border-radius: 8px;
        font-family: 'Lexend Deca', sans-serif;
    }

    a:-webkit-any-link {
        text-decoration: none;
        font-size: 16px;
        font-weight: 700;
        color: #000000;
        margin-top: 10px;
        margin-bottom: 0;
    }

    input::placeholder{
        color: #9C9C9C;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;  
    }
`;

const Button = styled.button`
    width: 250px;
    height: 60px;
    background: #000000;
    border-radius: 8px;
    color: white;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-top: 30px;
    border: solid 1px #000000;
    border-radius: 12px;
    cursor: pointer;
    margin-bottom: 30px;
`;

const ErrorSpace = styled.div`
    text-align: center;
    margin-top: 20px;
    width: 450px;
    height: 20px;
    color: black;
    margin: 20px 0;
    font-size: 14px;
`;
