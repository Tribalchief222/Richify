import { StepperForm } from '@/components/StepperForm';
import { Box, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
  const methods = useForm({});
  const [surveyCompleted, setSurveyCompleted] = useState(false);

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
          backgroundColor: '#faefdc',
        }}
      >
        {surveyCompleted ? (
          <Typography
            sx={{
              textAlign: 'center',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '35px'
            }}
          >
            Hurray, survey completed!
          </Typography>
        ) : (
          <>
            <Typography sx={{ fontSize: '30px', textAlign: 'center', marginTop: 4 }}>
              How much risk can you take
            </Typography>
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
                      type: 'typography',
                      label:
                        'Welcome to the Risk Profile Survey by RichifyTM. We will ask you 10 questions, should take about 5-6 minutes. There are no right or wrong responses to these questions. You know yourself the best! Are you ready?',
                      key: 'typography',
                    },
                  ],
                  onNext: async (values) => {
                    console.log('onNext called with:', { values, stepId: '1' });
                    alert(JSON.stringify({ values, stepId: '1' }, null, 2));
                    return true;
                  },
                  nextStepId: () => {
                    return '2';
                  },
                },
                {
                  id: '2',
                  schema: [
                    {
                      type: 'radio',
                      label: '1.What is your Age?',
                      options: [
                        {
                          value: 'Under 25',
                        },
                        {
                          value: '25 to 34',
                        },
                        {
                          value: '35 to 44',
                        },
                        {
                          value: '45 to 54',
                        },
                        {
                          value: '55 or older',
                        },
                      ],
                      key: 'radio',
                    },
                  ],
                  onNext: async (values) => {
                    console.log('onNext called with:', { values, stepId: '1' });
                    // alert(JSON.stringify({ values, stepId: '1' }, null, 2));
                    return true;
                  },
                  nextStepId: () => {
                    return '3';
                  },
                },
                {
                  id: '3',
                  schema: [
                    {
                      type: 'radio',
                      label: '2.What is your investment goal?',
                      key: 'radio',
                      options: [
                        {
                          value: 'Capital preservation',
                        },
                        {
                          value: 'Income',
                        },
                        {
                          value: 'Balance growth and income',
                        },
                        {
                          value: 'High growth',
                        },
                      ],
                    },
                  ],
                  onNext: async (values) => {
                    console.log('onNext called with:', { values, stepId: '1' });
                    // alert(JSON.stringify({ values, stepId: '1' }, null, 2));
                    return true;
                  },
                  nextStepId: () => {
                    return '4';
                  },
                  // isLastStep: true,
                },
                {
                  id: '4',
                  schema: [
                    {
                      type: 'radio',
                      label: '3.How long do you expect to invest before withdrawing month?',
                      key: 'radio',
                      options: [
                        {
                          value: 'Less than 2 years',
                        },
                        {
                          value: '2 - 5 years',
                        },
                        {
                          value: '5 - 10 years',
                        },
                        {
                          value: 'More than 10 years',
                        },
                      ],
                    },
                  ],
                  onNext: async (values) => {
                    console.log('onNext called with:', { values, stepId: '1' });
                    // alert(JSON.stringify({ values, stepId: '1' }, null, 2));
                    return true;
                  },
                  nextStepId: () => {
                    return '5';
                  },
                },
                {
                  id: '5',
                  schema: [
                    {
                      type: 'radio',
                      extra: '(a) if your investments fall by 20% due to a market-wide downturn?',
                      label: <Box>4.How would you react in the following scenarios?</Box>,
                      key: 'radio',
                      options: [
                        {
                          value: 'Sell all my investments',
                        },
                        {
                          value: 'Sell some',
                        },
                        {
                          value: 'Hold on to my investments',
                        },
                        {
                          value: 'Invest more',
                        },
                      ],
                    },
                  ],
                  onNext: async (values) => {
                    console.log('onNext called with:', { values, stepId: '1' });
                    // alert(JSON.stringify({ values, stepId: '1' }, null, 2));
                    return true;
                  },
                  nextStepId: () => {
                    return '6';
                  },
                },
                {
                  id: '6',
                  schema: [
                    {
                      type: 'radio',
                      label:
                        '4. How would you react in the following scenarios? (b) If your investments fall by 20% due to issues specific to the sector you’re holding? ',
                      key: 'radio',
                      options: [
                        {
                          value: 'Sell all my investments',
                        },
                        {
                          value: 'Sell some',
                        },
                        {
                          value: 'Hold on to my investments',
                        },
                        {
                          value: 'Investigate further before deciding',
                        },
                      ],
                    },
                  ],
                  onNext: async (values) => {
                    console.log('onNext called with:', { values, stepId: '1' });
                    // alert(JSON.stringify({ values, stepId: '1' }, null, 2));
                    return true;
                  },
                  nextStepId: () => {
                    return '7';
                  },
                },
                {
                  id: '7',
                  schema: [
                    {
                      type: 'radio',
                      label: '5. How would you describe your knowledge of investments? ',
                      key: 'radio',
                      options: [
                        {
                          value: 'Beginner',
                        },
                        {
                          value: 'Intermediate',
                        },
                        {
                          value: 'Advanced',
                        },
                      ],
                    },
                  ],
                  onNext: async (values) => {
                    console.log('onNext called with:', { values, stepId: '1' });
                    // alert(JSON.stringify({ values, stepId: '1' }, null, 2));
                    return true;
                  },
                  nextStepId: () => {
                    return '8';
                  },
                },
                {
                  id: '8',
                  schema: [
                    {
                      type: 'radio',
                      label:
                        '6. How do you feel about potentially losing money in the short term for the possibility of higher returns in the long term?  ',
                      key: 'radio',
                      options: [
                        {
                          value: 'Very uncomfortable',
                        },
                        {
                          value: 'Somewhat uncomfortable',
                        },
                        {
                          value: 'Neutral',
                        },
                        {
                          value: 'Comfortable',
                        },
                      ],
                    },
                  ],
                  onNext: async (values) => {
                    console.log('onNext called with:', { values, stepId: '1' });
                    // alert(JSON.stringify({ values, stepId: '1' }, null, 2));
                    return true;
                  },
                  nextStepId: () => {
                    return '9';
                  },
                },
                {
                  id: '9',
                  schema: [
                    {
                      type: 'radio',
                      label:
                        '7. How important is it to for you to preserve your capital, even if it means potentially lower returns? ',
                      key: 'radio',
                      options: [
                        {
                          value: 'Very important',
                        },
                        {
                          value: 'Somewhat important',
                        },
                        {
                          value: 'Neutral',
                        },
                        {
                          value: 'Not important',
                        },
                      ],
                    },
                  ],
                  onNext: async (values) => {
                    console.log('onNext called with:', { values, stepId: '1' });
                    // alert(JSON.stringify({ values, stepId: '1' }, null, 2));
                    return true;
                  },
                  nextStepId: () => {
                    return '10';
                  },
                },
                {
                  id: '10',
                  schema: [
                    {
                      type: 'radio',
                      label: '8. What is your primary income source (excluding investments)? ',
                      key: 'radio',
                      options: [
                        {
                          value: 'Unstable (frequent job changes, no stable income)',
                        },
                        {
                          value: 'Somewhat stable (self-employed or contractual)',
                        },
                        {
                          value: 'Stable (employed or retirement income)',
                        },
                      ],
                    },
                  ],
                  onNext: async (values) => {
                    console.log('onNext called with:', { values, stepId: '1' });
                    // alert(JSON.stringify({ values, stepId: '1' }, null, 2));
                    return true;
                  },
                  nextStepId: () => {
                    return '11';
                  },
                },
                {
                  id: '11',
                  schema: [
                    {
                      type: 'radio',
                      label:
                        '9. In terms of your financial situation, how much can you afford to lose without affecting your standard of living? ',
                      key: 'radio',
                      options: [
                        {
                          value: 'Nothing',
                        },
                        {
                          value: 'A small amount',
                        },
                        {
                          value: 'A moderate amount',
                        },
                        {
                          value: 'A substantial amount',
                        },
                      ],
                    },
                  ],
                  onNext: async (values) => {
                    console.log('onNext called with:', { values, stepId: '1' });
                    // alert(JSON.stringify({ values, stepId: '1' }, null, 2));
                    return true;
                  },
                  nextStepId: () => {
                    return '12';
                  },
                },
                {
                  id: '12',
                  schema: [
                    {
                      type: 'radio',
                      label: '10. How do you view risk in general? ',
                      key: 'radio',
                      options: [
                        {
                          value: 'Avoid at all costs',
                        },
                        {
                          value: 'Willing to take small risks',
                        },
                        {
                          value: 'Comfortable with moderate riskse',
                        },
                        {
                          value: 'Willing to take significant risks',
                        },
                      ],
                    },
                  ],
                  // onNext: async (values) => {
                  //   console.log('onNext called with:', { values, stepId: '1' });
                  //   // alert(JSON.stringify({ values, stepId: '1' }, null, 2));
                  //   return true;
                  // },
                  isLastStep: true,
                },
              ]}
              onSubmit={async (values) => {
                console.log(values);
                setSurveyCompleted(true);
              }}
              form={methods}
            />
          </>
        )}
      </Box>
    </Container>
  );
};

export default Home;
