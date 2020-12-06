/*FETCH API */

/* const apiKey = 'NcHchx8Ns6B3uvOJ9wA7WabF0wbjrN9t';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);


peticion
      .then( resp => resp.json()
      .then( ({ data }) => {
        const {url} = data.images.original;
        console.log(data);

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
      })  
      ).catch( console.warn );
 */




/*  Async - await */


const getImagen = async() =>{

  const apiKey = 'NcHchx8Ns6B3uvOJ9wA7WabF0wbjrN9t';
  const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
  const {data} = await resp.json();
  console.log(data.images.original);

  const img = document.createElement('img');
  img.src = data.images.original.url;

  document.body.append( img );
  

}

getImagen();