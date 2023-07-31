import {ReactNode} from "react";
import * as S from './Layout.styles';

interface ChildrenProps{
    children: ReactNode;
}

const Layout =({children}: ChildrenProps) =>{
    return <S.Layout>{children}</S.Layout>
}

export default Layout;