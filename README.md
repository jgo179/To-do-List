# 📝 To-Do List App

Uma aplicação web moderna de gerenciamento de tarefas construída com **Next.js 16**, **React 19** e **Tailwind CSS**. Persiste dados localmente usando `localStorage` e oferece uma experiência de usuário intuitiva e responsiva.

## ✨ Features

- ✅ **Adicionar tarefas** - Crie novas tarefas com validação de comprimento (3-100 caracteres)
- ✅ **Marcar como concluída** - Toggle visual com checkmark verde
- ✅ **Deletar tarefas** - Remova tarefas individuais com um clique
- ✅ **Limpar lista** - Limpe todas as tarefas de uma vez
- ✅ **Persistência local** - Dados salvos automaticamente em localStorage
- ✅ **Design responsivo** - Funciona em desktop, tablet e mobile
- ✅ **Scroll customizado** - ScrollArea com scrollbar sempre visível (Radix UI)
- ✅ **Acessibilidade** - Suporte a `aria-invalid` e validação em tempo real

## 🚀 Tech Stack

| Tecnologia          | Versão | Propósito                        |
| ------------------- | ------ | -------------------------------- |
| **Next.js**         | 16.2.3 | Framework React fullstack        |
| **React**           | 19.2.4 | Biblioteca UI                    |
| **TypeScript**      | 5      | Type safety                      |
| **Tailwind CSS**    | 4      | Styling com utility-first CSS    |
| **Radix UI**        | 1.4.3  | Componentes headless             |
| **shadcn/ui**       | 4.3.0  | Componentes UI de alta qualidade |
| **React Hook Form** | 7.72.1 | Gerenciamento de formulários     |
| **Lucide React**    | 1.8.0  | Ícones SVG                       |

## 📋 Pré-requisitos

- **Node.js** 18+ ou **pnpm** 8+
- Navegador moderno com suporte a `localStorage`

## 🔧 Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd 02-to-do

# Instale as dependências
pnpm install
# ou
npm install
```

## 🏃 Como Executar

### Desenvolvimento

```bash
pnpm dev
```

Acesse em [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
pnpm build
pnpm start
```

### Linting

```bash
pnpm lint
```

## 🎨 Componentes Principais

### Home Component (`app/page.tsx`)

Componente principal que gerencia:

- **Estado**: Lista de tarefas + flag de carregamento
- **Persistência**: Sincronização com localStorage
- **Validação**: Uso de React Hook Form com regras customizadas
- **Eventos**: Adicionar, marcar, deletar e limpar tarefas

## 🎯 Fluxo da Aplicação

```
1. Inicialização
   ↓
2. Carregar dados do localStorage (useEffect)
   ↓
3. Renderizar lista de tarefas
   ↓
4. Usuário interage (adiciona/marca/deleta)
   ↓
5. Estado atualiza
   ↓
6. localStorage sincroniza automaticamente
```

# 📱 Responsividade

A aplicação é **100% responsiva** usando:

- Tailwind CSS responsive classes
- Flexbox para layouts dinâmicos
- Breakpoints mobile-first
- ScrollArea adaptável

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

**Jonathan Oliveira** - 2026

- GitHub: [@jgo179](https://github.com/jgo179)
