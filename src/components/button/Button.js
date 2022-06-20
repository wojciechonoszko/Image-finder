import {ButtonContainer} from './ButtonStyles';
import PropTypes from 'prop-types';

export default function Button({ loadMoreClick }) {
    return (
        <ButtonContainer type='button' onClick={() => loadMoreClick()}>
            Load more
        </ButtonContainer>
    );
}

Button.propTypes = {
    loadMoreClick: PropTypes.func.isRequired,
};


// const Button = ({onClick}) => {
//     return (
//         <ButtonContainer type='button' onClick={onClick}>
//             Load more
//         </ButtonContainer>
//     );
// };

// Button.propTypes = {
//     onClick: PropTypes.func.isRequired
// };

// export default Button;