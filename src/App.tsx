function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-500 via-neutral-300 to-cyan-500">
      <div className="bg-white overflow-hidden grid grid-cols-[16rem_1fr] w-[1100px] mx-auto rounded-xl min-h-[750px] shadow-sm border-black/20">
        <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
          </div>
        </aside>
        <main className="flex-grow p-4">
          <div className="max-w-[700px] mx-auto pt-16 prose prose-sky">
            <h1>Modelos de Parágrafo no Notion</h1>

            <h2>Parágrafo Padrão</h2>
            <p>O Notion é uma plataforma de produtividade que combina notas, tarefas, bancos de dados e muito mais em um único lugar.</p>

            <h2>Parágrafo com Negrito</h2>
            <p>O <strong>Notion</strong> permite que você crie documentos colaborativos de forma fácil e organizada.</p>

            <h2>Parágrafo com Itálico</h2>
            <p>No <em>Notion</em>, você pode criar páginas e subpáginas para estruturar suas informações de maneira hierárquica.</p>

            <h2>Parágrafo com Link</h2>
            <p>Visite o <a href="https://www.notion.so/">site do Notion</a> para obter mais informações sobre essa incrível ferramenta.</p>

            <h2>Parágrafo com Lista não Ordenada</h2>
            <p>Aqui estão algumas das principais características do Notion:</p>
            <ul>
              <li>Edição colaborativa em tempo real</li>
              <li>Organização flexível em blocos</li>
              <li>Integração com outras ferramentas populares</li>
            </ul>

            <h2>Parágrafo com Lista Ordenada</h2>
            <p>Algumas dicas para aproveitar ao máximo o Notion:</p>
            <ol>
              <li>Explore os modelos de página pré-definidos</li>
              <li>Crie sua própria estrutura de blocos personalizada</li>
              <li>Utilize as opções de formatação para destacar informações importantes</li>
            </ol>

            <h2>Parágrafo com Citação</h2>
            <p>No Notion, você pode inserir citações relevantes para fornecer referências ou adicionar um toque inspirador aos seus documentos.</p>
            <blockquote>
              <p>"O conhecimento é poder". - Francis Bacon</p>
            </blockquote>

            <h2>Parágrafo com Código Inline</h2>
            <p>No Notion, você pode adicionar trechos de código inline para compartilhar exemplos ou instruções de programação:</p>
            <p>Aqui está um exemplo de código em JavaScript: <code>console.log("Olá, mundo!");</code></p>

            <h2>Parágrafo com Linha Horizontal</h2>
            <p>Use uma linha horizontal para separar seções ou marcar uma transição em seu conteúdo.</p>
            <hr />

              <h2>Parágrafo com Marcação de Destaque</h2>
              <p>Use a marcação de destaque para chamar a atenção para informações importantes:</p>
              <p>O Notion oferece uma <mark>experiência completa de produtividade</mark> em uma única plataforma.</p>

              <h2>Parágrafo com Sublinhado</h2>
              <p>Você pode usar o sublinhado para destacar palavras ou frases específicas em seus documentos no Notion.</p>
              <p>Destaque as principais ideias com um <u>sublinhado</u> para facilitar a leitura e compreensão.</p>

              <h2>Parágrafo com Imagem</h2>
              <p>O Notion permite a inserção de imagens em seus documentos:</p>
              <img src="caminho/para/imagem.jpg" alt="Imagem do Notion" />

              <h2>Parágrafo com Vídeo</h2>
              <p>Você também pode incorporar vídeos em suas páginas no Notion:</p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/seu-video-aqui"></iframe>

              <h2>Parágrafo com Tabela</h2>
              <p>As tabelas são úteis para organizar dados de forma estruturada:</p>
              <table>
                <tr>
                  <th>Nome</th>
                  <th>Idade</th>
                </tr>
                <tr>
                  <td>João</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Maria</td>
                  <td>28</td>
                </tr>
              </table>

              <h2>Parágrafo com Título</h2>
              <p>No Notion, você pode usar títulos para separar seções em suas páginas:</p>
              <h3>Título da seção</h3>
              <p>Aqui está o conteúdo da seção.</p>

              <h2>Parágrafo com Anexo</h2>
              <p>No Notion, você pode fazer o upload de anexos, como documentos, planilhas ou apresentações:</p>
              <p>Aqui está um exemplo de <a href="caminho/para/anexo.pdf">anexo em PDF</a> para download.</p>

          </div>
        </main>
      </div>
    </div>
  )
}

export default App
