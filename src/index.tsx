function Headline() {
  return (
    <>
      <h1 className="headline">
        Hello this in an h1
        <br />
        new line
      </h1>
      <h2>Second Headline</h2>
    </>
  );
}

function Main() {
  return (
    <div>
      <Headline />
      <p>Lorem ipsum</p>
      <ul>
        <li>
          <a href="">anchor</a>
        </li>
        <li>More</li>
      </ul>
      <button
        ref={node => {
          // eslint-disable-next-line no-console
          node.addEventListener('click', console.log);
        }}
      >
        Click Me!
      </button>
    </div>
  );
}

const app = document.querySelector('#root');
app.appendChild(Main());
