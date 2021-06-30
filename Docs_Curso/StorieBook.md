## Colocando action (tudo esta no checkbox)

**Primeiro faz um componente que suporta action**

**Depois coloca como argtypes e um texto qualquer**
export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;


## Separando os stories:

*Só colcoar nos stories do componente algo como*
title: 'Form/Checkbox',
args: {},
... resto


## Fazendo uma nova opção nos stories:

**Opção padrão**
export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

**Nova opção com o nome withError**
export const withError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

withError.args = {
  error: 'Ops...something is wrong',
};
