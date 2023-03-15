import {ButtonContainer} from './ButtonStyles';
import PropTypes from 'prop-types';

export default function Button({ onClick }) {
    return (
    <ButtonContainer onClick={() => onClick()}>
        Load more
    </ButtonContainer>
    );
  }

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};
