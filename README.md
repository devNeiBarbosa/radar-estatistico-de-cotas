# Radar Estatístico de Cotas — Base Fase 1

Esta entrega é uma **BASE ESTRUTURAL COMPLETA PARA TESTE LOCAL** do projeto Radar Estatístico de Cotas.

O objetivo da Fase 1 é criar uma fundação organizada em Next.js App Router, TypeScript, Tailwind CSS, Prisma e PostgreSQL via Neon, sem avançar para importação de resultados, automações, login, geração de PDF ou análises reais.

## Aviso importante sobre validação

Este ZIP **não foi buildado, compilado ou executado neste ambiente**, porque o ambiente atual não permite instalar dependências, executar `npm install`, rodar build ou testar o Next.js localmente.

A estrutura foi criada para você baixar, instalar as dependências no seu computador e testar localmente.

## Stack prevista

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL via Neon
- Vercel

## Como instalar dependências localmente

Dentro da pasta do projeto, execute:

```bash
npm install
```

## Como configurar o DATABASE_URL

Crie um arquivo `.env` na raiz do projeto usando o `.env.example` como referência:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST.neon.tech/DBNAME?sslmode=require"
```

Use a string de conexão real do seu banco PostgreSQL no Neon.

## Como gerar o Prisma Client

Depois de configurar o `.env`, execute:

```bash
npx prisma generate
```

## Como criar a primeira migration

Execute:

```bash
npx prisma migrate dev --name init
```

## Como rodar o projeto localmente

Execute:

```bash
npm run dev
```

Depois acesse o endereço local informado pelo Next.js no terminal.

## Escopo desta Fase 1

Incluído nesta base:

- Estrutura inicial do Next.js App Router.
- Layout premium com sidebar, header, cards e páginas principais.
- Páginas institucionais e placeholders inteligentes.
- Schema Prisma para PostgreSQL/Neon.
- Modelos `FederalDraw`, `DrawNumber`, `ConsortiumQuota` e `QuotaAnalysis`.
- Enum `QuotaStatus`.
- Arquivo `.env.example`.
- Orientação de instalação local.

Não incluído nesta fase:

- Importação da Loteria Federal.
- Automação de coleta de dados.
- Login.
- Geração de PDF.
- Dados falsos apresentados como reais.
- Cálculo real de score.
- Build validado.

## Restrição jurídica e linguagem do projeto

O sistema deve ser tratado como uma ferramenta consultiva baseada em análise histórica de frequência.

Evite qualquer promessa de contemplação. A comunicação deve reforçar:

- análise histórica de frequência;
- indicador estatístico de apoio;
- região com maior frequência histórica nos dados analisados;
- sem garantia de contemplação;
- ferramenta consultiva.
