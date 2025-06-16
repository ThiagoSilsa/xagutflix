import style from "./Form.module.css";
import categories from "../../json/categories.json";
import { useState } from "react";


// Cada elemento do formulário está dentro de uma div

function Form() {
  // Para alterar estados, deve-se usar o useState()
  // States para ramazenar url e categoria
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");

  // Armazenarvideos que estou cadastrando
  const [videos, setVideos] = useState([]);

  // State para guardar os erros:
  const [errors, setErrors] = useState("");

  function valideUrl(url) {
    // Validador de vídeo do youtube
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;

    if (!regex.test(url) || url.length < 43) {
      setErrors("ERRO: URL inválida");
      return false;
    } else {
      // https://www.youtube.com/watch?v=uYq3CDpRS2o // id do video
      return url.substring(32, 43);
    }
  }

  function onSave(e) {
    // Quando salvar o formulário...
    e.preventDefault();

    //validar category
    if (!category || category === "") {
      setErrors("ERRO: Escolha uma categoria!");
      return;
    } else {
      setErrors("");
    }

    // Validar URL
    // constante pegará resultado da validaç]ao, podendo ser false ou o id
    const urlVideo = valideUrl(url);
    if (urlVideo && category) {
      // salvar dados
      // Guardar a url e categoria
      const newVideo = { url, category };
      // irá pegar todos os videos já cadastrados e irá adicionar o novo vídeo
      setVideos([...videos, newVideo]);
      console.log(videos);

      // Usando localStorage
      // tenho 5mb de aramazenamento local possível
      localStorage.setItem("videos", JSON.stringify([...videos, newVideo]));

      // limpar o form
      setUrl("");
      setCategory("");
    }else{
      setErrors('ERRO : URL inválida')
    }
    
  }

  return (
    <section className={style.container}>
      <h2>Cadastro de vídeo</h2>
      <form onSubmit={onSave}>
        <div>
          <label>URL do vídeo</label>
          <input
            type="text"
            placeholder="Digite a URL do vídeo"
            required="required"
            // Tenho que atrelar o value com o onchange em inputs, pois o react
            // Não deixa ocorrer alterações sem ser "avisado"

            // Necessário para digitar e capturar os dados
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            // Validando para tamanho da url do youtube (43)
            minLength="43"
            maxLength="43"
          />
        </div>
        <div>
          <label>Categoria</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required="required"
          >
            <option value="-">Selecione uma categoria</option>
            {categories.map((categorie) => (
              <option value={categorie.name}>{categorie.name}</option>
            ))}
          </select>
        </div>

        <div>
          <button className={style.but} type="submit">Cadastrar</button>
        </div>
        <div>{errors}</div>
      </form>
    </section>
  );
}

export default Form;
