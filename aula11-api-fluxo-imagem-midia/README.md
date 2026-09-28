# 🚀 Aula 11 — API de Upload de Imagens com NestJS

Nesta aula foi desenvolvido um sistema de **upload de imagens utilizando NestJS**, permitindo receber arquivos através de uma requisição HTTP, validar seus formatos e tamanhos, armazená-los no servidor e disponibilizá-los por meio de uma URL.

## 📚 Conteúdos desenvolvidos

- 📤 Implementação de upload de arquivos utilizando `FileInterceptor` e `@UploadedFile()`.
- 🖼️ Criação do `MediaController` responsável pelo gerenciamento dos uploads.
- 📁 Criação da pasta `uploads` para armazenamento das imagens enviadas.
- 🔐 Geração de nomes únicos para os arquivos utilizando `UUID`, evitando conflitos entre arquivos com o mesmo nome.
- 📏 Configuração do limite máximo de **2 MB por arquivo**.
- 🧩 Validação dos formatos permitidos:
  - `.jpg`
  - `.jpeg`
  - `.png`
  - `.gif`
  - `.webp`
- ⚠️ Utilização de `BadRequestException` para tratar arquivos inválidos ou quando nenhum arquivo é enviado.
- 🌐 Configuração do `useStaticAssets` no `main.ts` para disponibilizar as imagens armazenadas na pasta `uploads`.
- 🔗 Retorno das informações do arquivo após o upload:
  - Nome do arquivo;
  - Tamanho;
  - URL para acesso.
- 🧱 Criação do `MediaModule` para organizar o módulo responsável pelo upload.

## ⚙️ Estrutura principal

```text
src/
├── media.controller.ts
├── media.module.ts
├── main.ts
├── app.controller.ts
├── app.module.ts
└── app.service.ts

uploads/
└── imagens enviadas