import React, { useState } from 'react';
import BffEndpoints from '@constants/BffEndpoints';
import {
  AddContainer,
  Footer,
  Header,
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
  Input,
} from '@designSystem';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Routes from '@constants/Routes';
import { ToastMessages } from '@constants/ToastMessages';
import { useInstitution } from '@hooks/useInstitution';

const Add: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast | {}>({});
  const [institutionName, setInstitutionName] = useState('');
  const { setInstitution } = useInstitution();

  const handleRedirect = () => {
    router.push(Routes.DASHBOARD);
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    try {
      setIsSubmitting(true);

      const result = await fetchBff(
        BffEndpoints.CREATE_INSTITUTION.replace(
          ':userId',
          session?.user.id ?? '',
        ) as BffEndpoints,
        'POST',
        { name: institutionName },
      );

      setToast({
        message: ToastMessages.SUCCESS,
        type: 'success',
      });

      setInstitution({
        id: result.id,
        name: institutionName,
      });

      return handleRedirect();
    } catch (error) {
      setToast({
        message: ToastMessages.ERROR,
        type: 'error',
      });
      setIsSubmitting(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInstitutionName(event.target.value);
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
            <Input.Inline
              placeholder="Ex: Banco inter"
              value={institutionName}
              onChange={handleChange}
            />
          </AddContainer>

          <Footer>
            <LinkContainer>
              <HyperLink
                $color={Colors.blue}
                $fontSize="14"
                $width="80px"
                onClick={handleRedirect}
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
              onClick={handleSubmit}
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
