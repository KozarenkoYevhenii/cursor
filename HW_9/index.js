const generateBlocks = () => {
  document.body.innerHTML += `<div class = 'wrapper'></div>`
  const wrapperBlock = document.body.querySelector('.wrapper')
  let i = 0
  while (i < 25) {
    let color = Math.round(Math.random() * 999999);
    wrapperBlock.innerHTML += `<div style = 'background-color : #${color}' class = 'block'></div>`;
    i++;
  }
  
  const styles = `
  <style>
    .wrapper{
      display : grid;
      grid-template-columns : repeat(5, 50px);
    }
    .block {
      width : 50px;
      height : 50px;
      padding : 0;
      margin : 0;
    }
  `
  document.body.innerHTML += styles;
}

generateBlocks()

//----------Advanced----------

const generateBlocksInterval = () => {
  setInterval(() => { document.body.innerHTML = '' }, 1000)
  setInterval(() => { generateBlocks() }, 1000)
}

generateBlocksInterval()