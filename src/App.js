import React, {useEffect, useState} from 'react';
import './App.css';

import DragNDrop from './components/DragNDrop'

const defaultData = [
  {title: 'group 1', items: ['1', '2', '3']},
  {title: 'group 2', items: ['4', '5']}
]

function App() {
  const [data, setData] = useState();  
  useEffect(() => {
    if (localStorage.getItem('List')) {
      console.log(localStorage.getItem('List'))
      setData(JSON.parse(localStorage.getItem('List')))
    } else {
      setData(defaultData)
    }
  }, [setData])
  return (
    <div className="App">
      <header className="App-header">
      <DragNDrop data={data} />
      {/* <div className="drag-n-drop">
        {data.map((grp, grpI) => (
          <div key={grp.title} className="dnd-group">
            {grp.items.map((item, itemI) => (
              <div draggable key={item} className="dnd-item">
                {item}
              </div>
            ))}
          </div>
        ))}
        </div> */}

          {/* <div className="drag-n-drop">
            <div className="dnd-group">
              <div className="group-title">Group 1</div>
              <div className="dnd-item">
                <div>
                  <p>ITEM 1</p>
                </div>
              </div>
              <div className="dnd-item">
                <div>
                  <p>ITEM 2</p>
                </div>
              </div>
              <div className="dnd-item">
                <div>
                  <p>ITEM 3</p>
                </div>
              </div>
            </div>
            <div className="dnd-group">
            <div className="group-title">Group 1</div>
              <div className="dnd-item">
                <div>
                  <p>ITEM 1</p>
                </div>
              </div>
              <div className="dnd-item">
                <div>
                  <p>ITEM 2</p>
                </div>
              </div>
            </div>
          </div> */}
      </header>
    </div>
  );
}

export default App;
