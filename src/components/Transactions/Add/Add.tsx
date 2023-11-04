import React, { ChangeEvent, useState } from 'react';
import {
  Header,
  FooterContainer,
  TransactionCard,
} from '../Transactions.styles';
import Table from '../Table/Table';
import Container from '@components/Container';
import readXlsx from '@utils/readXlsx';
import {
  Button,
  Colors,
  HyperLink,
  Icons,
  Input,
  ProgressBar,
  Notification,
  Toast,
} from '@designSystem';
import {
  IconContainer,
  SubmitContainer,
  UploadFileContainer,
  Footer,
  UploadFileHeader,
} from './Add.styles';
import Image from 'next/image';
import Routes from '@constants/Routes';
import { useRouter } from 'next/router';
import fetchBff from '@utils/fetchBff';
import BffEndpoints from '@constants/BffEndpoints';

type TransactionType = {
  'Entrada/Saída': string;
  Data: string;
  Movimentação: string;
  Produto: string;
  Quantidade: number;
  'Preço unitário': number | string;
  'Valor da Operação': number | string;
};

const transactionType: Record<string, string> = {
  Credito: 'Compra',
  Debito: 'Venda',
};

const Add: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<any[]>([]);
  const [isReadingFile, setReadingFile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast | {}>({});

  const handleRedirect = () => {
    router.push(Routes.TRANSACTIONS);
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    try {
      setIsSubmitting(true);
      const institutionId = 'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2';

      await fetchBff(
        BffEndpoints.CREATE_TRANSACTIONS.replace(
          ':parentId',
          institutionId,
        ) as BffEndpoints,
        'POST',
        data,
      );

      setToast({
        message: 'Transactions criadas!',
        type: 'success',
      });

      setTimeout(() => {
        handleRedirect();
      }, 2500);
    } catch (error) {
      setIsSubmitting(false);
      setData([]);
      setToast({
        message: 'Alguma coisa deu errada!',
        type: 'error',
      });
    }
  };

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event?.target?.files;

    if (files && files[0]) {
      try {
        setReadingFile(true);

        await readFile(files[0]);
      } catch (error) {
        console.error('error');
      } finally {
        setReadingFile(false);
      }
    }
  };

  const readFile = async (file: File) => {
    const data = await readXlsx(file);

    if (data) {
      const formattedData = data.map((item: TransactionType) => {
        const unitPrice = item['Preço unitário'];
        const totalCost = item['Valor da Operação'];
        return {
          type: transactionType[item['Entrada/Saída']],
          date: item['Data'],
          category: item['Movimentação'],
          ticketSymbol: item['Produto'].split('-')[0].trim(),
          quantity: item['Quantidade'],
          unitPrice: unitPrice !== '-' ? unitPrice : 0,
          totalCost: totalCost !== '-' ? totalCost : 0,
        };
      });

      setData(formattedData);
    }
  };

  return (
    <>
      <div>
        <Notification toast={toast as Toast} />
      </div>
      {isSubmitting && <ProgressBar isLoading={isSubmitting} />}
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
                    onClick={handleSubmit}
                  >
                    Salvar
                  </HyperLink>
                </SubmitContainer>
              </Header>
              <Table data={data}></Table>
              <FooterContainer>
                <Button
                  $width="100"
                  $height="42"
                  $backgroundColor={Colors.white}
                  $color={Colors.darkBlue}
                  $borderColor={Colors.darkBlue}
                  onClick={handleSubmit}
                >
                  Salvar
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
              <UploadFileHeader>
                <HyperLink
                  $color={Colors.blue}
                  $fontSize="14"
                  $width="180px"
                  href="/b3-model.xlsx"
                >
                  Baixar o modelo
                </HyperLink>
              </UploadFileHeader>
              <UploadFileContainer>
                <IconContainer>
                  <Image
                    src={Icons.Xlsx}
                    alt="xlsx-icon"
                    width={100}
                    height={100}
                  />
                </IconContainer>

                <Input.File
                  label="Escolher arquivo"
                  $width={190}
                  $height={40}
                  isLoading={isReadingFile}
                  onChange={handleFileUpload}
                />
              </UploadFileContainer>
              <Footer>
                <Button
                  $width="100"
                  $height="42"
                  $backgroundColor={Colors.white}
                  $color={Colors.darkBlue}
                  $borderColor={Colors.darkBlue}
                  onClick={handleRedirect}
                >
                  Voltar
                </Button>
              </Footer>
            </>
          )}
        </TransactionCard>
      </Container>
    </>
  );
};

export default Add;
