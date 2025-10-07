# DSM-0002-adicionar-linkedin

Tipo de mudança: Padrão
Repositório: https://github.com/gustavobueno/portfolio

Branch: feat/adicionar-linkedin-no-footer
Responsável: Gustavo Bueno — Data: 2025-10-07

## 1. Contexto e problema

O portfólio atualmente não possui um link direto para o perfil profissional no LinkedIn, dificultando o contato com recrutadores.

## 2. Hipótese e valor esperado (falsificável)

Se adicionarmos um link do LinkedIn no rodapé do site, então esperamos aumentar a visibilidade profissional e o número de acessos ao perfil pois isso facilita o contato direto de visitantes interessados.

## 3. Escopo

Arquivo afetado: index.html (ou footer.html se o projeto for modular).
Mudança isolada no rodapé; não afeta outras seções.

## 4. Risco e mitigação

Risco: erro de link ou ícone desalinhado.

Mitigação: revisar visualmente no navegador antes do merge.

## 5. Plano de rollout e rollback

Rollout: (i) editar footer; (ii) testar visual; (iii) abrir PR com evidência.

Rollback: se o link estiver incorreto ou quebrar o layout → reverter commit.

## 6. Métricas, SLIs e critérios de sucesso

Métrica: link funcional e visível.

Critério de sucesso: 100% de funcionalidade após 3 acessos testados em navegadores diferentes.

Janela de observação: 24h.

## 7. Aprovação proporcional ao risco

Revisor: @colega. Aprovação via PR.

## 8. Rastreabilidade

Issue/CR: #15

Commits: a7b8c9d

PR: #16 — Release/Tag: v1.2.0

## 9. Evidências (anexos)

Screenshot do footer exibindo o ícone e o link do LinkedIn.

Log do commit mostrando a alteração no HTML.

## 10. Pós-mudança (review breve)

Mudança simples e funcional; próxima melhoria: adicionar links para GitHub e currículo em PDF.

---

### Checklist de risco (marcar)
- [X] Mudança pequena e isolada  
- [X] Plano de rollback testado  
- [X] Critérios de sucesso objetivos definidos  
- [X] Observabilidade/evidência preparada  
- [X] Aprovação de par registrada no PR