const App = () => {
  return (
    <main>
      <div
        id="drum-machine"
        className="w-[500px] border-4 border-black border-solid flex"
      >
        <div className="drum-pads grid grid-cols-3 h-[300px] flex-1  gap-3 p-5">
          <button className="drum-pad">Q</button>
          <button className="drum-pad">W</button>
          <button className="drum-pad">E</button>
          <button className="drum-pad">A</button>
          <button className="drum-pad">S</button>
          <button className="drum-pad">D</button>
          <button className="drum-pad">Z</button>
          <button className="drum-pad">X</button>
          <button className="drum-pad">C</button>
        </div>
        <div id="display" className="flex-1 p-5">awfw</div>
      </div>
    </main>
  );
};
export default App;
