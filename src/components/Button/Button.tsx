import * as S from "./styled";
import { useRecoilValue } from 'recoil';
import { writeIcon } from "assets/index";
import { modalState } from 'recoil/atom';

const Button = () => {
  const isModal = useRecoilValue(modalState);

  const toWrite = () => {
    console.log("write");

  }



  return (
    <>
      <S.ButtonContainer onClick={toWrite}>
        <img alt="write icon" src={writeIcon} />
      </S.ButtonContainer>
    </>
  )
}

export default Button;