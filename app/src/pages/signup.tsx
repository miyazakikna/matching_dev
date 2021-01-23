import React, {useState, useCallback} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router, { useRouter } from 'next/router'
import {TextInput, PrimaryButton} from "../components/UIkit";
import { auth } from '../utils/Firebase'
import { AuthContext } from '../context/AuthProvider'
import {isValidEmailFormat, isValidRequiredInput} from "../function/common";

export default function SignUp() { 
    const router = useRouter()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [username, setUsername] = useState<string>('')

    const inputEmail = useCallback((e) => {
        setEmail(e.target.value)
    },[setEmail]);

    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    },[setPassword]);

    const inputConfirmPassword = useCallback((e) => {
        setConfirmPassword(e.target.value)
    },[setConfirmPassword]);

    const inputUsername = useCallback((e) => {
        setUsername(e.target.value)
    },[setUsername]);

    const createUser = async () => {
        try {
            // Validations
            if (!isValidRequiredInput(email, password, confirmPassword)) {
                alert('必須項目が未入力です。');
                return
            }
            if (!isValidEmailFormat(email)) {
                alert('メールアドレスの形式が不正です。もう1度お試しください。')
                return
            }
            if (password !== confirmPassword) {
                alert('パスワードが一致しません。もう1度お試しください。')
                return
            }
            if (password.length < 6) {
                alert('パスワードは6文字以上で入力してください。')
                return
            }
            await auth.createUserWithEmailAndPassword(email, password)
            router.push('/signin')
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div>
            <Head>
                <title>会員登録</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <h2 className="u-text-center u-text__headline">会員登録</h2>
            <div className="module-spacer--medium" />
            <TextInput
                fullWidth={true} label={"氏名"} multiline={false} required={true}
                rows={1} value={username} type={"text"} onChange={inputUsername}
            />
            <TextInput
                fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
                rows={1} value={email} type={"email"} onChange={inputEmail}
            />
            <TextInput
                fullWidth={true} label={"パスワード（半角英数字で6文字以上）"} multiline={false} required={true}
                rows={1} value={password} type={"password"} onChange={inputPassword}
            />
            <TextInput
                fullWidth={true} label={"パスワードの再確認"} multiline={false} required={true}
                rows={1} value={confirmPassword} type={"password"} onChange={inputConfirmPassword}
            />
            <div className="module-spacer--medium" />
            <div className="center">
                <PrimaryButton
                    label={"アカウントを登録する"}
                    onClick={ createUser }
                />
                <div className="module-spacer--small" />
                <Link href="/signin">
                    <a className="u-text-small" >アカウントをお持ちの方はこちら</a>
                </Link>
            </div>

            <style jsx>{`
                .container {
                    min-height: 100vh;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .u-text-center {
                    text-align: center;
                }
                .u-text__headline {
                    color: #4dd0e1;
                    font-size: 1.563rem;
                    margin: 0 auto 1rem auto;
                }
                .module-spacer--medium {
                    height: 32px
                }
                .center {
                    margin: 0 auto;
                    text-align: center;
                }     
                .u-text-small {
                    font-size: .9rem;
                }

                @media screen and (min-width:1024px) {
                    /*********** Module Spacer ***********/
                    .module-spacer--medium {
                        height: 48px
                    }
                }
                @media screen and (min-width: 576px) {
                /*********** Module Spacer ***********/
                .module-spacer--small {
                    height: 32px
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                        sans-serif;
                }

                * {
                box-sizing: border-box;
                }
            `}</style>

        </div>
    );
};