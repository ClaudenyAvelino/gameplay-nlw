## Configurações do ambiente

#### Preparando o ambiente
#### Teremos três etapas principais na seção "Instalação":
- Node + NPM;
- Yarn;
- Expo;
- Visual Studio Code e configurações.

## Windows
Para o Windows utilizaremos o gerenciador de pacotes **[Chocolatey](https://chocolatey.org/)**, porém antes dos passos de instalação vamos falar brevemente sobre qual shell você deve usar.

- **CMD**: também conhecido como **Command Prompt**, ele é um dos shells mais antigos da atualidade (foi construído para ser compatível com o **MS-DOS**) e, apesar da sua fama, hoje em dia tem sido cada vez menos utilizado.
- **Powershell**: novo shell apresentado pela Microsoft por volta de 2005, ele apresenta diversas melhorias em relação ao **CMD**, tornando-o popular atualmente.

Escolhido o shell, vamos começar a instalação:

- Busque no campo de busca do Windows por **Windows Powershell**, clique com o botão direito em cima do programa e escolha a opção **Executar como administrador**.
- O Powershell trabalha com um esquema de autorizações (conhecido como `Execution Policy`) para execução de scripts e, por isso, precisamos verificar se o presente no sistema está compatível com o que o Chocolatey precisa. Execute o seguinte comando:

```bash
Get-ExecutionPolicy
```

Caso ele retorne `Restricted`, execute o comando:

```bash
Set-ExecutionPolicy RemoteSigned
```

E escolha a opção `[A] Sim para Todos`

Caso o comando acima apresente erro, tente usar:

`Set-ExecutionPolicy Bypass -Scope Process`

Verifique se alteração de permissão ocorreu com sucesso executando novamente o comando:

```bash
Get-ExecutionPolicy
```

Alterada a permissão, basta instalar o **Chocolatey** com o comando:

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

Caso o comando acima apresente um erro, verifique se a sua máquina atende às requisições mínimas

`Windows 7+ / Windows Server 2003+
PowerShell v3+
.NET Framework 4.5+`

Caso o erro apresentado seja `Exceção ao definir "SecurityProtocol": "Não é possível converter o valor "3312"`, siga **[esse guia](https://blog.chocolatey.org/2020/01/remove-support-for-old-tls-versions/).**

- Após o fim da instalação, feche e abra o powershell como administrador novamente e execute:

```bash
choco -v
```

Caso ele retorne a versão do **Chocolatey**, a instalação foi um sucesso. Para finalizar, basta instalar a versão LTS mais recente do Node com o seguinte comando:

```bash
cinst nodejs-lts
```

E escolha a opção `[A]ll - yes to all`

Após o fim da instalação, feche e abra o powershell como administrador novamente e execute:

```bash
node -v
npm -v
```

Caso retorne as versões do Node e npm, sua instalação foi um sucesso.

# Yarn 1

## Windows, Linux e macOS

Para instalar o Yarn 1 siga os seguintes passos, execute o comando no terminal:

```bash
 npm install --global yarn
```

Após a instalação finalizar, feche e abra o terminal novamente, em seguida rode o comando:

```bash
 yarn --version
```

Caso retorne a versão do Yarn (acima de 1.0 e abaixo de 2.0), a instalação ocorreu com sucesso.

### Possíveis problemas

Ao usar o Yarn no Windows para instalar as dependências nos seus projetos, atente-se para que seu nome de usuário não possua espaços, pois nesse caso, alguns erros poderão ocorrer durante esse processo, como por exemplo: com o nome "Diego Fernandes", o caminho até a pasta do projeto (supondo que estivesse na pasta *Documents*) seria algo como `C:\Users\Diego Fernandes\Documents\NLW\Projeto` e nesse caso, uma solução seria criar o projeto já na raiz do **Disco C**. Dessa forma, o caminho até a pasta não passaria pelo nome do usuário, ficando `C:\NLW\Projeto`.

# Expo

Para instalar o Expo é bem simples e o passo é o mesmo nos 3 sistemas operacionais. 

- Com o Node e Yarn instalados, abra o terminal (no Windows, sem ser como admin) e execute:

```bash
yarn global add expo-cli
```

Caso você prefira utilizar o npm, basta executar:

`npm install expo-cli --global`

- Para verificar se a instalação ocorreu com sucesso, execute:

```bash
expo --version
```

Caso o comando resulte no erro `expo : O arquivo C:\Users\xxxx\AppData\Roaming\npm\expo.ps1 não pode ser carregado`, verifique se o **ExecutionPolicy** está configurado como `RemoteSigned`.

Se retornar a versão da cli do Expo, a instalação ocorreu com sucesso.

Caso a instalação da expo-cli como global no Yarn apareça que ocorreu com sucesso mas ao tentar utilizar o expo diz que o comando não existe, verifique no Linux e no macOS se você adicionou a linha `export PATH="$PATH:`yarn global bin`"` ao arquivo de configuração do seu terminal.

Se na instalação ou utilização do Expo você enfrentou algum erro não previsto nesse guia, no nosso GitHub existe um repositório que trata de problemas comuns e você pode procurar pela solução a partir do seguinte link:

[Rocketseat/expo-common-issues](https://github.com/Rocketseat/expo-common-issues)

# Visual Studio Code

Para instalar o editor de texto Visual Studio Code em qualquer um dos 3 sistemas operacionais, basta [acessar o site](https://code.visualstudio.com/), baixar e rodar o executável.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9dddb31-2111-4767-9e21-2c3f5f5fc85a/vscode.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9dddb31-2111-4767-9e21-2c3f5f5fc85a/vscode.gif)

Com a instalação finalizada, abra o programa. Você deve se deparar com uma interface parecida com essa:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bf9ea041-d406-47c3-848e-18c53e9605e7/1-welcome.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bf9ea041-d406-47c3-848e-18c53e9605e7/1-welcome.png)

Feche a página **Welcome**. Para deixar a sua experiência ainda melhor, vamos passar para você algumas extensões e configurações do VS Code.

## Fonte

Essa não é uma etapa obrigatória, mas se você quer uma fonte mais personalizada e com todos aqueles símbolos especiais quando combinamos alguns caracteres, basta seguir alguns passos:

### JetBrains Mono

- A fonte utilizada nas aulas se chama JetBrains Mono e pode ser baixada gratuitamente no site da JetBrains através do seguinte link:

[JetBrains Mono: A free and open source typeface for developers](https://www.jetbrains.com/lp/mono/)

1 - Após baixar, extraia o arquivo e acesse a pasta `ttf`.

2 - Para instalar a fonte:

- **Windows**

    Selecione todos os arquivos que terminam com **.ttf**, clique com o botão direito do mouse e selecione **Instalar**.

- **Linux**

    Extraia as fontes para `~/.local/share/fonts` ou `/usr/share/fonts` para instalar as fontes no sistema e execute `fc-cache -f -v` no terminal.

- **Mac**

    Selecione todos os arquivos de fontes (aqueles que possuem a extensão **.ttf**), dê um duplo clique neles e clique no botão **Instalar Fonte**.

3 - O próximo passo é configurar a fonte para ser usada no Visual Studio Code. Após ter realizado as demais instalações, você poderá encontrar as configurações da fonte na seção **[Configurações](https://www.notion.so/Instala-o-das-ferramentas-d0ae754d04794235beecdd7331d480b5)**.

### Usando as Font Ligatures

Uma das características dessa fonte é que ela possui suporte às font ligatures que é uma funcionalidade que permite combinarmos símbolos para formar um novo.

Aqui você verá como são formados os símbolos mais comuns usados durante a NLW para que não fique confuso quando ver algo diferente:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a9d8c2af-1b3c-410b-b359-825ca02e1de2/fontLigatures.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a9d8c2af-1b3c-410b-b359-825ca02e1de2/fontLigatures.png)

## Extensões

Extensões são formas de adicionar ainda mais funcionalidades ao seu Visual Studio Code.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b296ac36-a8dd-4117-a1e0-b7999e1990ea/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b296ac36-a8dd-4117-a1e0-b7999e1990ea/Untitled.png)

Vamos citar 2 aqui para você:

### Omni

Nada melhor do que começar pelo tema do editor. Nós desenvolvedores trabalhamos diariamente, horas e horas, com o editor de código. Por isso, é muito importante escolher uma aparência para o Visual Studio Code que não canse demais os olhos e ao mesmo tempo realce bem o texto. É por isso que a Rocketseat decidiu criar (baseado no nosso querido Dracula) o seu próprio tema: **Omni**

**Como instalar? ⬇️**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76bd3f8f-1b2c-4ec4-bd6d-b92270cabd24/omni.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76bd3f8f-1b2c-4ec4-bd6d-b92270cabd24/omni.gif)

### Material Icon Theme

O **Material Icon Theme** é uma extensão que permite a customização dos ícones das pastas por extensões de arquivos, por exemplo, com ele conseguimos customizar um ícone para arquivos **Typescript**, outro para **Javascript,** outro para **HTML** e assim por diante. 

**Como instalar? ⬇️**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f235cd7c-7840-4e60-8d4e-81643dfe0895/materialicone.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f235cd7c-7840-4e60-8d4e-81643dfe0895/materialicone.gif)

## Configurações

Para finalizar, vamos adicionar algumas configurações no Visual Studio Code. Para isso, basta pressionar `Ctrl + Shift + P` e escolher a opção `Open Settings (JSON)`. Na janela que foi aberta, adicione as configurações abaixo:

É preciso tomar alguns cuidados ao realizar essas alterações. Verifique se a configuração adicionada já não existe no arquivo. Se sim, apenas atualize o valor. 

Verifique também se a todas as linhas de configuração **exceto a última** terminam com vírgula, para não gerar erro. 

Por fim, caso queira substituir completamente a sua configuração pela abaixo, envolva com chaves `{}` todo o código disponibilizado.

```json
  // Configurações da fonte JetBrains Mono
  "editor.fontFamily": "JetBrains Mono",
  "editor.fontLigatures": true,

  // Demais configurações
  "workbench.colorTheme": "Omni",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.startupEditor": "newUntitledFile",

  "explorer.compactFolders": false,
  "editor.renderLineHighlight": "gutter",
  "workbench.editor.labelFormat": "short",
  "extensions.ignoreRecommendations": true,

  "javascript.updateImportsOnFileMove.enabled": "never",
  "typescript.updateImportsOnFileMove.enabled": "never",

  "breadcrumbs.enabled": true,
  "editor.parameterHints.enabled": false,
	"editor.formatOnSave": true,
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,
  
  "emmet.syntaxProfiles": { "javascript": "jsx" },
  "emmet.includeLanguages": { "javascript": "javascriptreact" },

  "javascript.suggest.autoImports": true,
  "typescript.suggest.autoImports": true,
```

##### Criar arquivo
   * index.tsx
   * styles.ts

#### Criado estilos
