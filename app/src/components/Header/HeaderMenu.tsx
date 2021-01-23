import React, {useEffect} from 'react';
import Router, { useRouter } from 'next/router'
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HeaderButton from "./HeaderButton";

const HeaderMenu = (props: any) => {
    const router = useRouter()
    const signIn = () => {
        router.push('/signin')
    }
    const signUp = () => {
        router.push('/signup')
    }
    return (
        <>
            {/* <IconButton
                aria-label="Menu Items"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(e) => props.handleDrawerToggle(e, true)}
                color="inherit"
            >
                <MenuIcon />
            </IconButton> */}
            <HeaderButton
                label={"ログイン"}
                onClick={signIn}
                backgroundColor="#fff"
            />
            <HeaderButton
                label={"無料登録"}
                onClick={ signUp }
            />
        </>
    );
};
export default HeaderMenu;