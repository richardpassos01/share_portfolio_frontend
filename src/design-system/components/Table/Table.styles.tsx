import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto; /* Adicione uma barra de rolagem horizontal em dispositivos menores */
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Header = styled.thead``;

export const HeaderCell = styled.th`
  padding: 18px 30px 18px 30px;
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.darkGray};
  text-align: left;
  vertical-align: middle;

  @media (max-width: 767px) {
    /* Aplique estilos específicos para dispositivos móveis */
    padding: 10px; /* Reduza o preenchimento para economizar espaço */
  }
`;

export const SortIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const Row = styled.tr``;

export const Cell = styled.td`
  padding: 18px 30px 18px 30px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  font-size: 14px;
  color: ${(props) => props.theme.colors.lightGray};
  text-align: left;
  vertical-align: middle;

  @media (max-width: 767px) {
    /* Aplique estilos específicos para dispositivos móveis */
    padding: 10px; /* Reduza o preenchimento para economizar espaço */
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const PageButton = styled.button<{ active?: any }>`
  margin: 0 5px;
  background-color: ${(props) => (props.active ? 'gray' : 'transparent')};
`;
