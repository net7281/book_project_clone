import styled from '@emotion/styled';
import { Button, Input, Row } from 'antd';

export const SigninRow = styled(Row)`
  height: 100vh;
  background: #333;
  position: relative;
`;

export const SigninContents = styled(Row)`
  width: 560px; height: auto;
  margin: 0 auto;
  border-radius: 20px;
  background-color: white;
  padding: 60px 0px;
  box-shadow: 0 1rem 2rem hsl(0 0% 0% / 100%);
  font-family: 'KyoboHand', sans-serif;
`;

export const SigninTitle = styled.div`
  text-align: center;
  font-size: 60px;
  font-weight: bold;
  color: #ff88d4;
  text-transform: uppercase;
`;

export const SigninSubtitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const SigninUnderline = styled.div`
  width: 80px;
  height: 3px;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 40px;
  border-radius: 20%;
  background: linear-gradient(to right, #ff88d4, #330034);
`;

export const Required = styled.span`
  color: #971931;
`;

export const EmailTitle = styled.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  text-align: left;
  padding-left: 40px;
`;

export const InputArea = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const SigninInput = styled(Input)`
  width: 100%;
  border-radius: 1px;
  border-width: 1px;
  border-radius: 6px;
`;

export const PasswordTitle = styled.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  text-align: left;
  padding-left: 40px;
`;

export const ButtonArea = styled.div`
  text-align: center;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 20px;
`;

export const SigninButton = styled(Button)`
  background-color: #ff88d4;
  text-transform: uppercase;
  border: 1px solid #ff88d4;
  outline: none;
  border-radius: 10px;
  color: white;
  width: 100%;
  font-weight: 700;
  &:hover {
    color: #ff88d4;
    border: 1px solid #ff88d4;
    background-color: #fff;
    text-decoration: underline;
  }
`;

export const BgSignin = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  margin: auto;
  display: block;
`;

