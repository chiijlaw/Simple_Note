import styled from 'styled-components';
import NormalGrid from 'components/Grid';

const Wrapper = styled(NormalGrid)`
  width: 100%;
  min-height: 50px;
  background-color: #59d2ff;
  color: aliceblue;
  grid-template-columns: repeat(3, 1fr);
`;

export default Wrapper;
