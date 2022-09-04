6 - Qual a diferença entre um processo assíncrono e síncrono?

Um processo síncrono executa funções "de cima para baixo, passo a passo, um por um", de forma síncrona.
Um processo assíncrono pode iniciar um processo num momento 'n' e finaliza-lo num momento 'n+i'. Um exemplo de processo assíncrono seria uma request, já que essa ação é passada para uma thread separada, e o código depois do request continuará executando as próximas funções a que ele foi imposto.
Um fluxo assíncrono ocorre independente do fluxo principal, sem prende-lo ao resultado do processo. Em termos de visão de usuário, você não prende o usuário a um processamento demorado, mitigando a sensação de lentidão e travamento.