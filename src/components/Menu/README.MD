## Conceito:
Nada mais é que uma tela com position absolute que ocupa toda a tela. Ela sempre esta montada e na cara, mas com opcidade 0. É uma div com componentes ja prontos, nada reutilizado.

## Funcionamento
1 - A tela para desktop não dá a opção de aparecer o botão para para abrir esse menu,

2 - Tudo funciona através do estado isOpen. Quando a barrinha do menu é apertada, a opacidade é aumentada, revelando o menu, quando o x é apertado, a opacidade é diminuida.

3 - o menu sempre fica abaixo, ele nunca some, apenas uma tela que ocupa toda a tela que aparece