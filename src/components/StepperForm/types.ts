import { FieldValues } from 'react-hook-form';
import { FieldsType } from '../RenderField/types';

/**
 * isLastStep is false or not present then nextStepId is required
 * other nextStepId should not be present
 */
export type StepperSchema = Array<
  {
    id: string;
    schema: Array<FieldsType>;
    // nextStepId: (values: FieldValues) => string;
    // isLastStep?: boolean;
  } & (
    | {
      onNext: (arg: { stepId: string; values: Record<string, unknown> }) => Promise<boolean>;
      nextStepId: (values: FieldValues) => string;
        isLastStep?: false;
      }
    | {
        nextStepId?: never;
        isLastStep: true;
      }
  )
>;
