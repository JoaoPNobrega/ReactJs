const textContent = `A inteligência artificial (IA) tem se destacado como uma das tecnologias mais transformadoras da atualidade.
Aplicações que vão desde assistentes virtuais até a análise preditiva de grandes volumes de dados mostram como a IA pode
impulsionar a eficiência em múltiplos setores. Ao automatizar tarefas repetitivas, empresas liberam profissionais para atividades
mais criativas, enquanto algoritmos sofisticados oferecem insights antes inacessíveis. No entanto, o avanço acelerado da tecnologia
traz debates éticos importantes: como garantir que sistemas aprendam sem viés, respeitem a privacidade e mantenham a transparência?
A resposta depende de uma colaboração multidisciplinar que envolva especialistas em tecnologia, direito e ciências sociais.
Assim, é possível direcionar o desenvolvimento da IA para benefícios coletivos, promovendo inovação responsável e sustentável.`;

function TextSection() {
  return (
    <section className="section-card">
      <h2>Leitura Recomendada</h2>
      <div className="text-scroll">
        {textContent.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default TextSection;
