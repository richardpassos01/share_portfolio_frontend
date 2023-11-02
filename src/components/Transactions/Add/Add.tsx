import React, { useState } from 'react';
import {
  Container,
  Header,
  FooterContainer,
  TransactionCard,
} from '../Transactions.styles';
import Table from '../Table/Table';

import readXlsx from '@utils/readXlsx';
import { formatterMoney } from '@utils/formatters';
import { Button, Colors, Hide, HyperLink, Tokens } from '@designSystem';
import { SubmitContainer } from './Add.styles';

type TransactionType = {
  'Entrada/Saída': string;
  Data: string;
  Movimentação: string;
  Produto: string;
  Quantidade: number;
  'Preço unitário': number;
  'Valor da Operação': number;
};

const transactionType: Record<string, string> = {
  Credito: 'Compra',
  Debito: 'Venda',
};

const Add: React.FC = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [data, setData] = useState<any[]>([]);

  const readFile = async (file: File | null) => {
    if (!file) return;

    const data = await readXlsx(file);
    if (data) {
      const formattedData = data.map((item: TransactionType) => ({
        type: transactionType[item['Entrada/Saída']],
        date: item['Data'],
        category: item['Movimentação'],
        ticketSymbol: item['Produto'].split('-')[0].trim(),
        quantity: item['Quantidade'],
        unitPrice: formatterMoney(item['Preço unitário']),
        totalCost: formatterMoney(item['Valor da Operação']),
      }));

      setData(formattedData);
    }
  };

  return (
    <Container>
      <TransactionCard>
        {data.length ? (
          <>
            <Header>
              <SubmitContainer>
                <HyperLink
                  $color={Colors.blue}
                  $fontSize="14"
                  $width="140px"
                  $border={Colors.blue}
                  onClick={() => setData([])}
                >
                  Cancelar
                </HyperLink>
                <HyperLink
                  $color={Colors.blue}
                  $fontSize="14"
                  $width="140px"
                  $border={Colors.blue}
                  onClick={() => console.log()}
                >
                  Adicionar
                </HyperLink>
              </SubmitContainer>
            </Header>
            <Table
              data={data}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            ></Table>
            <FooterContainer>
              <Button
                $width="100"
                $height="42"
                $backgroundColor={Colors.white}
                $color={Colors.darkBlue}
                $borderColor={Colors.darkBlue}
                onClick={() => console.log('a')}
              >
                Adicionar
              </Button>
              <Button
                $width="100"
                $height="42"
                $backgroundColor={Colors.white}
                $color={Colors.darkBlue}
                $borderColor={Colors.darkBlue}
                onClick={() => setData([])}
              >
                Cancelar
              </Button>
            </FooterContainer>
          </>
        ) : (
          <>
            <input
              type="file"
              onChange={(e) => {
                const file = e.target?.files;
                readFile(file && file[0]);
              }}
            />
          </>
        )}
      </TransactionCard>
    </Container>
  );
};

export default Add;
