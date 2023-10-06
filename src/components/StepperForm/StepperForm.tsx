import { Box, Button, Grid } from '@mui/material';
import { get } from 'lodash';
import { useMemo, useState } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import RenderField from '../RenderField/RenderField';
import { StepperSchema } from './types';


const getCurrentStepFields = (schema: StepperSchema, activeStep: string) => {
  const currentStepIndex = schema.findIndex((step) => step.id === activeStep);
  return schema[currentStepIndex].schema.map((field) => field.key);
};

const getSchema = (schema: StepperSchema, id: string) => {
  const currentStepIndex = schema.findIndex((step) => step.id === id);
  return schema[currentStepIndex];
};

/**
 *
 * @description Render stepper form using Material UI and react-hook form
 *  - When user click on next button, it will validate the current step
 *  - If the current step is valid, it will call onNext callback
 *  - onNext callback will receive the current step id and values
 *  - onNext will return a Promise<boolean> to indicate whether the next step should be rendered
 *  - If onNext returns true, the next step will be rendered
 *  - If onNext returns false, the next step will not be rendered
 *  - When user click on submit button, it will validate the current step
 *  - If the current step is valid, it will call onSubmit callback
 *  - onSubmit callback will receive the values
 *  - onSubmit will return a Promise<void>
 */
export const StepperForm = ({
  schema,
  onSubmit,
  form,
}: {
  schema: StepperSchema;
  onSubmit: (arg: { values: Record<string, unknown> }) => Promise<void>;
  form: UseFormReturn;
}) => {
  const [activeStepId, setActiveStepId] = useState(schema[0].id);
  const activeSchema = useMemo(() => getSchema(schema, activeStepId), [activeStepId, schema]);
  /**
   * Validate fields in the current step
   */
  const handleNext = async () => {
    const currentStepFields = getCurrentStepFields(schema, activeStepId);
    const isValid = await form.trigger(currentStepFields);
    if (isValid) {
      // @ts-expect-error we are dumb
      const shouldRenderNext = activeSchema.onNext
      // @ts-expect-error we are dumb
        ? await activeSchema.onNext({ stepId: activeStepId, values: get(form.getValues(), currentStepFields) })
        : true;
        console.log("onNext called, shouldRenderNext:", shouldRenderNext);
      if (shouldRenderNext && !activeSchema.isLastStep) {
        const nextStepId = activeSchema.nextStepId(form.getValues());
        setActiveStepId(nextStepId);
      }
    }
  };

  const handleSubmit = async () => {
    const currentStepFields = getCurrentStepFields(schema, activeStepId);
    const isValid = await form.trigger(currentStepFields);
    if (isValid) {
      await onSubmit({ values: form.getValues() });
    }
  };

  return (
    <FormProvider {...form}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {activeSchema.schema.map((field) => (
            <RenderField field={field} key={field.key} />
          ))}
        </Grid>
        <Grid item xs={12}>
          <Box sx={{position: 'relative'}}>
          <Box display="flex" justifyContent="flex-end" sx={{position: 'fixed', right: '26%', bottom: '20%' , width: '40%'}}>
            {activeSchema.isLastStep ? (
              <Button sx={{
                  paddingX: 2,
                  paddingY: 2,
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "#dd5914",
                  backgroundColor: "#dd5914",
                  color: "white",
                  borderRadius: "100px",
                  width: "25%",
                  transition:
                    "border-color 0.6s ease-in-out, background-color 0.6s ease-in-out, background 0.6s ease-in-out",

                  "&:hover": {
                    borderColor: "orange",
                    backgroundColor: "rgb(251,211,63)",
                    background:
                      "radial-gradient(circle, rgba(251,211,63,1) 16%, rgba(252,128,70,0.891281512605042) 91%)",
                  },
                }} onClick={handleSubmit}>
                Submit
              </Button>
            ) : (
              <Button 
              sx={{
                paddingX: 2,
                paddingY: 2,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#dd5914",
                backgroundColor: "#dd5914",
                color: "white",
                borderRadius: "100px",
                width: "25%",
                transition:
                  "border-color 0.6s ease-in-out, background-color 0.6s ease-in-out, background 0.6s ease-in-out",

                "&:hover": {
                  borderColor: "orange",
                  backgroundColor: "rgb(251,211,63)",
                  background:
                    "radial-gradient(circle, rgba(251,211,63,1) 16%, rgba(252,128,70,0.891281512605042) 91%)",
                },
              }}
               onClick={handleNext}>
                Next
              </Button>
            )}
          </Box>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  );
};
