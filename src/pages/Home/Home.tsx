import { StepperForm } from '@/components/StepperForm';
import { Container } from '@mui/material';
import { useForm } from 'react-hook-form';

const Home = () => {
  const methods = useForm({});
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
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
                label: 'First Name',
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
            isLastStep: true,
          },
        ]}
        onSubmit={async (values) => {
          console.log(values);
        }}
        form={methods}
      />
    </Container>
  );
};

export default Home;
