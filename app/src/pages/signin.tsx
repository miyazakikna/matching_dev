import React, {useState, useCallback} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router, { useRouter } from 'next/router'
import {TextInput, PrimaryButton} from "../components/UIkit";
import Layout from '../components/layout'
import { auth } from '../utils/Firebase'
import { AuthContext } from '../context/AuthProvider'
import { isValidEmailFormat, isValidRequiredInput } from "../function/common";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import withRoot from '../modules/withRoot';
import AppAppBar from '../modules/views/AppAppBar';
import Typography from '../modules/components/Typography';
import Button from '../modules/components/Button';
import AppForm from '../modules/views/AppForm';
import { Copyright } from '../components/index';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    button: {
        minWidth: 256,
        marginTop: theme.spacing(4),
        borderRadius: 3,
        fontSize: 16,
        height: 48,
        marginBottom: theme.spacing(4),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
  }));

function SignIn() { 
    const classes = useStyles();
    const router = useRouter()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const inputEmail = useCallback((e) => {
        setEmail(e.target.value)
    },[setEmail]);

    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    },[setPassword]);

    const signIn = async () => {
        try {
            if (!isValidRequiredInput(email, password)) {
                alert('メールアドレスかパスワードが未入力です。')
                return false
            }
            if (!isValidEmailFormat(email)) {
                alert('メールアドレスの形式が不正です。')
                return false
            }
            await auth.signInWithEmailAndPassword(email, password)
            router.push('/')
        } catch (err) {
            alert('ログインに失敗しました。')
            console.log(err.message)
        }
    }

    return (
        <React.Fragment>
            <Head>
                <title>ログイン</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppAppBar />
            <AppForm>
                <Typography align="center" variant="h4">
                    SIGN IN
                </Typography>
                <Avatar className={ classes.avatar }>
                    <LockOutlinedIcon />
                </Avatar>
                <TextInput
                    fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
                    rows={1} value={email} type={"email"} onChange={inputEmail}
                />
                <TextInput
                    fullWidth={true} label={"パスワード（半角英数字で6文字以上）"} multiline={false} required={true}
                    rows={1} value={password} type={"password"} onChange={inputPassword}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="ログイン状態を保存する"
                />
                <Button
                    color="secondary"
                    variant="contained"
                    className={classes.button}
                    component="a"
                    onClick={signIn}>
                    ログイン
                </Button>
                <Typography align="center">
                    <Link href="/reset">
                        パスワードを忘れた方はこちら
                    </Link>
                </Typography>
                <Typography align="center">
                    <Link href="/signup">
                        アカウント登録がまだですか?
                    </Link>
                </Typography>
            </AppForm>
            <Box mt={8}>
                <Copyright />
            </Box>
        </React.Fragment>
    );
};

export default withRoot(SignIn);