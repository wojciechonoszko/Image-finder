import {ButtonContainer} from './ButtonStyles';
import PropTypes from 'prop-types';

const Button = ({onClick}) => {
    return (
        <ButtonContainer type='button' onClick={onClick}>
            Load more
        </ButtonContainer>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Button;