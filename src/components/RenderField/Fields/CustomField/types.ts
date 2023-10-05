export type CustomFieldSchema = {
  type: 'custom';
  Component: React.FC<{
    field: CustomFieldSchema;
  }>;
  props: Record<string, unknown>;
  key: string;
};
