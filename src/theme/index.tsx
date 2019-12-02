import styled, { CreateStyled } from '@emotion/styled';

export { default as Reset } from './reset';

type Theme = {
  color: {
    primary: string
    positive: string
    negative: string
  }
}

export default styled as CreateStyled<Theme>;
