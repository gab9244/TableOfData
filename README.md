Instale as bibliotecas que você usará, como Material UI para componentes da interface do usuário e Recharts para gráficos.



1. <Box>
Função: Box é um componente do Material-UI que atua como um container flexível. Ele pode ser usado para aplicar estilos e layouts em elementos filhos. Aqui, ele encapsula todo o conteúdo da navegação e das visualizações.
2. <Tabs>
Função: Tabs é um componente do Material-UI que cria uma barra de navegação com abas. Cada aba pode ser usada para alternar entre diferentes visualizações ou seções do aplicativo.
Propriedades:
value={view}: Define qual aba está atualmente selecionada. O valor de view determina qual aba está ativa.
onChange={handleTabChange}: Função que é chamada quando uma aba é selecionada. Atualiza o estado view para refletir a aba selecionada.
3. <Tab>
Função: Tab representa uma única aba dentro do componente Tabs.
Propriedades:
label: O texto que será exibido na aba.
value: O valor associado a esta aba. Esse valor é usado para identificar qual aba está selecionada.