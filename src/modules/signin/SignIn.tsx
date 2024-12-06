import React, { useEffect, useState } from "react";
import {
  CdButton,
  CdCard,
  CdContainer,
  CdEmailInput,
  CdPasswordInput,
} from "../../shared-components/atoms";
import {
  Col,
  Row,
  Form,
  FormGroup,
  FormText,
  Label,
  CardTitle,
} from "reactstrap";
import {
  AlignItems,
  JustifyContent,
} from "../../types/enums/components/Container";
import { authService } from "../../services/api/AuthService";
import { SignInDto } from "../../types/interface/request/signin-dto";
import { Link, useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const [signInResponseData, setSignInResponseData] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const projObj: SignInDto = {
      email: "",
      password: "",
    };
  });

  const SignInServiceCall = async (signInObj: SignInDto) => {
    try {
      await authService.signIn(signInObj).then((res) => {
        if (res.success) {
          authService.setLoginSession(res.data.data);
          setSignInResponseData(res.data.data);
          localStorage.setItem("authToken", res.data.data);
          navigate('/search-project');
        }
        else
        {
          console.log("Login failed");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const SignInSubmit = () => {
    const signInObj: SignInDto = {
      email: email,
      password: password,
    };

    SignInServiceCall(signInObj);
  };

  return (
    <CdContainer
      alignItems={AlignItems.center}
      justifyContent={JustifyContent.center}
      className="front-container"
    >
      <CdCard
        cardTitle="Login to Access Department Dashboard"
        cardSubtitle="Login below to access your dashboard"
        cardImageLink="../../img/dc-gov.webp"
        children={
          <Form>
            <FormGroup>
              <Label for="UserName" style={{ fontWeight: "bold" }}>
                Username
              </Label>
              <CdEmailInput
                id="email"
                placeHolder="username@email.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Password" style={{ fontWeight: "bold" }}>
                Password
              </Label>
              <CdPasswordInput
                id="examplePassword"
                placeHolder="Enter your Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup className="d-flex align-items-center justify-content-center">
              <Row>
                <CdButton
                  onClick={() => SignInSubmit()}
                  type="button"
                  text="Sign In"
                />
              </Row>
            </FormGroup>
            <FormGroup className="d-flex align-items-center justify-content-center">
              <Row>
                {/* <FormText check>Forgot your username or password?</FormText> */}
                <Link to="/dashboard"> Forgot your username or password?</Link>
              </Row>
            </FormGroup>
          </Form>
        }
      />
    </CdContainer>
  );
};
export default SignIn;
