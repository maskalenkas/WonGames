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