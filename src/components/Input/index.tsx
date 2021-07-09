import react, {InputHTMLAttributes} from 'react';
import {IconBaseProps} from 'react-icons';

import {Container} from './styles'; 


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({icon: Icon, ...rest}) => (
    <Container>
        {/* para utilizar a propriedade size do icone basta importar o IconBaseProps */}
        {Icon && <Icon size={20}/>}
        <input {...rest}/>
    </Container>
);

export default Input;