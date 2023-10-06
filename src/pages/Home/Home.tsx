import { StepperForm } from '@/components/StepperForm';
import { Box, Container } from '@mui/material';
import { useForm } from 'react-hook-form';

const Home = () => {
  const methods = useForm({});
  return (
    <Container
      sx={{
        py: 2,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          width: '800px',
          height: '550px',
          borderRadius: 5,
          borderColor: 'white',
          borderWidth: 2,
          borderStyle: 'solid',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <StepperForm
          onNext={async ({ stepId, values }) => {
            alert(JSON.stringify({ values, stepId }, null, 2));
            return true;
          }}
          schema={[
            {
              id: '1',
              schema: [
                {
                  type: 'text',
                  label: 'First Name , (a) Last name',
                  key: 'firstName',
                  rules: {
                    required: 'First Name is required',
                  },
                },
              ],
              nextStepId: () => {
                return '2';
              },
            },
            {
              id: '2',
              schema: [
                {
                  type: 'text',
                  label: 'Mobile No.',
                  key: 'mobileNo',
                },
              ],
              nextStepId: () => {
                return '3';
              },
            },
            {
              id: '3',
              schema: [
                {
                  type: 'radio',
                  label: 'radio',
                  key: 'radio',
                },
              ],
              isLastStep: true,
            },
          ]}
          onSubmit={async (values) => {
            console.log(values);
          }}
          form={methods}
        />
      </Box>
    </Container>
  );
};

export default Home;
