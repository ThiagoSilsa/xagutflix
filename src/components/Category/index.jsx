import style from "./Category.module.css";

// O vite permite importar arquivos json já em formato de objeto, logo não preciso convertê-lo para array
// Caso não fizesse isso, teria que fazer:
// fetch('videos.json')
//   .then(res => res.json())
// método .json() transforma em objeto javaScript
//   .then(videos => {...}

function Category({ category, children }) {
  return (
    <section className={style.category}>
      <h2>{category}</h2>
      {/* A div abaixo que vai receber os cards */}
      <div>{children}</div>
    </section>
  );
}

export default Category;
