import { Box, Button } from '@mui/material';
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
  onNext,
  onSubmit,
  form,
}: {
  schema: StepperSchema;
  onNext?: (arg: { stepId: string; values: Record<string, unknown> }) => Promise<boolean>;
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
      const shouldRenderNext = onNext
        ? await onNext({ stepId: activeStepId, values: get(form.getValues(), currentStepFields) })
        : true;
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
      <Box>
        {activeSchema.schema.map((field) => (
          <RenderField field={field} key={field.key} />
        ))}
        {activeSchema.isLastStep ? (
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        )}
      </Box>
    </FormProvider>
  );
};
