# Instruções rápidas para agentes AI (Copilot)

Objetivo: ajudar agentes a serem produtivos rapidamente neste repositório — um site estático com um validador de formulário simples.

Visão geral
- Projeto: página estática com formulário de cadastro e validação no cliente.
- Arquivos principais: [index.html](index.html), [src/js/script.js](src/js/script.js), [src/css/style.css](src/css/style.css).

Arquitetura e fluxo
- Validação orientada ao DOM: o objeto `validator` em `src/js/script.js` controla `handleSubmit`, `checkInput`, `showError` e `clearErrors`.
- Inputs usam o atributo `data-rules` com sintaxe `rule|rule=value` (ex.: `required|min=3|max=15`). `checkInput` faz o parse e aplica regras.
- Se `checkInput` retornar `true`, o `form.submit()` é chamado; caso contrário, `showError` exibe mensagem.

Padrões e convenções do projeto
- Regras declarativas: adicione validações aos elementos no HTML via `data-rules` em [index.html](index.html).
- Apresentação de erro: o CSS espera que a estrutura de erro utilize a classe `form-control.error` e o elemento `small` para a mensagem (veja `src/css/style.css`).
- Observação: o código atual adiciona um elemento `.error` dinamicamente em vez de trabalhar com o `small` já presente — fique atento a essa inconsistencia ao modificar UX/estilos.

Exemplos rápidos (como estender)
- Para adicionar nova regra (ex.: `email`): editar `src/js/script.js` dentro de `checkInput` e adicionar um `case "email":` com a verificação necessária.

Erros detectados (pontos a checar antes de enviar PR)
- `showError` usa `input.ElementSibling` — provavelmente deveria ser `input.nextElementSibling` ou manipular o `.form-control small`.
- `clearErrors` referencia `errorElement` sem declarar `let`/`const` local na iteração.

Fluxo de desenvolvimento / testes
- Não há build toolchain. Para testar localmente, abra o projeto via servidor HTTP (WAMP, Live Server / Five Server no VS Code) em vez de abrir o arquivo diretamente para evitar problemas com submissão/rota.
- Use o DevTools do navegador para inspecionar DOM, console para erros de JS, e testar `data-rules` em tempo real.

Onde mudar coisas com segurança
- Lógica de validação: [src/js/script.js](src/js/script.js).
- Marcações e regras: [index.html](index.html).
- Aparência e estados (`error`/`success`): [src/css/style.css](src/css/style.css).

Ao editar, prefira alterações pequenas e verifique no navegador. Se for alterar a forma como erros são exibidos, ajuste simultaneamente o JS e o CSS para manter consistência.

Feedback
Se algo estiver faltando (comandos de deploy, dependências externas, ou scripts de teste), diga o que você usa localmente e eu atualizo estas instruções.
