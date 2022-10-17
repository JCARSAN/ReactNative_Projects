import { Container, Logo, BackIcon, BackButton } from './styles';
import ImgLogo from '@assets/images/logo.png'

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false}: Props){
    return(
        <Container>
            {showBackButton &&
                <BackButton>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={ImgLogo} />
        </Container>
    )
}