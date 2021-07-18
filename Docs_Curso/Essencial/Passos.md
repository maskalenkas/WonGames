# Criar o bd no postGre

1- Inicializar o Strapi
	# criar as relações
	# Configurar o plugin de Graphql
	# COnfigurar o editor para CKEditor
	# Configurar a pagina do Strapi
	# Popular os dados

2- Inicializar no front
	# Configurar as fontes
		- https://google-webfonts-helper.herokuapp.com/fonts/
		- Baixar do site
		- colocar as fontes baixadas no ~/public/fonts
		- ~/styles/global.ts
			- referenciar as fontes baixadas
			- Utilizar font-display: swap no @font-face
			- Utilizar o anti-aliasing no seletor *


	# Configurar os themes
		~/styles/theme
			- Colocar as variaveis
	
	# Criar o themeProvider
		 https://styled-components.com/docs/api#themeprovider
		- ~/pages/_app.tsx
			- Encapsular todo com o themeProvider
		- COnfigurar para que o _app.tsx saiba qual o tipo do themePRovider
		
