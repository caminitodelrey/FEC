import styled from 'styled-components';

// Carousel Chevrons
const Chevron = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(-50%);
  width: 47px;
  height: 45px;
  border: 1px solid black;
  background-color: white;
  color: rgba(10, 89, 51);
  cursor: pointer;
`;

export const LeftChevron = styled(Chevron)`
  left: -80px;
  `;

export const RightChevron = styled(Chevron)`
  right: -80px;
  `;

// Chevrons specific to Wishlist Carousel
export const WishlistLeftChevron = styled(Chevron)`
  top: 40%;
  right: -80px;
`;

export const DeactivatedRightChevron = styled(Chevron)`
  right: -80px;
  color: rgba(128, 128, 128, 0.5);
  border: 1px solid rgba(128, 128, 128, 0.5);
`;

export const DeactivatedLeftChevron = styled(DeactivatedRightChevron)`
  top: 40%;
`;

// Wishlist and Remove buttons container
export const ActionButtonContainer = styled.div`
  position: absolute;
  top: 0%;
  transform: translateX(623%);
  padding: 10px 10px 7px 10px;
  border-radius: 0 6px;
  background: #fff;
  color: rgba(11, 191, 125);

  &:hover {
    cursor: pointer;
  }
`;

// Compare button
export const CompareButton = styled.button`
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  padding: 8px;
  color: rgba(11, 191, 125, .9);
  background-color: #fff;
  box-shadow: 5px 5px 12px -5px rgba(0, 0, 0, 0.1)
`;

export const CompareButtonContainer = styled.div`
  position: absolute;
  top: 0%;
  transform: translateX(0%);
  padding: 10px 10px 7px 10px;
  color: rgba(11, 191, 125);

  &:hover ${CompareButton} {
    cursor: pointer;
    color: #fff;
    background-color: rgba(11, 191, 125, .9);
    box-shadow: 0px 5px 10px rgba(46, 229, 157, 0.4);
  }
`;

// Wishlist Carousel - Default Card Button
export const DefaultCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 360px;
  min-width: 260px;
  align-items: center;
  margin-right: 40px;
  border-radius: 10px;
  border: 3px solid rgba(128, 128, 128, 0.2);
`;

export const DefaultCardButton = styled.button`
  position: relative;
  top: 40%;
  height: 50px;
  min-width: 50px;
  text-align: center;
  text-decoration: none;
  padding: 15px;
  border-radius: 30px;
  border: 2px solid rgba(11, 191, 125, .9);
  color: rgba(11, 191, 125, .9);
  background-color: #fff;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: rgba(11, 191, 125, .9);
    box-shadow: 0px 5px 10px rgba(46, 229, 157, 0.4);
  }

  &:active {
    box-shadow: inset 6px 6px 5px 1px rgba(37, 167, 115, 0.7);
  }
`;
