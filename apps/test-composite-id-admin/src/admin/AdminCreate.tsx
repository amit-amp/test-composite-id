import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const AdminCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Email" source="email" />
        <NumberInput step={1} label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
