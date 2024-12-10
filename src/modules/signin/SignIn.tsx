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
  Label,
  CardTitle,
  CardBody,
  CardImg,
} from "reactstrap";
import {
  AlignItems,
  JustifyContent,
} from "../../types/enums/components/Container.Enum";
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

  const signIn = async (signInObj: SignInDto) => {
    try {
      await authService.signIn(signInObj).then((res) => {
        if (res.success) {
          authService.setLoginSession(res.data.data);
          setSignInResponseData(res.data.data);
          navigate("/dashboard");
        } else {
          console.log("Login failed");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const signInSubmit = () => {
    const signInObj: SignInDto = {
      email: email,
      password: password,
    };

    signIn(signInObj);
  };

  return (
    <CdContainer
      alignItems={AlignItems.center}
      justifyContent={JustifyContent.center}
      className="front-container"
      children={
        <CdCard>
          <CardBody>
            <div style={{ width: "wd-100" }}>
              <Row style={{ width: "wd-100" }}>
                <Col style={{ width: "wd-40" }}>
                  <CardTitle tag="h6" className="mb-8 text-muted text-center">
                    Login to Access Department Dashboard
                  </CardTitle>
                  <CardTitle className="mb-8 text-muted text-center">
                    Login below to access your Dashboard
                  </CardTitle>
                </Col>
              </Row>
            </div>
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
                    onClick={() => signInSubmit()}
                    type="button"
                    text="Sign In"
                  />
                </Row>
              </FormGroup>
              <FormGroup className="d-flex align-items-center justify-content-center">
                <Row>
                  <Link to="/"> Forgot your username or password?</Link>
                </Row>
              </FormGroup>
            </Form>
          </CardBody>
        </CdCard>
      }
    />
  );
};
export default SignIn;
