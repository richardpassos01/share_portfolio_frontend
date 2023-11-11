import React, { useState } from 'react';
import BffEndpoints from '@constants/BffEndpoints';
import {
  AddContainer,
  Footer,
  Header,
  HeaderDescription,
  HeaderTitle,
  LinkContainer,
} from './Add.styles';
import fetchBff from '@utils/fetchBff';
import {
  Button,
  Colors,
  HyperLink,
  Notification,
  Toast,
  Card,
  Containers,
  SelectBox,
} from '@designSystem';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';
import { ToastMessages } from '@constants/ToastMessages';

const Add: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast | {}>({});
  const [selectedOption, setSelectedOption] = useState('');

  const handleRedirect = () => {
    router.push(Routes.DASHBOARD);
  };

  const handleOptions = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    try {
      setIsSubmitting(true);

      // await fetchBff(
      //   BffEndpoints.RESYNC.replace(':institutionId') as BffEndpoints,
      //   'POST',
      //   data,
      // );

      setToast({
        message: ToastMessages.SUCCESS,
        type: 'success',
      });
    } catch (error) {
      setToast({
        message: ToastMessages.ERROR,
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Notification toast={toast as Toast} />
      <Containers.CardContainer>
        <Card $height="350px">
          <Header>
            <HeaderTitle>Adicionar nova instituição</HeaderTitle>
          </Header>

          <AddContainer>
            <SelectBox
              label={selectedOption || 'Escolha a instituição'}
              options={['Banco Inter', 'Banco Pan']}
              selectedOptions={[selectedOption]}
              handleOptions={handleOptions}
              $width="250"
              $mobileWidth="296"
              $labelSize={16}
              $optionsSize={14}
            />
          </AddContainer>

          <Footer>
            <LinkContainer>
              <HyperLink
                $color={Colors.blue}
                $fontSize="14"
                $width="80px"
                onClick={handleSubmit}
              >
                Cancelar
              </HyperLink>
            </LinkContainer>

            <Button
              $width="150"
              $height="42"
              $backgroundColor={Colors.white}
              $color={Colors.darkBlue}
              $borderColor={Colors.darkBlue}
              onClick={handleRedirect}
              $isLoading={isSubmitting}
            >
              Salvar
            </Button>
          </Footer>
        </Card>
      </Containers.CardContainer>
    </>
  );
};

export default Add;
