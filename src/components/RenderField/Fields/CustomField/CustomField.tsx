import { CustomFieldSchema } from './types';

export const CustomField = ({ field }: { field: CustomFieldSchema }) => {
  const { Component } = field;

  return <Component field={field} />;
};
