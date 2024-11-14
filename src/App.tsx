const App = () => {
  return (
    <>
      <h1>Hola mundo desde Bootstrap</h1>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-light">
        Light
      </button>
      <button type="button" className="btn btn-dark">
        Dark
      </button>
      <button type="button" className="btn btn-link">
        Link
      </button>
      <div className="container-sm">100% wide until small breakpoint</div>
      <div className="container-md">100% wide until medium breakpoint</div>
      <div className="container-lg">100% wide until large breakpoint</div>
      <div className="container-xl">100% wide until extra large breakpoint</div>
      <div className="container-xxl">
        100% wide until extra extra large breakpoint
      </div>
      <div className="row">
        <div className="col-md">Col 1</div>
        <div className="col-md">Col 2</div>
        <div className="col-md">Col 3</div>
      </div>
    </>
  )
}

export default App
