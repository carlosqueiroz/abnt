Tutorial: Criar um aplicativo do Google Chrome
==============================================

_Este artigo é para administradores e desenvolvedores do Google Chrome com experiência no desenvolvimento de aplicativos da Web do Google Chrome._

Muitas escolas e empresas querem criar aplicativos de favoritos como, por exemplo, um aplicativo apontando para a agenda escolar ou para o site de HR, e pré-instalar esses aplicativos nos computadores de seus alunos.

Atualmente, na página [Configurações do Google Chrome](/chrome/a/answer/2657289), é possível especificar o URL da Página inicial e Páginas a carregar na inicialização. No entanto, se você quiser pré-instalar aplicativos de favoritos para que eles sejam exibidos a seus usuários quando eles abrirem uma nova guia no Google Chrome, siga as etapas abaixo .

É preciso ser proprietário do site com o qual você cria um vínculo e confirmá-lo nas [Ferramentas do Google para webmasters](http://www.google.com/webmasters/tools/) para criar vínculos com aplicativos da Web do Google Chrome.

Etapa 1. Desenvolver seu aplicativo
-----------------------------------

1.  Desenvolva seu aplicativo como um arquivo manifest.json. Isso pode ser feito em um editor de texto como o Bloco de notas do Windows ou o [TextMate](http://macromates.com/) do Mac. Crie um arquivo .txt e salve-o como manifest.json. Salve o arquivo em uma pasta na área de trabalho. Dê o nome de seu aplicativo à pasta.

Exemplo de arquivo manifest.json de um aplicativo de favoritos:

`{  
"manifest_version": 2,  
"name": "G Suite Certification app",  
"description": "Link to G Suite Certification website",  
"version": "1.1",  
"icons": {  
"128": "128.png"  
},  
"app": {  
"urls": [  
"http://certification.googleapps.com/app-info/"  
],  
"launch": {  
"web_url": "http://certification.googleapps.com/"  
}  
},  
"permissions": [  
"unlimitedStorage",  
"notifications"  
]  
}`

2.  Crie um logotipo de 128px por 128px para seu aplicativo. Dê o nome "128.png" ao arquivo e coloque-o na mesma pasta do arquivo manifest.json
3.  Hospede seu arquivo JSON e logotipo no App Engine ou em seu próprio servidor da Web.
    *   Por exemplo, você pode hospedar seu arquivo em um site do Google Sites, servidor da Web da empresa ou no App Engine. A hospedagem no App Engine é gratuita para usuários do G Suite, G Suite for Government e G Suite for Education contanto que você mantenha-se abaixo das [cotas de uso](https://developers.google.com/appengine/docs/quotas) dos usuários.

Etapa 2. Testar seu aplicativo
------------------------------

1.  Abra o Google Chrome e acesse ![Menu](//storage.googleapis.com/support-kms-prod/CA8FF18D7E3B5E55E694D8BF1794FB0FB0AE "Menu") **\> Ferramentas > Extensões**.
2.  Clique em **Modo do desenvolvedor > Carregar extensão estendida…**
3.  Navegue e **Selecione** a pasta que contém seu arquivo manifest.json e o logotipo.
    *   Se seu arquivo não carregar imediatamente, verifique se o código JSON está formatado corretamente por meio do [JSON Validator](http://jsonlint.com/).
4.  Abra uma nova guia no Google Chrome para verificar se seu aplicativo é carregado e funciona corretamente. Em caso negativo, ajuste-o e teste-o até que ele funcione corretamente em seu navegador.

Etapa 3. Compactar seu aplicativo
---------------------------------

1.  Quando seu aplicativo estiver pronto, acesse **Ferramentas > Extensões** no Google Chrome e clique em **Compactar extensão…**
2.  Selecione a pasta na área de trabalho que contém o arquivo manifest.json. Inserir uma chave privada é opcional.
3.  Clique em **Compactar extensão**. Você receberá uma janela de confirmação dizendo-lhe para manter o arquivo .pem seguro e não excluí-lo.
4.  Coloque o arquivo .crx salvo em sua área de trabalho na mesma pasta onde o arquivo manifest.json está. (crx é um tipo de arquivo .zip)
5.  Desinstale a versão descompactada do aplicativo do Google Chrome para que ele não entre em conflito com o aplicativo compactado.
6.  Arraste e solte o novo arquivo .crx no navegador Google Chrome para instalar o aplicativo compactado.

Etapa 4. Encontrar o ID do aplicativo
-------------------------------------

1.  Faça o download da extensão "Chrome ID Finder" para obter o ID de seu aplicativo. Para obter o ID de seu aplicativo, [clique neste link](https://sites.google.com/site/pushcrx/privatewebstore/extension_info.crx) para instalar a extensão "Chrome ID Finder" no navegador Google Chrome. No momento, essa é a única maneira de obter o ID de seu aplicativo.
2.  Clique no ícone da extensão, que tem o formato de uma peça de quebra-cabeças, no canto superior direito de seu navegador para iniciar a extensão. Isso abrirá uma nova página que contém a lista de aplicativos do Google Chrome instalados e o ID dos aplicativos. Copie e cole o ID de seu aplicativo.
3.  Crie um arquivo auto-update.xml, como o exemplo abaixo, e envie-o para seu local de hospedagem. Isso garante que o URL de seu aplicativo será atualizado se você criar uma nova versão.
4.  Insira o ID do aplicativo e a localização de onde você deseja armazenar o aplicativo compactado, por exemplo, no App Engine, no Google Sites ou em seu servidor.

Exemplo de arquivo auto-update.xml:

`<?xml version='1.0' encoding='UTF-8'?>  
<gupdate xmlns='http://www.google.com/update2/response' protocol='2.0'>.  
 <app appid='**_odomlgbibdfgoclgndddglpfhjkmapkj_**'>  
   <updatecheck codebase='https://sites.google.com/a/googleapps.com/deployment-specialist/Home/app-info/google-apps-certification.crx' version='1.2' />  
 </app>  
</gupdate>`

Salve o arquivo como auto-update.xml. É possível usar um programa como o Adobe Dreamweaver ou o TextMate para criar o arquivo .xml.

5.  Coloque o arquivo .crx e o arquivo .xml na pasta de seu aplicativo. Envie essa pasta para seu local de hospedagem.

Etapa 5. Publicar seu aplicativo
--------------------------------

Você tem duas opções: você pode publicar seu aplicativo publicamente ou em particular. Em ambos os casos, depois que você publicar o aplicativo, é possível [pré-instalá-lo](/chrome/a/answer/1375694) e [recomendá-lo](/chrome/a/answer/2649489#recommend) a seus usuários. Saiba mais sobre [como publicar aplicativos da Web do Google Chrome.](https://developers.google.com/chrome/web-store/docs/publish)

**Publicar seu aplicativo publicamente:**

Quando seu aplicativo estiver pronto, envie-o para o [Painel de controle do desenvolvedor do Google Chrome](https://chrome.google.com/webstore/developer/dashboard). Antes de o aplicativo ser publicado, será preciso adicionar mais imagens do produto, conforme explicado no painel de controle do desenvolvedor.

**Publicar seu aplicativo em particular:**

[Siga estas etapas](/chrome/a/answer/2663860) para publicar seu aplicativo em uma coleção particular. Primeiro, você precisa [criar uma coleção particular](/chrome/a/answer/2649489) para sua organização.

Compartilhar no:

Este artigo foi útil para você?

Como podemos melhorá-lo?

SimNão

EnviarTutorial: Criar um aplicativo do Google Chrome
==============================================

_Este artigo é para administradores e desenvolvedores do Google Chrome com experiência no desenvolvimento de aplicativos da Web do Google Chrome._

Muitas escolas e empresas querem criar aplicativos de favoritos como, por exemplo, um aplicativo apontando para a agenda escolar ou para o site de HR, e pré-instalar esses aplicativos nos computadores de seus alunos.

Atualmente, na página [Configurações do Google Chrome](/chrome/a/answer/2657289), é possível especificar o URL da Página inicial e Páginas a carregar na inicialização. No entanto, se você quiser pré-instalar aplicativos de favoritos para que eles sejam exibidos a seus usuários quando eles abrirem uma nova guia no Google Chrome, siga as etapas abaixo .

É preciso ser proprietário do site com o qual você cria um vínculo e confirmá-lo nas [Ferramentas do Google para webmasters](http://www.google.com/webmasters/tools/) para criar vínculos com aplicativos da Web do Google Chrome.

Etapa 1. Desenvolver seu aplicativo
-----------------------------------

1.  Desenvolva seu aplicativo como um arquivo manifest.json. Isso pode ser feito em um editor de texto como o Bloco de notas do Windows ou o [TextMate](http://macromates.com/) do Mac. Crie um arquivo .txt e salve-o como manifest.json. Salve o arquivo em uma pasta na área de trabalho. Dê o nome de seu aplicativo à pasta.

Exemplo de arquivo manifest.json de um aplicativo de favoritos:

`{  
"manifest_version": 2,  
"name": "G Suite Certification app",  
"description": "Link to G Suite Certification website",  
"version": "1.1",  
"icons": {  
"128": "128.png"  
},  
"app": {  
"urls": [  
"http://certification.googleapps.com/app-info/"  
],  
"launch": {  
"web_url": "http://certification.googleapps.com/"  
}  
},  
"permissions": [  
"unlimitedStorage",  
"notifications"  
]  
}`

2.  Crie um logotipo de 128px por 128px para seu aplicativo. Dê o nome "128.png" ao arquivo e coloque-o na mesma pasta do arquivo manifest.json
3.  Hospede seu arquivo JSON e logotipo no App Engine ou em seu próprio servidor da Web.
    *   Por exemplo, você pode hospedar seu arquivo em um site do Google Sites, servidor da Web da empresa ou no App Engine. A hospedagem no App Engine é gratuita para usuários do G Suite, G Suite for Government e G Suite for Education contanto que você mantenha-se abaixo das [cotas de uso](https://developers.google.com/appengine/docs/quotas) dos usuários.

Etapa 2. Testar seu aplicativo
------------------------------

1.  Abra o Google Chrome e acesse ![Menu](//storage.googleapis.com/support-kms-prod/CA8FF18D7E3B5E55E694D8BF1794FB0FB0AE "Menu") **\> Ferramentas > Extensões**.
2.  Clique em **Modo do desenvolvedor > Carregar extensão estendida…**
3.  Navegue e **Selecione** a pasta que contém seu arquivo manifest.json e o logotipo.
    *   Se seu arquivo não carregar imediatamente, verifique se o código JSON está formatado corretamente por meio do [JSON Validator](http://jsonlint.com/).
4.  Abra uma nova guia no Google Chrome para verificar se seu aplicativo é carregado e funciona corretamente. Em caso negativo, ajuste-o e teste-o até que ele funcione corretamente em seu navegador.

Etapa 3. Compactar seu aplicativo
---------------------------------

1.  Quando seu aplicativo estiver pronto, acesse **Ferramentas > Extensões** no Google Chrome e clique em **Compactar extensão…**
2.  Selecione a pasta na área de trabalho que contém o arquivo manifest.json. Inserir uma chave privada é opcional.
3.  Clique em **Compactar extensão**. Você receberá uma janela de confirmação dizendo-lhe para manter o arquivo .pem seguro e não excluí-lo.
4.  Coloque o arquivo .crx salvo em sua área de trabalho na mesma pasta onde o arquivo manifest.json está. (crx é um tipo de arquivo .zip)
5.  Desinstale a versão descompactada do aplicativo do Google Chrome para que ele não entre em conflito com o aplicativo compactado.
6.  Arraste e solte o novo arquivo .crx no navegador Google Chrome para instalar o aplicativo compactado.

Etapa 4. Encontrar o ID do aplicativo
-------------------------------------

1.  Faça o download da extensão "Chrome ID Finder" para obter o ID de seu aplicativo. Para obter o ID de seu aplicativo, [clique neste link](https://sites.google.com/site/pushcrx/privatewebstore/extension_info.crx) para instalar a extensão "Chrome ID Finder" no navegador Google Chrome. No momento, essa é a única maneira de obter o ID de seu aplicativo.
2.  Clique no ícone da extensão, que tem o formato de uma peça de quebra-cabeças, no canto superior direito de seu navegador para iniciar a extensão. Isso abrirá uma nova página que contém a lista de aplicativos do Google Chrome instalados e o ID dos aplicativos. Copie e cole o ID de seu aplicativo.
3.  Crie um arquivo auto-update.xml, como o exemplo abaixo, e envie-o para seu local de hospedagem. Isso garante que o URL de seu aplicativo será atualizado se você criar uma nova versão.
4.  Insira o ID do aplicativo e a localização de onde você deseja armazenar o aplicativo compactado, por exemplo, no App Engine, no Google Sites ou em seu servidor.

Exemplo de arquivo auto-update.xml:

`<?xml version='1.0' encoding='UTF-8'?>  
<gupdate xmlns='http://www.google.com/update2/response' protocol='2.0'>.  
 <app appid='**_odomlgbibdfgoclgndddglpfhjkmapkj_**'>  
   <updatecheck codebase='https://sites.google.com/a/googleapps.com/deployment-specialist/Home/app-info/google-apps-certification.crx' version='1.2' />  
 </app>  
</gupdate>`

Salve o arquivo como auto-update.xml. É possível usar um programa como o Adobe Dreamweaver ou o TextMate para criar o arquivo .xml.

5.  Coloque o arquivo .crx e o arquivo .xml na pasta de seu aplicativo. Envie essa pasta para seu local de hospedagem.

Etapa 5. Publicar seu aplicativo
--------------------------------

Você tem duas opções: você pode publicar seu aplicativo publicamente ou em particular. Em ambos os casos, depois que você publicar o aplicativo, é possível [pré-instalá-lo](/chrome/a/answer/1375694) e [recomendá-lo](/chrome/a/answer/2649489#recommend) a seus usuários. Saiba mais sobre [como publicar aplicativos da Web do Google Chrome.](https://developers.google.com/chrome/web-store/docs/publish)

**Publicar seu aplicativo publicamente:**

Quando seu aplicativo estiver pronto, envie-o para o [Painel de controle do desenvolvedor do Google Chrome](https://chrome.google.com/webstore/developer/dashboard). Antes de o aplicativo ser publicado, será preciso adicionar mais imagens do produto, conforme explicado no painel de controle do desenvolvedor.

**Publicar seu aplicativo em particular:**

[Siga estas etapas](/chrome/a/answer/2663860) para publicar seu aplicativo em uma coleção particular. Primeiro, você precisa [criar uma coleção particular](/chrome/a/answer/2649489) para sua organização.

Compartilhar no:

Este artigo foi útil para você?

Como podemos melhorá-lo?

SimNão

Enviar
