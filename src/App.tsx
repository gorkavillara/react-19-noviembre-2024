const App = () => {
  return (
    <div>
      <h1 className="text-red-600 text-3xl font-semibold mb-4">
        Hola mundo desde Tailwind
      </h1>
      <div className="flex space-x-4">
        <button className={`bg-cyan-400 text-[#ffffff] py-4 px-8 rounded-lg hover:opacity-50 transition-all`}>
          Botón 1
        </button>
        <button className="bg-cyan-400 text-white py-4 px-8 rounded-lg hover:opacity-50 transition-all">
          Botón 2
        </button>
      </div>
    </div>
  )
}

export default App
