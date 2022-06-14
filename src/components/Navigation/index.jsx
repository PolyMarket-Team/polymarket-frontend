import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link, NavLink } from "react-router-dom";

import Logo from "@components/UI/Logo";
import { Button } from "@components/UI/Button";
import { Navbar, NavbarWrap, MyButton, MyMenu, MyMenuItem } from "./style";
import { logOut } from "redux/modules/authSlice";
import { toast } from "react-toastify";

const Navigation = () => {
    const { isLogin, userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Navbar>
            <NavbarWrap>
                <Logo logo="color" />

                {isLogin && userInfo !== "" ? (
                    <div>
                        <MyButton
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                        >
                            {`${userInfo.nickname}`}
                        </MyButton>
                        <MyMenu
                            sx={{ width: "auto" }}
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <Link to="/profile">
                                <MyMenuItem>프로필</MyMenuItem>
                            </Link>
                            <MyMenuItem
                                onClick={() => {
                                    dispatch(logOut());
                                    toast.error("로그아웃 되었습니다.");
                                }}
                            >
                                로그아웃
                            </MyMenuItem>
                        </MyMenu>
                    </div>
                ) : (
                    <NavLink to="/login">
                        <Button>로그인</Button>
                    </NavLink>
                )}
            </NavbarWrap>
        </Navbar>
    );
};

export default Navigation;
