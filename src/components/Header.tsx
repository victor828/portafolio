import { useState } from 'preact/hooks'

export function Header ({title}:{title:string}){
  const [isHidden, setHidden] = useState("hidden")
  const handleHidden = () => {
    isHidden === "hidden" ? setHidden("") : setHidden("hidden")
  }
return(
<>
  <header className={`flex bg-black text-white px-4 `}>
  <button onClick={handleHidden} class='text-white p-2 rounded-lg m-1 text-xl'>Menu</button>
  <h1>{title}</h1>
</header>
<nav class={isHidden}>
  <ol class="grid gap-2">
    <li><a href='/'>Home</a></li><li><a href='/about'>About</a></li><li>
      <a href='/proyect'>Proyects</a>
    </li>
  </ol>
</nav>
</>
  )
}

<style>
  header {
    position: relative;
    background-color: black;
    padding-inline: 0.5rem;
    display: flex;
  }
  header button {
    border: var(--border-color);
  }
  header h1 {
    margin: 0;
    margin-left: 3%;
  }
  nav {
    border: var(--border-color);
    padding: 1rem;
    width: 40%;
    position: absolute;
    left: 13px;
    top: 54px;
    background-color: rgba(79,79,79,0.98);
    border-radius: 0 1rem 1rem 1rem;
  }
  li{
    background-color: gray;
    border-radius: 8px;
    text-align: center;
  }
  li:hover{
    border: var(--border-color);
    background-color: aqua;
    border-radius: 1rem;
    padding-inline: .5rem;

  }
  a{
    font-size: 50px;
  }
</style>
