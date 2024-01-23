import React, { useEffect, useState } from "react";
import classes from "./SignForm.module.css";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { signinActions } from "../store/sign-slice";
import { fetchAuth, fetchAuthData } from "../store/http";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { NetworkCellRounded } from "@mui/icons-material";
const SignForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mode = useSelector((state) => state.sign.head);
  const sign = useSelector((state) => state.sign);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [searchParams] = useSearchParams();
  const [isLogin, setIsLogin] = useState(searchParams.get("mode") === "login");

  //Using Tanstack Query for Authentication.
  const {
    data,
    mutate: mutationIn,
    isError,
  } = useMutation({
    mutationKey: ["signin", { email: email, password: password }],
    mutationFn: fetchAuthData,
    onSuccess:(data)=>{
      console.log(data);
      if (data>0) {
        navigate("root");
        dispatch(signinActions.changeinDisplay({ inDisplay: false }));
      } else {
        console.log(data);
        dispatch(signinActions.changeinDisplay({ inDisplay: true }));
      }
    }
  });
  const { mutate: mutationUp } = useMutation({
    mutationKey: ["signup", { email: email, password: password }],
    mutationFn: fetchAuth,
    onSuccess: () => {
      dispatch(signinActions.changeDisplay({ display: true }));
    },
  });

  //Sumbit the form for sigin or signup
  const submitHandler = (event) => {
    event.preventDefault();
    if (sign.mode === "up") {
      mutationUp({ email: email, password: password });
    } else if (sign.mode === "in") {
      console.log(sign.mode);
      mutationIn({ email: email, password: password});
    }
  };
  

  

  //Set islogin to current status of authentication
  useEffect(() => {
    setIsLogin(searchParams.get("mode") === "login");
  }, [searchParams.get("mode") === "login"]);

  //Changing Mode of our signin/signup
  useEffect(() => {
    if (isLogin === true) {
      dispatch(
        signinActions.changeHeadPara({
          head: "Sign In",
          subHead: "Sign In to Your Account",
          mode: "in",
        })
      );
      dispatch(signinActions.changeDisplay({ display: false }));
      dispatch(signinActions.changeinDisplay({ inDisplay: false }));
    } else {
      dispatch(
        signinActions.changeHeadPara({
          head: "Sign Up",
          subHead: "Sign Up to Your Account",
          mode: "up",
        })
      );
      dispatch(signinActions.changeinDisplay({ inDisplay: false }));
      dispatch(signinActions.changeDisplay({ display: false }));
    }
  }, [isLogin]);

  //Input change Handler
  const inputChangeHandler = (data, type) => {
    if (type === "email") {
      setEmail(data);
    }
    if (type === "password") {
      setPassword(data);
    }
  };
  return (
    <form onSubmit={submitHandler} className={classes.main}>
      {sign.upDisplay && (
        <div className={classes.check}>
          <div><CheckCircleIcon className={classes.phoneicon} /></div>
          <div>you are all set to go.</div>
        </div>
      )}
      {isError && (
        <div className={classes.wrong}>
         <div><NetworkCellRounded className={classes.phoneicon} /></div> 
         <div>Network Error</div>
        </div>
      )}
      {sign.inDisplay && !isError && (
        <div className={classes.wrong}>
          <div><CancelIcon className={classes.phoneicon} /></div>
          <div>you entered wrong credentials.</div>
        </div>
      )}
      <div className={classes.inputContainer}>
        <label>Email address</label>
        <input
          type="email"
          required
          onChange={(event) => inputChangeHandler(event.target.value, "email")}
        />
      </div>
      <div className={classes.inputContainer}>
        <label>Password</label>
        <input
          type="password"
          required
          onChange={(event) =>
            inputChangeHandler(event.target.value, "password")
          }
        />
      </div>
      <div className={classes.loginContainer}>
        {isLogin === true && (
          <button className={classes.forgot}>Forgot Password?</button>
        )}
        <button type="submit" className={classes.submit}>
          {mode}
        </button>
      </div>
      <div className={classes.footer}>
        <div>Don't have an account?</div>
        <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
          {isLogin ? "Signup" : "Login"}
        </Link>
      </div>
    </form>
  );
};

export default SignForm;
